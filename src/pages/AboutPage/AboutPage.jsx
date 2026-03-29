import "./aboutPage.scss";

function AboutPage() {
  return (
    <section className="aboutpage">
      <div className="container">
        <h2 className="title aboutpage__title">
          Можливості <span className="span">сайта</span>
        </h2>

        <div className="aboutpage__poss margin-right">
          <div className="title aboutpage__head">Вкладка "Головна"</div>
          <div className="title aboutpage__descr">
            Це наша головна сторінка, тут ви можете подивитися засновників банди
            та прочитати правила вступу в банду.
          </div>
        </div>

        <div className="aboutpage__poss margin-left">
          <div className="title aboutpage__head">Вкладка "Список"</div>
          <div className="title aboutpage__descr">
            На цій сторінці ви можете подивитись подробнішу інформацію про
            учасників банди, також натиснути на учасника і перейти на сторінку з
            відповідним учасником.
          </div>
        </div>

        <div className="aboutpage__poss margin-right">
          <div className="title aboutpage__head">Вкладка "Деталі учасника"</div>
          <div className="title aboutpage__descr">
            На цю вкладку ви можете потрапити лише через сторінку "Список", або
            прописати адресу "items/2" якщо знаєте унікальний ідентифікатор
            конкретного учасника.
          </div>
        </div>

        <div className="aboutpage__poss margin-left">
          <div className="title aboutpage__head">Вкладка "Додати"</div>
          <div className="title aboutpage__descr">
            Згідно назви, ви можете приєжнатись до нашої банди студентів,
            вказавши ім'я, вік, групу.
          </div>
        </div>

        <div className="aboutpage__poss margin-right">
          <div className="title aboutpage__head">Вкладка "Про додаток"</div>
          <div className="title aboutpage__descr">
            Ця сторінка - це міні-документація до цього сайту.
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
