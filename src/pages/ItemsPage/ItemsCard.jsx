import { memo } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

const ItemsCard = ({ item }) => {
  return (
    <li className="title itemspage__item">
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
};

ItemsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(ItemsCard);
