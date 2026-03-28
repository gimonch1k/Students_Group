import { useState } from "react";

import question from "../../assets/question.png";

import "./addItemPage.scss";

function AddItemPage({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    group: "",
    photo: question,
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((item) => {
      return {
        ...item,
        [name]: value,
      };
    });
  };

  const onSubmitInputsChange = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: formData.name,
      age: formData.age,
      group: formData.group,
      photo: formData.photo,
    };

    addStudent(newStudent);

    setFormData({
      name: "",
      age: "",
      group: "",
    });
  };

  return (
    <section className="additempage">
      <div className="container">
        <h2 className="title additempage__title">
          Приєднатися до <span className="span">нас</span>
        </h2>
        <form className="additempage__form" onSubmit={onSubmitInputsChange}>
          <div className="additempage__wrapper">
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              className="additempage__input"
              value={formData.name}
              onChange={inputChange}
            />
            <input
              type="text"
              name="age"
              placeholder="Ваш вік"
              className="additempage__input"
              value={formData.age}
              onChange={inputChange}
            />
            <input
              type="text"
              name="group"
              placeholder="Ваша група"
              className="additempage__input"
              value={formData.group}
              onChange={inputChange}
            />
          </div>
          <button className="additempage__btn">Додати</button>
        </form>
      </div>
    </section>
  );
}

export default AddItemPage;
