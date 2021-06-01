import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components.css";

function App() {
  const [results, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <SearchForm setResults={setResults} setSearchTerm={setSearchTerm} />
      {results && <DisplayResults results={results} searchTerm={searchTerm} />}
      <Footer />
    </>
  );
}

export default App;
