const SearchStyled = `
:host {
  --white: #ffffff;
  --secondary-emphasis: #f1f3f4;
  --secondary: #5f6368;
  --dark: #202124;
  --border-color: #dadce0;
  --primary: #fbbc04;
  --danger: #ea4335;
  --success: #34a853;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
.navbar-search {
    width: 300px;
}

.search-wrapper {
    display: flex;
    align-items: center;
    background-color: var(--secondary-emphasis);
    border-radius: 8px;
    padding: 0.5rem;
    transition: background-color 0.2s, box-shadow 0.2s;
}

.search-wrapper:hover,
.search-wrapper:focus-within {
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 var(--shadow-color);
}

.search-wrapper i {
    color: var(--secondary);
    font-size: 1.2rem;
    margin-right: 0.5rem;
    cursor: pointer;
}

.search-wrapper .search-clear {
    margin-left: auto;
    display: none;
    cursor: pointer;
}

.search-wrapper #quickSearch {
    flex-grow: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--dark);
    outline: none;
}

.search-wrapper input::placeholder {
    color: var(--secondary);
}

@media (max-width: 780px) {
    .navbar-search {
      width: 100%;
    }
}
`;

export default SearchStyled;
