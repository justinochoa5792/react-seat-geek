import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Axios from "axios";
import SearchResults from "./components/SearchResults";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await Axios.get(
      `https://api.seatgeek.com/2/events?client_id=${process.env.REACT_APP_CLIENT_ID}&q=${search}`
    );
    setSearchResult(result.data.events);
  };
  return (
    <div className="App">
      <h1 className="pb-3">Find tickets via SeatGeek</h1>
      <Input
        placeholder={"Enter Band"}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmit}
      />
      <SearchResults searchResult={searchResult} />
    </div>
  );
}

export default App;
