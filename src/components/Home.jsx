import "../App.css";
import { useState } from "react";
import SearchResults from "./SearchResults";
import Input from "./Input";
import Axios from "axios";

function Home() {
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
      <Input
        placeholder={"Enter Band"}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmit}
      />
      <SearchResults searchResult={searchResult} />
    </div>
  );
}

export default Home;
