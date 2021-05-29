import axios from "axios";

const BASE_URL =
  "https://data.gov.sg/api/action/datastore_search?resource_id=3ee20559-372d-42f0-bde9-245e21f7f39b";

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
