import { useState, useEffect } from "react";

import styles from "./SearchBar.module.css";

import GenericInput from "../GenericInput";
import searchIcon from "./image.png";

function SearchBar({ onSearch, dataTestId }) {
  const [query, setQuery] = useState(""),
    [isMobile, setIsMobile] = useState(false),
    [isVisible, setIsVisible] = useState(false);

  const checkMobile = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (value) => {
    setQuery(value);
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query);
    }
  };

  const toggleInputVisibility = () => {
    if (isMobile) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <div className={styles.wrapper}>
      {(!isMobile || isVisible) && (
        <GenericInput
          id="search"
          htmlFor="search-blog"
          displayLabel={false}
          placeholder="Search Posts..."
          dataTestId={dataTestId}
          customClass={styles.searchInput}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-label="Search posts"
        />
      )}
      <img
        id="search-icon-img"
        src={searchIcon}
        alt="Search icon"
        className={styles.searchIcon}
        onClick={toggleInputVisibility}
      />
    </div>
  );
}

export default SearchBar;
