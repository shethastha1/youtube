import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_DETAILS } from "../utils/constants";

const SearchBar = () => {
  const [inputString, setInputString] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);
  useEffect(() => {
    (async () => {
      console.log("USEEFF CALLED");
      const resp = await fetch(YOUTUBE_SEARCH_DETAILS(inputString));
      const data = await resp.json();
      setSearchSuggestions(data[1]);
    })();
  }, [inputString]);
  console.log("SEarch suggestios", searchSuggestions);
  return (
    <div className="searchbarDiv">
      <input
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        id="search-input"
        placeholder="Search"
        onChange={(e) => setInputString(e.target.value)}
      />
      <button id="search-btn">🔍</button>
      {inputFocused && searchSuggestions.length > 0 && (
        <div className="suggestions-div">
          <div className="suggestions-a">
            <ul
              role="listbox"
              style={{ listStyle: "none", padding: "0", margin: "0" }}
            >
              {searchSuggestions.map((item) => (
                <li className="list-item">
                  <div style={{ display: "inline-flex", alignItems: "center" }}>
                    🔍<div className="search-item">{item}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
