import { useParams } from "react-router";

import "./itemDetailsPage.scss";

function ItemDetailsPage({ data }) {
  const params = useParams();
  const id = +params.id;

  const currStudent = data.find((item) => item.id === id);

  if (!currStudent) {
    return (
      <h2 className="title itemdetailspage__title">Студента не знайдено</h2>
    );
  }

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
        </div>
        <div className="itemdetailspage__divider"></div>
      </div>
    </section>
  );
}

export default ItemDetailsPage;
