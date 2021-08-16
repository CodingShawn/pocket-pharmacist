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

  useEffect(() => {
    setDrugData();
    // eslint-disable-next-line
  }, []);

  async function setDrugData() {
    const drugs = await therapeuticProductsListingService.getAllDrugs();
    const formattedData = formatData(drugs);
    setData(formattedData);
    setIsLoading(false);
  }

  function formatData(drugs) {
    let formattedData = drugs.map((drug) => {
      for (let field in drug) {
        if (typeof drug[field] === "string") {
          drug[field] = drug[field].toUpperCase();
        }
      }
      return drug;
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
      />
      {results && <DisplayResults results={results} searchTerm={searchTerm} />}
      <Footer />
    </>
  );
}

export default App;
