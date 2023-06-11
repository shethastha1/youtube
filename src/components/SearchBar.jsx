import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_DETAILS } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const SearchBar = () => {
  const [inputString, setInputString] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);
  const searchCache = useSelector((store) => store.search);
  console.log("Search cache", searchCache);
  const getSearchSuggestions = async () => {
    const resp = await fetch(YOUTUBE_SEARCH_DETAILS(inputString));
    const data = await resp.json();
    setSearchSuggestions(data[1]);
    dispatch(cacheResult({ [inputString]: data[1] }));
  };
  useEffect(() => {
    (async () => {
      const timer = setTimeout(() => {
        if (searchCache[inputString]) {
          setSearchSuggestions(searchCache[inputString]);
        } else {
          getSearchSuggestions();
        }
      }, 300);
      return () => clearTimeout(timer);
    })();
  }, [inputString, searchCache]);
  const dispatch = useDispatch();

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
