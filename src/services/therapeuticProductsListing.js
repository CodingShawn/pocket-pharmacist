import axios from "axios";

const BASE_URL =
  "https://data.gov.sg/api/action/datastore_search?resource_id=3ee20559-372d-42f0-bde9-245e21f7f39b";

const therapeuticProductsListingService = {};

therapeuticProductsListingService.getDrug = async function getDrug(drugName) {
  const request = {
    params: {
      q: { active_ingredients: drugName },
    },
  };
  const response = await axios.get(BASE_URL, request);
  const { records } = response.data.result;
  return records;
};

export default therapeuticProductsListingService;
