import therapeuticProductsListingService from "../services/therapeuticProductsListing";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

function SearchForm({
  setResults,
  drugName,
  setDrugName,
  setSearchTerm,
  setIsLoading,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    saveResultsToState();
    setSearchTerm(drugName);
  }

  async function saveResultsToState() {
    let results = await therapeuticProductsListingService.getDrug(drugName);
    setResults(results);
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px 10px 0 24px" }}>
      <TextField
        label="Drug / Product Name"
        type="search"
        onChange={({ target }) => setDrugName(target.value)}
        value={drugName}
        required
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
}

export default SearchForm;
