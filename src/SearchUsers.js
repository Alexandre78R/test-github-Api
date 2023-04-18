import axios from "axios";
import React, { useState, useEffect } from "react";

export default function () {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
   const controllor = new AbortController();
  // TODO : fetch the github user list matching the search query
  // (a new API call should be made every time the query changes)
  // (errors should be logged in the console or/and printed to the UI)


  useEffect(() => {
    if (query !== ''){
      axios
      .get(`https://api.github.com/search/users?q="${query}"`)
      .then((res) => res.data.items)
      .then((users) => setSearchResults(users))
      .catch((err) => {
        console.error(err.response.data)
      });
    }

    return () =>  {
      controllor.abort();
    }
  }, [query]);

  const handleChange = (e) => {
    // console.log(e)
    setQuery(e.target.value)
  }
  return (
    <div>
      <h2>Search for github users</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      {searchResults.map((githubUser) => (
        <div key={githubUser.login}>{githubUser.login} </div>
      ))}
    </div>
  );
}
