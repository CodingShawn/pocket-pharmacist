import { useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
  const [results, setResults] = useState(null);

  return (
    <>
      <h1>Pocket Pharmacist</h1>
      <SearchForm setResults={setResults} />
    </>
  );
}

export default App;
