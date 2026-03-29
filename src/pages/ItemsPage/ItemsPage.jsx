import { Link } from "react-router";

import "./itemsPage.scss";

function ItemsPage({ data }) {
  const elements = data.map((item) => {
    return (
      <li className="title itemspage__item" key={item.id}>
        <Link to={`${item.id}`} className="itemspage__link">
          <img src={item.photo} alt={item.name} className="itemspage__img" />
          <div className="itemspage__descr">
            <h3 className="title itemspage__name">{item.name}</h3>
            <div className="title itemspage__age">Вік: {item.age}</div>
            <div className="title itemspage__group">Група: {item.group}</div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <section className="itemspage">
      <div className="container">
        <h2 className="title itemspage__title">
          Список <span className="span">банди</span>
        </h2>
        <ul className="itemspage__list">{elements}</ul>
      </div>
    </section>
  );
}

export default ItemsPage;
