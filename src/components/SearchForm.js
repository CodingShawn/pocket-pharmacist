import therapeuticProductsListingService from "../services/therapeuticProductsListing";

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
