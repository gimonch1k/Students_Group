import { Link } from "react-router";
import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import ItemsCard from "./ItemsCard";

import "./itemsPage.scss";

function ItemsPage({ data }) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase().trim()),
    );
  }, [data, search]);

  const elements = useMemo(() => {
    return filteredData.map((item) => <ItemsCard key={item.id} item={item} />);
  }, [filteredData]);

  return (
    <section className="itemspage">
      <div className="container">
        <h2 className="title itemspage__title">
          Список <span className="span">банди</span>
        </h2>
        <input
          className="itemspage__input"
          type="text"
          placeholder="Пошук..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="itemspage__list">{elements}</ul>
      </div>
    </section>
  );
}

ItemsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      group: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ItemsPage;
