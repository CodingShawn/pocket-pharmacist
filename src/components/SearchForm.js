import { useState } from "react";
import therapeuticProductsListingService from "../services/therapeuticProductsListing";

function SearchForm({ setResults }) {
  const [drugName, setDrugName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    saveResultsToState();
    setDrugName("");
  }

  async function saveResultsToState() {
    let results = await therapeuticProductsListingService.getDrug(drugName);
    setResults(results);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Drug name:{" "}
        <input
          type="text"
          name="text"
          onChange={({ target }) => setDrugName(target.value)}
          value={drugName}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
