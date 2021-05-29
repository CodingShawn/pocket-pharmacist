import therapeuticProductsListingService from "../services/therapeuticProductsListing";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

function SearchForm({ setResults, drugName, setDrugName, setSearchTerm }) {
  function handleSubmit(event) {
    event.preventDefault();
    saveResultsToState();
    setSearchTerm(drugName);
    setDrugName("");
  }

  async function saveResultsToState() {
    let results = await therapeuticProductsListingService.getDrug(drugName);
    setResults(results);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Drug / Product Name"
          type="search"
          onChange={({ target }) => setDrugName(target.value)}
          value={drugName}
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default SearchForm;
