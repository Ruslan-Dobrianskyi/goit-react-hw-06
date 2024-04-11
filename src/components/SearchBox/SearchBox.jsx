import s from "./SearchBox.module.css";

const SearchBox = ({ searchStr, onChangeSearch }) => {
  return (
    <div>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        placeholder="Search user..."
        value={searchStr}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
