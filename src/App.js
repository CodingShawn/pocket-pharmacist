import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState(null);
  const [drugName, setDrugName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <SearchForm
        setResults={setResults}
        drugName={drugName}
        setDrugName={setDrugName}
        setSearchTerm={setSearchTerm}
      />
      {results && <DisplayResults results={results} searchTerm={searchTerm} />}
      <Footer />
    </>
  );
}

export default App;
