import getContent from "../../Data";

const SearchField = () => {
  return (
    <section className="search_field">
      <input type="text" className="hunt_field" />
      <button className="hunt_btn">{getContent("hunt_btn")}</button>
    </section>
  );
};

export default SearchField;
