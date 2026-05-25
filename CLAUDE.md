# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (localhost:3000)
npm run build      # Production build
npm test           # Run tests with Jest
npm run deploy     # Build and deploy to GitHub Pages (via gh-pages)
```

To run a single test file: `npx jest src/utils/utils.test.js`

## Architecture

This is a Create React App that lets users search Singapore's registered therapeutic drug products. All data is fetched upfront from the Singapore government's open data API on mount, then filtered client-side.

**Data flow:**
1. `App.js` calls `therapeuticProductsListingService.getAllDrugs()` on mount, fetching all ~5600+ records in one request (limit set to 100000 to bypass the API default of 100)
2. Records are normalized: all string fields uppercased and stored in state as `data`
3. `SearchForm` filters `data` client-side against `product_name` and `active_ingredients` fields on submit
4. `DisplayResults` renders the filtered results in a MUI datatable, applying display parsing via `utils.js`

**API:** `https://data.gov.sg/api/action/datastore_search` (CKAN datastore) with resource ID `43668192-c352-4420-9731-01043c67c471`. Queries use the `q` param with a field-specific object for targeted search, or just `limit` for bulk fetch.

**String parsing quirk:** The API returns multi-component values (active ingredients, strengths) joined with `&&` (e.g. `"Adapalene&&Benzoyl peroxide"`). `utils.js` replaces `&&` with `, ` in `parseString`, and `seperateComponents` then replaces commas with newlines so each component appears on its own line in the table. Note: the API previously wrapped strings in quotation marks — `removeQuotations` was the function that stripped them, but it was removed when the API changed format. The commented-out `module.exports` block in `utils.js` and the `removeQuotations` test in `utils.test.js` are artifacts of this past state.

**Test setup note:** `package.json` runs `jest` directly (not `react-scripts test`), but `utils.js` uses ES module `export` syntax while `utils.test.js` uses CommonJS `require`. The tests will fail unless `utils.js` exports via `module.exports` (the commented-out block at the bottom).

**Key dependencies:** Material UI v4 (`@material-ui/core`), `mui-datatables` for the results grid, `axios` for HTTP, `gh-pages` for deployment.
