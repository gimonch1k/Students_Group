import PropTypes from "prop-types";
import { PureComponent } from "react";

import Item from "./Item";

import "../ItemsPage/itemsPage.scss";

class ClassItemsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  updateSearch = (value) => {
    this.setState({ search: value });
  };

  render() {
    const { data } = this.props;
    const { search } = this.state;

    const filtredElements = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

    const elements = filtredElements.map((item) => (
      <Item key={item.id} item={item} />
    ));

    return (
      <section className="itemspage">
        <div className="container">
          <h2 className="title itemspage__title">
            Список <span className="span">банди</span> через Класи
          </h2>
          <input
            className="itemspage__input"
            type="text"
            placeholder="Пошук..."
            value={this.state.search}
            onChange={(e) => this.updateSearch(e.target.value)}
          />
          <ul className="itemspage__list">{elements}</ul>
        </div>
      </section>
    );
  }
}

ClassItemsPage.propTypes = {
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

export default ClassItemsPage;
