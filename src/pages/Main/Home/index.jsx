import Typewriter from "typewriter-effect";
import "./style.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>- 함윤진 -</h3>
        <h1>프론트엔드, UI 개발자 포트폴리오</h1>
        <h3>
          <div className="typewriterDiv">
            안녕하세요, 저는&nbsp;
            <Typewriter
              options={{
                strings: [
                  "도전하며 성장합니다.",
                  "협업을 즐깁니다.",
                  "꼼꼼한 성격을 가지고 있습니다.",
                  "새로운 기술을 배우는 것을 좋아합니다.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          iure repudiandae accusamus ab, quo enim earum quaerat. 🚀
        </p>
        <div className="social-media">
          <a href="https://github.com/YounJ00">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://younj00.github.io/">
            <i className="bx bxl-blogger"></i>
          </a>
          <a href="#">
            <i className="bx bxl-gmail"></i>
          </a>
          <a href="#">
            <i className="bx bxl-product-hunt"></i>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1UF3D6OJQZydIVcrgtCRDtX1GZK9--ep7/view?usp=sharing"
          className="btn"
        >
          이력서 다운로드
        </a>
      </div>
      <div className="home-img">
        <img src="/img/222.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
