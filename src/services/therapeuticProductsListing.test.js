import axios from "axios";
import therapeuticProductsListingService from "./therapeuticProductsListing";

jest.mock("axios");

const CACHE_KEY = "pp_therapeutic_products_v1";
const STALE_ERROR =
  "Failed to fetch latest drug listings. Showing previously cached data.";
const NO_DATA_ERROR =
  "Failed to fetch drug listings. Please check your connection and refresh.";

const mockRecords = [
  { product_name: "ASPIRIN", active_ingredients: "ASPIRIN" },
  { product_name: "PARACETAMOL", active_ingredients: "PARACETAMOL" },
];

function seedCache(records, ageMs = 0) {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data: records, cachedAt: Date.now() - ageMs })
  );
}

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe("getAllDrugs — fresh fetch", () => {
  test("calls the API and returns records when no cache exists", async () => {
    axios.get.mockResolvedValueOnce({
      data: { result: { records: mockRecords } },
    });

    const result = await therapeuticProductsListingService.getAllDrugs();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ data: mockRecords, error: null });
  });

  test("writes fetched records to localStorage", async () => {
    axios.get.mockResolvedValueOnce({
      data: { result: { records: mockRecords } },
    });

    await therapeuticProductsListingService.getAllDrugs();

    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    expect(cached.data).toEqual(mockRecords);
    expect(typeof cached.cachedAt).toBe("number");
  });
});

describe("getAllDrugs — cached load", () => {
  test("serves from cache without hitting the network when cache is fresh", async () => {
    seedCache(mockRecords);

    const result = await therapeuticProductsListingService.getAllDrugs();

    expect(axios.get).not.toHaveBeenCalled();
    expect(result).toEqual({ data: mockRecords, error: null });
  });

  test("fetches from network when cache is older than 7 days", async () => {
    seedCache(mockRecords, 8 * 24 * 60 * 60 * 1000);
    axios.get.mockResolvedValueOnce({
      data: { result: { records: mockRecords } },
    });

    await therapeuticProductsListingService.getAllDrugs();

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

describe("getAllDrugs — error handling", () => {
  test("returns stale data with STALE_ERROR when fetch fails and stale cache exists", async () => {
    seedCache(mockRecords, 8 * 24 * 60 * 60 * 1000);
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    const result = await therapeuticProductsListingService.getAllDrugs();

    expect(result).toEqual({ data: mockRecords, error: STALE_ERROR });
  });

  test("returns null data with NO_DATA_ERROR when fetch fails and no cache exists", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    const result = await therapeuticProductsListingService.getAllDrugs();

    expect(result).toEqual({ data: null, error: NO_DATA_ERROR });
  });
});
