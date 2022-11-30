import axios from "axios";

const BASE_URL =
  "https://data.gov.sg/api/action/datastore_search?resource_id=43668192-c352-4420-9731-01043c67c471";

const therapeuticProductsListingService = {};

therapeuticProductsListingService.getDrug = async function getDrug(searchTerm) {
  const searchViaProductName = await searchViaField("product_name", searchTerm);
  const searchViaActiveIngredient = await searchViaField(
    "active_ingredients",
    searchTerm
  );
  const response = searchViaActiveIngredient.concat(searchViaProductName);
  return response;
};

therapeuticProductsListingService.getAllDrugs = async function getAllDrugs() {
  const request = {
    // Default download is 100, set to 100000 to ensure all records downloaded
    // 5621 products registered as of August 2021
    params: {
      limit: 100000,
    },
  };
  const response = await axios.get(BASE_URL, request);
  const { records } = response.data.result;
  return records;
}

async function searchViaField(searchField, searchTerm) {
  const request = {
    params: {
      q: { [searchField]: searchTerm },
    },
  };
  const response = await axios.get(BASE_URL, request);
  const { records } = response.data.result;
  return records;
}

export default therapeuticProductsListingService;
