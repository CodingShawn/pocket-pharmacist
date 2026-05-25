import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import Warning from "@material-ui/icons/Warning";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

const MIN_CHARS = 3;

function SearchForm({ setResults, setSearchTerm, data, isLoading, fetchError }) {
  const [drugName, setDrugName] = useState("");

  useEffect(() => {
    if (!data || drugName.length < MIN_CHARS) {
      setResults(null);
      return;
    }
    const upper = drugName.toUpperCase();
    setResults(
      data.filter(
        (r) =>
          r.active_ingredients.includes(upper) ||
          r.product_name.includes(upper)
      )
    );
    setSearchTerm(drugName);
    // eslint-disable-next-line
  }, [drugName, data]);

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()} id="search-form">
        <TextField
          label="Drug / Product Name"
          type="search"
          onChange={({ target }) => setDrugName(target.value)}
          value={drugName}
          autoFocus
        />
        <Tooltip title="Search by drug or product name — results appear after 3 characters" placement="bottom">
          <SearchIcon style={{ color: "rgba(0,0,0,0.54)", verticalAlign: "middle" }} />
        </Tooltip>
        {fetchError && (
          <Tooltip title={fetchError}>
            <Warning
              fontSize="small"
              aria-label="Data fetch warning"
              style={{ color: data ? "#f9a825" : "#d32f2f" }}
            />
          </Tooltip>
        )}
      </form>
      {isLoading && drugName.length >= MIN_CHARS && <Loading />}
    </section>
  );
}

export default SearchForm;
