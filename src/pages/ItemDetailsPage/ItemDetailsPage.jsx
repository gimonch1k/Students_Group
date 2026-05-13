import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./itemDetailsPage.scss";

function ItemDetailsPage({ data, editStudent, deleteStudent }) {
  const params = useParams();
  const navigate = useNavigate();
  const id = +params.id;

  const currStudent = data.find((item) => item.id === id);

  if (!currStudent) {
    return <h2 className="itemdetailspage__title">Студента не знайдено</h2>;
  }

  /** @type {[{name: string, age: string | number, group: string}, Function]} */
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    group: "",
  });

  useEffect(() => {
    if (currStudent) {
      setFormData({
        name: currStudent.name,
        age: currStudent.age,
        group: currStudent.group,
      });
    }
  }, [currStudent]);

  const onChangeValue = (e) => {
    const { name, value } = e.target;

    setFormData((item) => ({
      ...item,
      [name]: value,
    }));
  };

  return (
    <section className="itemdetailspage">
      <div className="container">
        <div className="itemdetailspage__divider"></div>
        <div className="itemdetailspage__wrapper">
          <div className="itemdetailspage__descr">
            <div className="title itemdetailspage__name">
              {currStudent.name}
            </div>
            <div className="title itemdetailspage__age">
              Age: {currStudent.age}
            </div>
            <div className="title itemdetailspage__group">
              Group: {currStudent.group}
            </div>
          </div>
          <div className="itemdetailspage__img">
            <img src={currStudent.photo} alt={currStudent.name} />
          </div>
          <div className="itemdetailspage__edit">
            <div className="itemdetailspage__edit-title">Редагування</div>
            <div className="itemdetailspage__edit-wrapper">
              <input
                type="text"
                name="name"
                placeholder="нове ім'я..."
                value={formData.name}
                onChange={onChangeValue}
              />
              <input
                type="text"
                name="age"
                placeholder="новий вік..."
                value={formData.age}
                onChange={onChangeValue}
              />
              <input
                type="text"
                name="group"
                placeholder="нова група..."
                value={formData.group}
                onChange={onChangeValue}
              />
            </div>
            <button
              className="itemdetailspage__edit-btn"
              onClick={() =>
                editStudent({
                  ...currStudent,
                  ...formData,
                })
              }
            >
              Save
            </button>
            <button
              className="itemdetailspage__edit-remove"
              onClick={() => {
                deleteStudent(currStudent.id);
                navigate("/items");
              }}
            >
              Видалити персонажа
            </button>
          </div>
        </div>
        <div className="itemdetailspage__divider"></div>
      </div>
    </section>
  );
}

ItemDetailsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      group: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ).isRequired,

  editStudent: PropTypes.func.isRequired,

  deleteStudent: PropTypes.func.isRequired,
};

export default ItemDetailsPage;
