import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";

function App() {
  const [results, setResults] = useState(null);
  const [drugName, setDrugName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Pocket Pharmacist</h1>
      <SearchForm
        setResults={setResults}
        drugName={drugName}
        setDrugName={setDrugName}
        setSearchTerm={setSearchTerm}
      />
      <DisplayResults results={results} searchTerm={searchTerm} />
    </>
  );
}

export default App;
