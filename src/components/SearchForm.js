import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Warning from "@material-ui/icons/Warning";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

function SearchForm({ setResults, setSearchTerm, data, isLoading, fetchError }) {
  const [drugName, setDrugName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isLoading) {
      saveResultsToState();
    }
    setHasSearched(true);
    setSearchTerm(drugName);
  }

  function saveResultsToState() {
    if (!data) return;
    let results = data.filter((record) => {
      return (
        record.active_ingredients.includes(drugName.toUpperCase()) ||
        record.product_name.includes(drugName.toUpperCase())
      );
    });
    setResults(results);
  }

  useEffect(() => {
    if(hasSearched) {
      saveResultsToState();
    }
    // eslint-disable-next-line
  },[isLoading])

  return (
    <section>
      <form onSubmit={handleSubmit} id="search-form">
        {!(isLoading && hasSearched) && (
          <>
            <TextField
              label="Drug / Product Name"
              type="search"
              onChange={({ target }) => setDrugName(target.value)}
              value={drugName}
              autoFocus
              required
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
            {fetchError && (
              <Tooltip title={fetchError}>
                <Warning
                  fontSize="small"
                  aria-label="Data fetch warning"
                  style={{ color: data ? "#f9a825" : "#d32f2f" }}
                />
              </Tooltip>
            )}
          </>
        )}
        {isLoading && hasSearched && <Loading />}
      </form>
    </section>
  );
}

export default SearchForm;
