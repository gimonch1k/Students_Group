import "./homePage.scss";

import group from "../../assets/group.jpg";

function HomePage() {
  return (
    <section className="homepage">
      <div className="container">
        <h2 className="title homepage__title">
          Привіт, заціни нашу <span className="span">банду</span>
        </h2>
        <div className="homepage__wrapper">
          <img src={group} alt="group of students" className="homepage__img" />
          <div className="homepage__descr">
            <div className="title homepage__text">
              Зараз наша група складається з 5 студентів
            </div>
            <ul className="homepage__list">
              <li className="title homepage__item">Sakura Sato</li>
              <li className="title homepage__item">Hiroto Tanaka</li>
              <li className="title homepage__item">Akane Kobayashi</li>
              <li className="title homepage__item">Ren Nakamura</li>
              <li className="title homepage__item">Hina Yamamoto</li>
            </ul>
          </div>
        </div>
        <h3 className="title homepage__title-secondary">
          На сайті можна подивитись список нашої{" "}
          <span className="span">банди</span>, подробну інформацію та за
          бажанням долучитися до нас 😅
        </h3>
        <h3 className="title homepage__rules">Правила</h3>
        <ul className="homepage__rules-list">
          <li className="title homepage__rules-item">
            Якщо ти вступаєш у нашу банду, то погоджуєшся пройти наше вступне
            випробування;
          </li>
          <li className="title homepage__rules-item">
            Якщо ти пройшов випробування, то маєш долучитися до нашої телеграм і
            діскорд групи;
          </li>
          <li className="title homepage__rules-item">
            По вечорам долучатися до діскорд групи щоб грати в ігри або дивитися
            аніме/серіали;
          </li>
          <li className="title homepage__rules-item">
            Говорити все як є, якщо щось не влаштовує;
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
