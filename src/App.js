import { useState, useEffect } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components.css";
import therapeuticProductsListingService from "./services/therapeuticProductsListing";

function App() {
  const [results, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setDrugData();
    // eslint-disable-next-line
  }, []);

  async function setDrugData() {
    const { data: drugs, error } = await therapeuticProductsListingService.getAllDrugs();
    setFetchError(error);
    if (drugs) setData(formatData(drugs));
    setIsLoading(false);
  }

  function formatData(drugs) {
    const formattedData = [];
    drugs.forEach((drug) => {
      const formattedDrug = {};
      for (let field in drug) {
        if (typeof drug[field] === "string") {
          formattedDrug[field.toLowerCase()] = drug[field].toUpperCase();
        }
      }
      formattedData.push(formattedDrug);
    });
    return formattedData;
  }

  return (
    <>
      <Header />
      <SearchForm
        setResults={setResults}
        setSearchTerm={setSearchTerm}
        data={data}
        isLoading={isLoading}
        fetchError={fetchError}
      />
      {results && <DisplayResults results={results} searchTerm={searchTerm} />}
      <Footer />
    </>
  );
}

export default App;
