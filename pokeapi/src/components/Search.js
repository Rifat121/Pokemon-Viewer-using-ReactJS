import "./Search.css";
const Search = () => {
  return (
    <div className="header">
      <h1>POKEMON VIEWER</h1>
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Search..." />
        <button className="search-button">Search</button>
        <button className="revert-button">Revert</button>
      </div>
    </div>
  );
};

export default Search;
