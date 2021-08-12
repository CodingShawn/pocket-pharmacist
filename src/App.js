import { useState, useEffect } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components.css";
import therapeuticProductsListingService from "./services/therapeuticProductsListing"

function App() {
  const [results, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    setDrugData()
  }, [])

  async function setDrugData() {
    const drugs = await therapeuticProductsListingService.getAllDrugs();
    setData(drugs);
  }

  return (
    <>
      <Header />
      <SearchForm setResults={setResults} setSearchTerm={setSearchTerm} data={data} />
      {results && <DisplayResults results={results} searchTerm={searchTerm} />}
      <Footer />
    </>
  );
}

export default App;
