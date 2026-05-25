import axios from "axios";

const BASE_URL =
  "https://data.gov.sg/api/action/datastore_search?resource_id=43668192-c352-4420-9731-01043c67c471";

const CACHE_KEY = "pp_therapeutic_products_v1";
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

const STALE_ERROR =
  "Failed to fetch latest drug listings. Showing previously cached data.";
const NO_DATA_ERROR =
  "Failed to fetch drug listings. Please check your connection and refresh.";

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.data) || typeof parsed.cachedAt !== "number") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, cachedAt: Date.now() })
    );
  } catch {
    // QuotaExceededError, private-browsing, etc. — caching is best-effort.
  }
}

const therapeuticProductsListingService = {};

therapeuticProductsListingService.getAllDrugs = async function getAllDrugs() {
  const cache = readCache();

  if (cache && Date.now() - cache.cachedAt < TTL_MS) {
    return { data: cache.data, error: null };
  }

  try {
    // Default download is 100, set to 100000 to ensure all records downloaded
    // 5621 products registered as of August 2021
    const response = await axios.get(BASE_URL, { params: { limit: 100000 } });
    const { records } = response.data.result;
    writeCache(records);
    return { data: records, error: null };
  } catch {
    if (cache) {
      return { data: cache.data, error: STALE_ERROR };
    }
    return { data: null, error: NO_DATA_ERROR };
  }
};

export default therapeuticProductsListingService;
