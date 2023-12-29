import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";
import "./style.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Let me introduce myself</h3>
        <div className="aboutMe">
          <div className="topContainer">
            <div className="aboutMe-content">
              <FaUser size="35" color="#476ada" />
              <p className="title">이름</p>
              <p className="subtitle">함윤진</p>
            </div>
            <div className="aboutMe-content">
              <FaCalendar size="35" color="#476ada" />
              <p className="title">생년월일</p>
              <p className="subtitle">2000.06.28</p>
            </div>
            <div className="aboutMe-content">
              <FaLocationDot size="35" color="#476ada" />
              <p className="title">주소지</p>
              <p className="subtitle">서울특별시 강동구</p>
            </div>
          </div>
          <div className="bottomContainer">
            <div className="aboutMe-content">
              <IoCall size="35" color="#476ada" />
              <p className="title">연락처</p>
              <p className="subtitle">010-5325-8483</p>
            </div>
            <div className="aboutMe-content">
              <IoMail size="35" color="#476ada" />
              <p className="title">이메일</p>
              <p className="subtitle">hamyounjin006@gmail.com</p>
            </div>
            <div className="aboutMe-content">
              <IoSchool size="35" color="#476ada" />
              <p className="title">학력</p>
              <p className="subtitle">순천향대학교 (컴퓨터공학과)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
