import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";

function App() {
  const [results, setResults] = useState(null);

  return (
    <>
      <h1>Pocket Pharmacist</h1>
      <SearchForm setResults={setResults} />
      <DisplayResults results={results} />
    </>
  );
}

export default App;
