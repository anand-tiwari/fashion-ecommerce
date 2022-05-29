import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { constructRouteParams } from "../../utils";
import "./Header.css";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const currentParams = constructRouteParams([...searchParams]);

  function handleSumbit(e) {
    e.preventDefault();
    currentParams["searchTerm"] = search.trim();
    if (currentParams["searchTerm"] === "") {
      delete currentParams["searchTerm"];
    }
    setSearchParams(currentParams);
  }

  return (
    <div className="header__searchbox">
      <form onSubmit={(e) => handleSumbit(e)}>
        <input
          className="custom__input custom__input-success"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search product name"
        />
        <button className="custom-btn custom-btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
