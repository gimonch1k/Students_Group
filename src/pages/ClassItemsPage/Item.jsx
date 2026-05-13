import { PureComponent } from "react";
import PropTypes from "prop-types";

class Item extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <li className="title itemspage__item">
        <img src={item.photo} alt={item.name} className="itemspage__img" />
        <div className="itemspage__descr">
          <h3 className="title itemspage__name">{item.name}</h3>
          <div className="title itemspage__age">Вік: {item.age}</div>
          <div className="title itemspage__group">Група: {item.group}</div>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
