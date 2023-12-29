import "./style.css";

const Skill = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bxl-html5"></i>
          <h3>HTML</h3>
          <p>
            웹디자인기능사 준비를 시작으로 4년이 지난 지금까지 여러 프로젝트를
            경험하며 html를 익혔습니다.
          </p>
          <div class="bar-container">
            <div class="html">
              <p>90 %</p>
            </div>
          </div>
        </div>
        <div className="services-box">
          <i className="bx bxl-css3"></i>
          <h3>CSS</h3>
          <p>
            웹디자인기능사 준비를 시작으로 4년이 지난 지금까지 여러 프로젝트를
            경험하며 css를 익혔습니다.
          </p>
          <div class="bar-container">
            <div class="css">
              <p>90 %</p>
            </div>
          </div>
        </div>
        <div className="services-box">
          <i className="bx bxl-react"></i>
          <h3>React</h3>
          <p>
            휴학을 했을 때를 계기로 공부를 시작하게 되었으며, 컴포넌트 분리의
            효율성을 알게 되었습니다.
          </p>
          <div class="bar-container">
            <div class="react">
              <p>70 %</p>
            </div>
          </div>
        </div>
        <div className="services-box">
          <i className="bx bxl-javascript"></i>
          <h3>Javascript</h3>
          <p>
            좀 더 동적인 웹 개발을 위해 시작하게 되었으며, "모던 자바스크립트"
            책으로 공부를 시작했습니다.
          </p>
          <div class="bar-container">
            <div class="javascript">
              <p>70 %</p>
            </div>
          </div>
        </div>
        <div className="services-box">
          <i className="bx bxl-typescript"></i>
          <h3>Typescript</h3>
          <p>
            연구실 프로젝트에서 처음 접하게 되었습니다. 자바스크립트 기반의
            정적타입 문법을 적용해보았습니다.
          </p>
          <div class="bar-container">
            <div class="typescript">
              <p>60 %</p>
            </div>
          </div>
        </div>
        <div className="services-box">
          <i className="bx bxl-figma"></i>
          <h3>Figma</h3>
          <p>
            Adobe XD 라는 툴을 배우고 사용해왔는데, 협업에 Figma 를 더 많이 쓰는
            것을 보고 사용하게되었다.
          </p>
          <div class="bar-container">
            <div class="figma">
              <p>80 %</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
