// API returns JSON in following format: {
//   "_id": 4791,
//   "license_holder": "\"GALDERMA SINGAPORE PRIVATE LIMITED\"",
//   "atc_code": "D10AD53",
//   "approval_date": "21/4/2010",
//   "rank": 0,
//   "forensic_classification": "Prescription Only",
//   "active_ingredients": "\"Adapalene&&Benzoyl peroxide\"",
//   "strength": "\"0.10%&&2.50%\"",
//   "_full_count": "5",
//   "country_of_manufacturer": "\"FRANCE\"",
//   "route_of_administration": "TOPICAL",
//   "licence_no": "SIN13789P",
//   "product_name": "\"EPIDUO GEL 0.1%/2.5%\"",
//   "manufacturer": "\"LABORATOIRES GALDERMA\"",
//   "dosage_form": "\"GEL\""
// }
// Need to parse strings accordingly

// Removed following function as dataset now returns queries without quotations
// function removeQuotations(string) {
//   // As quotations are always the first and last char, to simply remove those chars - outdated comment
//   return string.substring(1, string.length - 1);
// }

function replaceAmpersand(string) {
  return string.replace(/&&/g, ", ");
}

function parseString(string) {
  return replaceAmpersand(string).toUpperCase();
}

export function seperateComponents(string) {
  return string.replace(/,/g, "\n");
}

const parserUtils = { seperateComponents, parseString };

// For testing with jest
// module.exports = {
//   removeQuotations,
//   replaceAmpersand,
//   parseString,
//   seperateComponents,
// };

export default parserUtils;
