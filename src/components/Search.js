<<<<<<< HEAD
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
=======
import "./Search.css";

const Search = (props) => {
  const handleInput = (e) => {
    props.setInputText(e.target.value);
  };
  const handleSubmit = () => {
    props.handleSearch(props.inputText);
  };
  const handleRevert = () => {
    props.setInputText("");
    props.handleRevert(props.inputText);
  };
  return (
    <div className="header">
      <h1>POKEMON VIEWER</h1>
      <div className="search-container">
        <input
          type="text"
          onChange={handleInput}
          value={props.inputText}
          className="search-box"
          placeholder="Search..."
        />
        <button onClick={handleSubmit} className="search-button">
          Search
        </button>
        <button onClick={handleRevert} className="revert-button">
          Revert
        </button>
      </div>
    </div>
  );
};

export default Search;
>>>>>>> ea50365 (Adding all the files)
