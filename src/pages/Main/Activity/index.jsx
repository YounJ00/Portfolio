import "./style.css";

const Activity = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <span>Activity</span> Timeline
      </h2>
      <div class="container">
        <div class="timeline">
          <ul>
            <li>
              <div class="timeline-content">
                <h3 class="date">20th September, 2019</h3>
                <h1>웹디자인기능사 취득 🎨</h1>
                <p>✔︎ 2019.02.01 필기시험 합격</p>
                <p>✔︎ 2019.09.20 실기시험 합격</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">December, 2019 ~ June, 2023</h3>
                <h1>영상처리 연구실 👬</h1>
                <p>
                  <a
                    href="https://younj00.github.io/posts/2020-Academic-Seminar/"
                    style={{ color: "#fff", borderBottom: "1px solid white" }}
                  >
                    ✔︎ 2020 공과대학 학술제 참여 (금상 🏆)
                  </a>
                </p>
                <p>
                  <a
                    href="https://younj00.github.io/posts/2022-Academic-Seminar/"
                    style={{ color: "#fff", borderBottom: "1px solid white" }}
                  >
                    ✔︎ 2022 공과대학 학술제 참여 (금상 🏆)
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/IPLaboratory/IPLaboratory_FE"
                    style={{ color: "#fff", borderBottom: "1px solid white" }}
                  >
                    ✔︎ 연구실 웹사이트 제작중
                  </a>
                </p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">September, 2020 ~ Febuary, 2021</h3>
                <h1>Google Developer Student Clubs 🔥</h1>
                <p>✔︎ Flutter, Design 과정 수료</p>
                <p>
                  <a
                    href="https://github.com/Healthy-Me"
                    style={{ color: "#fff", borderBottom: "1px solid white" }}
                  >
                    ✔︎ 2021 GDSC KR 해커톤 참여 (Top 10 🎖)
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/2022-GDSC-Solution-Challenge"
                    style={{ color: "#fff", borderBottom: "1px solid white" }}
                  >
                    ✔︎ 2022 GDSC Solution Challenge 참여
                  </a>
                </p>
                {/* 
                <button class="glow-on-hover" type="button">
                  Click for more
                </button>
                */}
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">15th November, 2023</h3>
                <h1>정보처리기사 취득 ✍️</h1>
                <p>
                  <p>✔︎ 2023.03.21 필기시험 합격</p>
                  <p>✔︎ 2023.11.15 실기시험 합격</p>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Activity;
