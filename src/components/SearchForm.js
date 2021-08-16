import therapeuticProductsListingService from "../services/therapeuticProductsListing";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Loading from "../components/Loading";
import { useState } from "react";

function SearchForm({ setResults, setSearchTerm, data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [drugName, setDrugName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    saveResultsToState();
    setSearchTerm(drugName);
  }

  function saveResultsToState() {
    let results = data.filter((record) => {
      return (
        record.active_ingredients.includes(drugName.toUpperCase()) ||
        record.product_name.includes(drugName.toUpperCase())
      );
    });
    setResults(results);
    setIsLoading(false);
  }

  return (
    <section>
      <form onSubmit={handleSubmit} id="search-form">
        {!isLoading && (
          <>
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
          </>
        )}
        {isLoading && <Loading />}
      </form>
    </section>
  );
}

export default SearchForm;
