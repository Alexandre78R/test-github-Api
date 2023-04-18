import axios from "axios";
import React, { useState } from "react";

export default function () {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // TODO : fetch the github user list matching the search query
  // (a new API call should be made every time the query changes)
  // (errors should be logged in the console or/and printed to the UI)

  return (
    <div>
      <h2>Search for github users</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {searchResults.map((githubUser) => (
        <div key={githubUser.login}>{githubUser.login} </div>
      ))}
    </div>
  );
}
