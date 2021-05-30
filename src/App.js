import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
  const [results, setResults] = useState(null);
  const [drugName, setDrugName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <SearchForm
        setResults={setResults}
        drugName={drugName}
        setDrugName={setDrugName}
        setSearchTerm={setSearchTerm}
        setIsLoading={setIsLoading}
      />
      {isLoading && <Loading />}
      {results && (
        <DisplayResults results={results} searchTerm={searchTerm} />
      )}
    </>
  );
}

export default App;
