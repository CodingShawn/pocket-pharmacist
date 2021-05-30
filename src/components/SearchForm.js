import therapeuticProductsListingService from "../services/therapeuticProductsListing";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Loading from "../components/Loading";
import { useState } from "react";

function SearchForm({ setResults, drugName, setDrugName, setSearchTerm }) {
  const [isLoading, setIsLoading] = useState(false);

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

  const style = {
    padding: "10px 10px 0 24px",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  };

  return (
    <section>
      <form onSubmit={handleSubmit} style={style}>
        <TextField
          label="Drug / Product Name"
          type="search"
          onChange={({ target }) => setDrugName(target.value)}
          value={drugName}
          required
        />
        {!isLoading && (
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        )}
        {isLoading && <Loading />}
      </form>
    </section>
  );
}

export default SearchForm;
