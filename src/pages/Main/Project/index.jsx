import "./style.css";
import "./script.js";

const Project = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div class="card-custom-horizontal">
          <div class="card-image">
            <div class="image-gallery">
              <div class="image-container">
                <input type="radio" name="gallery_group1" id="image1" checked />
                <div class="image-1">
                  <label class="prev" for="image4"></label>
                  <label class="next" for="image2"></label>
                </div>
                <input type="radio" name="gallery_group1" id="image2" checked />
                <div class="image-2">
                  <label class="prev" for="image1"></label>
                  <label class="next" for="image3"></label>{" "}
                </div>
                <input type="radio" name="gallery_group1" id="image3" checked />
                <div class="image-3">
                  <label class="prev" for="image2"></label>
                  <label class="next" for="image4"></label>{" "}
                </div>
                <input type="radio" name="gallery_group1" id="image4" checked />
                <div class="image-4">
                  <label class="prev" for="image3"></label>
                  <label class="next" for="image1"></label>{" "}
                </div>
              </div>
              <div class="thumbnails">
                <label for="image1"></label>
                <label for="image2"></label>
                <label for="image3"></label>
                <label for="image4"></label>
              </div>
            </div>
          </div>
          <div class="card-box">
            <h5 class="card-title">병충해 진단 웹 서비스 "코그로우" 🪴</h5>
            <p class="card-text mb-0">2023.09 - 2023.10 (팀 프로젝트)</p>
            <div style={{ marginTop: "15px" }}>
              <p
                style={{
                  color: "#000",
                  fontSize: "17px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #bbbbbbad",
                }}
              >
                농작물을 키우는 사람들에게 병충해 진단 및 예방 방법을 알려주고,
                <br />
                작물 관리를 효율적으로 할 수 있도록 지원하는 웹 서비스입니다.
              </p>
              <table
                border="1"
                style={{
                  color: "#000",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                <tr height="80px">
                  <th valign="top" width="120px" align="left">
                    ✔︎ 주요 기능
                  </th>
                  <td valign="top">
                    병든 농작물 사진을 업로드하여 병충해 진단받기, 농작물 등록
                    및 관리하기, 자신에게 맞는 농작물 추천받기, 농작물을 이용한
                    레시피 검색
                  </td>
                </tr>
                <tr height="28px">
                  <th align="left">✔︎ 맡은 파트</th>
                  <td>Frontend, Server, Database</td>
                </tr>
                <tr height="40px">
                  <th align="left">✔︎ Github</th>
                  <td>
                    <a href="https://github.com/Capstone-cogrow">
                      github.com/Capstone-cogrow
                    </a>
                  </td>
                </tr>
                <tr>
                  <th align="left">✔︎ Demo URL</th>
                  <td>
                    <a href="https://capstone-cogrow.github.io/cogrow/">
                      cogrow.com
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="card-info text-center">
              <button
                type="button"
                id="show"
                data-target="show21"
                class="show btn btn-info-card"
                aria-label="Left Align"
              >
                개발 이야기
              </button>
            </div>
            <div class="card-reveal show21">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">✘</span>
              </button>
              <h5 class="card-title">병충해 진단 웹 서비스 "코그로우" 🪴</h5>
              <div class="card-content">
                <h6 class="card-subtitle">🔗 Deployment URL</h6>
                <p>
                  <a href="https://capstone-cogrow.github.io/cogrow/">
                    cogrow.com
                  </a>
                </p>
                <h6 class="card-subtitle">📌 Summary</h6>
                <p>
                  졸업논문을 위한 캡스톤 디자인 프로젝트이며, React 와
                  Typescript 를 사용하여 프론트 개발을 하였습니다.
                  <br /> 백엔드 개발은 처음이었는데, 서버를 중심으로 DB와 프론트
                  간의 데이터 요청 및 응답 처리 프로세스를 경험해볼 수
                  있었습니다.
                  <br />
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "700",
                      display: "inline-block",
                      marginTop: "10px",
                    }}
                  >
                    ☑️ 주요 기능
                  </span>
                  <br />
                  ▪︎ 병충해 진단
                  <br />
                  ▪︎ 농작물 관리 및 추천
                  <br />
                  ▪︎ 농작물을 이용한 레시피 검색
                </p>
                <h6 class="card-subtitle">🤔 Background</h6>
                <p></p>
                <h6 class="card-subtitle">🔍 Meaning</h6>
                <p></p>
                <h6 class="card-subtitle">🔨 Technology Stack(s)</h6>
                <p>
                  <span>
                    ▪︎ Frontend : React, TypeScript, Styled-components
                  </span>
                  <br />
                  <span>▪︎ Backend : Node.js, MySQL</span> <br />
                  ▪︎ ML : tensorflow & Flask Server <br />
                  <span>▪︎ Design : Figma</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-custom-horizontal">
          <div class="card-image">
            <div class="image-gallery">
              <div class="image-container">
                <input type="radio" name="gallery_group2" id="image5" checked />
                <div class="image-5">
                  <label class="prev" for="image8"></label>
                  <label class="next" for="image6"></label>
                </div>
                <input type="radio" name="gallery_group2" id="image6" checked />
                <div class="image-6">
                  <label class="prev" for="image5"></label>
                  <label class="next" for="image7"></label>{" "}
                </div>
                <input type="radio" name="gallery_group2" id="image7" checked />
                <div class="image-7">
                  <label class="prev" for="image6"></label>
                  <label class="next" for="image8"></label>{" "}
                </div>
                <input type="radio" name="gallery_group2" id="image8" checked />
                <div class="image-8">
                  <label class="prev" for="image7"></label>
                  <label class="next" for="image5"></label>{" "}
                </div>
              </div>
              <div class="thumbnails">
                <label for="image5"></label>
                <label for="image6"></label>
                <label for="image7"></label>
                <label for="image8"></label>
              </div>
            </div>
          </div>
          <div class="card-box">
            <h5 class="card-title">해양 환경 보호 애플리케이션 "Seaya" 🐳</h5>
            <p class="card-text mb-0">2022.02 - 2022.03 (팀 프로젝트)</p>
            <div style={{ marginTop: "15px" }}>
              <p
                style={{
                  color: "#000",
                  fontSize: "17px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #bbbbbbad",
                }}
              >
                'Seaya'는 바다와 전망을 뜻하는 우리말 '시야'의 합성어로,
                <br />
                해양환경과 해양오염에 대한 관심을 높여줄 수 있는 서비스입니다.
              </p>
              <table
                border="1"
                style={{
                  color: "#000",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                <tr height="80px">
                  <th valign="top" width="120px" align="left">
                    ✔︎ 주요 기능
                  </th>
                  <td valign="top">
                    기계 학습을 통해 요약된 환경 뉴스 제공, 환경 퀴즈를 통한
                    환경 지식 습득, 미션을 완료하며 환경보호 실천, 친구들과
                    겨루기 기능
                  </td>
                </tr>
                <tr height="28px">
                  <th align="left">✔︎ 맡은 파트</th>
                  <td>Frontend, Design</td>
                </tr>
                <tr height="40px">
                  <th align="left">✔︎ Github</th>
                  <td>
                    <a href="https://github.com/2022-GDSC-Solution-Challenge">
                      github.com/2022-GDSC-Solution-Challenge
                    </a>
                  </td>
                </tr>
                <tr>
                  <th align="left">✔︎ 목적</th>
                  <td>2022 GDSC Solution Challenge 참여를 위함</td>
                </tr>
              </table>
            </div>
            <div class="card-info text-center">
              <button
                type="button"
                id="show"
                data-target="show22"
                class="show btn btn-info-card"
                aria-label="Left Align"
              >
                개발 이야기
              </button>
            </div>
            <div class="card-reveal show22">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">✘</span>
              </button>
              <h5 class="card-title">해양 환경 보호 애플리케이션 "Seaya" 🐳</h5>
              <div class="card-content">
                <h6 class="card-subtitle">🔗 Github URL</h6>
                <p>
                  <a href="https://github.com/2022-GDSC-Solution-Challenge">
                    github.com/2022-GDSC-Solution-Challenge
                  </a>
                </p>
                <h6 class="card-subtitle">📌 Summary</h6>
                <p>
                  'Seaya'는 바다의 'sea' 와 전망을 뜻하는 우리말 '시야'의
                  합성어로, 해양환경과 해양오염에 대한 관심이 높을수록 깨끗한
                  바다를 바라보는 시야가 넓어진다는 의미입니다. 'Seaya'의 목표는
                  환경문제를 경시하는 사람들의 태도를 변화시키고 모두가 환경을
                  위해 자발적으로 행동하도록 만드는 것입니다.
                  <br />
                  프론트 개발은 Google 의 오픈 소스 모바일 앱(Application) 개발
                  프레임워크인 <span>Flutter</span> 를 사용하였고, 디자인은{" "}
                  <span>Adobe XD</span> 와<span>Zeplin</span> 프로그램을
                  사용하였습니다.
                  <br />
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "700",
                      display: "inline-block",
                      marginTop: "10px",
                    }}
                  >
                    ☑️ 주요 기능
                  </span>
                  <br />
                  ▪︎ 사용자의 점수에 따라 달라지는 홈 화면을 볼 수 있습니다.
                  <br />
                  ▪︎ 기계 학습을 통해 요약된 환경 뉴스를 쉽고 빠르게 확인할 수
                  있습니다.
                  <br />
                  ▪︎ 환경 퀴즈를 풀어서 환경 지식을 얻을 수 있습니다.
                  <br />
                  ▪︎ 미션을 완료하여 직접 환경보호를 실천할 수 있습니다.
                  <br />
                  ▪︎ 친구들과 경쟁하며 환경보호를 실천할 수 있습니다.
                </p>
                <h6 class="card-subtitle">🤔 Background</h6>
                <p>
                  저는 21년도에{" "}
                  <span>GDSC(Google Developer Student Clubs)</span> 활동을
                  했었고, 좋은 기회로 22년도 3월에 진행된{" "}
                  <span>GDSC Solution Challenge</span> 에 참여하게 되었습니다.{" "}
                  <span>GDSC Solution Challenge</span>란 Google 기술을 사용하여
                  "UN의 17가지 지속 가능한 개발 목표" 중 하나 이상을 해결할 수
                  있는 서비스를 만드는 것입니다. <br />
                  저희는 그 중에서{" "}
                  <span style={{ color: "#DF3A01" }}>
                    [Goal 13 : 기후변화에 대한 영향방지와 긴급조치]
                  </span>
                  ,{" "}
                  <span style={{ color: "#DF3A01" }}>
                    [Goal 14 : 해양, 바다, 해양자원의 지속가능한 보존노력]
                  </span>
                  를 해결하기 위한 서비스를 기획하고 개발하게 되었습니다. 저희는
                  바다는 육상과 비교하여 상대적으로 일상생활에서 중요성이 낮아져
                  해양 오염에 대한 관심이 부족한 것다고 생각했습니다. 이에 따라,
                  해양 오염에 대한 관심 부족 문제를 개선하고자 이를 주제로
                  채택하여 사람들의 인식을 높이기로 결정하게 되었습니다.
                </p>
                <h6 class="card-subtitle">🔍 Meaning</h6>
                <p>
                  GDSC 활동을 하며 Flutter 앱 개발과 서비스 기획, 디자인을
                  배웠습니다. 이를 활용하여 직접 서비스를 기획부터 디자인, UI
                  개발까지 해볼 수 있는 소중한 경험이었습니다. 또한 이
                  프로젝트는 프론트엔드, 백엔드, ML 분들과 함께한 협업
                  프로젝트였기 때문에 팀원들과 소통을 통해 디자인의 구현
                  가능성과 제약사항을 빠르게 이해하고 수정해나가는 과정들은
                  저에게 정말 뜻깊은 경험이 되었습니다. <br />
                  또한 Flutter는 모든 것이 위젯으로 이루어져 있는데, 예를들어
                  텍스트, 버튼, 이미지, 레이아웃 등 모든 UI 구성 요소는 위젯으로
                  표현됩니다. 그래서 Flutter에서는 다양한 위젯을 조합하여 복잡한
                  UI를 구성해 볼 수 있었고, 단일한 원시 위젯에서부터 시작하여
                  조합하고 확장해가는 방식으로 UI 개발을 진행했습니다. <br />이
                  프로젝트를 통해 Flutter는 위젯 시스템으로 유연하고 효과적인
                  UI를 구현할 수 있는 기반을 제공하며, 위젯의 계층 구조와
                  불변성은 안정적인 애플리케이션을 만들 수 있겠다는 것을 깨닫게
                  되었습니다.
                </p>
                <h6 class="card-subtitle">🔨 Technology Stack(s)</h6>
                <p>
                  <span>
                    ▪︎ Frontend : Flutter, Dart <br />
                  </span>
                  ▪︎ Backend : Node.js, mysql2 <br />
                  ▪︎ ML : tensorflow & keras <br />
                  <span>
                    ▪︎ Design : Adobe XD, Photoshop, Zeplin <br />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-custom-horizontal">
          <div class="card-image">
            <div class="image-gallery">
              <div class="image-container">
                <input type="radio" name="gallery_group3" id="image9" checked />
                <div class="image-9">
                  <label class="prev" for="image12"></label>
                  <label class="next" for="image10"></label>
                </div>
                <input
                  type="radio"
                  name="gallery_group3"
                  id="image10"
                  checked
                />
                <div class="image-10">
                  <label class="prev" for="image9"></label>
                  <label class="next" for="image11"></label>{" "}
                </div>
                <input
                  type="radio"
                  name="gallery_group3"
                  id="image11"
                  checked
                />
                <div class="image-11">
                  <label class="prev" for="image10"></label>
                  <label class="next" for="image12"></label>{" "}
                </div>
                <input
                  type="radio"
                  name="gallery_group3"
                  id="image12"
                  checked
                />
                <div class="image-12">
                  <label class="prev" for="image11"></label>
                  <label class="next" for="image9"></label>{" "}
                </div>
              </div>
              <div class="thumbnails">
                <label for="image9"></label>
                <label for="image10"></label>
                <label for="image11"></label>
                <label for="image12"></label>
              </div>
            </div>
          </div>
          <div class="card-box">
            <h5 class="card-title">포트폴리오 웹사이트 🌐</h5>
            <p class="card-text mb-0">2023.11 (개인 프로젝트)</p>
            <div style={{ marginTop: "15px" }}>
              <p
                style={{
                  color: "#000",
                  fontSize: "17px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #bbbbbbad",
                }}
              >
                포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이
                <br />
                웹사이트에 해당합니다.
              </p>
              <table
                border="1"
                style={{
                  color: "#000",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                <tr height="57px">
                  <th valign="top" width="120px" align="left">
                    ✔︎ 주요 기능
                  </th>
                  <td valign="top">
                    간단한 자기소개, 이력서, 인적사항, 기술스택,
                    <br /> GitHub 및 GitBlog 링크, 프로젝트 경험, 활동이력
                    타임라인
                  </td>
                </tr>
                <tr height="28px">
                  <th align="left">✔︎ 맡은 파트</th>
                  <td>Frontend, Design</td>
                </tr>
                <tr height="40px">
                  <th align="left">✔︎ Github</th>
                  <td>
                    <a href="https://github.com/YounJ00/Portfolio">
                      github.com/YounJ00/Portfolio
                    </a>
                  </td>
                </tr>
                <tr>
                  <th align="left">✔︎ Demo URL</th>
                  <td>
                    <a href="https://younj00.github.io/Portfolio/">
                      younj00.github.io/Portfolio/
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="card-info text-center">
              <button
                type="button"
                id="show"
                data-target="show23"
                class="show btn btn-info-card"
                aria-label="Left Align"
              >
                개발 이야기
              </button>
            </div>
            <div class="card-reveal show23">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">✘</span>
              </button>
              <h5 class="card-title">포트폴리오 웹사이트 🌐</h5>
              <div class="card-content">
                <h6 class="card-subtitle">🔗 Deployment URL</h6>
                <p>
                  <a href="https://capstone-cogrow.github.io/cogrow/">
                    cogrow.com
                  </a>
                </p>
                <h6 class="card-subtitle">📌 Summary</h6>
                <p>
                  포트폴리오 용도로 제작한 웹사이트로 React로 개발을 완료하였고,
                  Codepen 의 다양한 컴포넌트 디자인을 참고하여 UI 개발을
                  진행했습니다. <br />
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "700",
                      display: "inline-block",
                      marginTop: "10px",
                    }}
                  >
                    ☑️ 주요 기능
                  </span>
                  <br />
                  ▪︎ 간단한 자기소개
                  <br />
                  ▪︎ 인적 사항
                  <br />
                  ▪︎ 기술 스킬
                  <br />
                  ▪︎ 프로젝트 경험
                  <br />
                  ▪︎ 활동 타임라인
                </p>
                <h6 class="card-subtitle">🔍 Meaning</h6>
                <p>
                  포트폴리오 웹사이트를 제작하면서 그동안의 활동과 프로젝트를
                  정리하는 시간을 가질 수 있었습니다. 어떤 이유로 이런 기획을
                  했으며, 그 과정에서 느낀점은 어떠한지 등을 작성해보며 다시한
                  번 해당 프로젝트를 돌아볼 수 있는 계기가 되었습니다.
                </p>
                <h6 class="card-subtitle">🔨 Technology Stack(s)</h6>
                <p>
                  ▪︎ Frontend : React, Javascript <br />
                  ▪︎ Design : Figma <br />
                  ▪︎ Codepen 사이트 적극 활용
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
