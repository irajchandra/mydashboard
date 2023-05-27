import "./group2.css";
import CalanerIcon from "../../../../../icon/calandericon.png";
import QuestionCircleIcon from "../../../../../icon/colorquestionmark.png";
import UpArrowIcon from "../../../../../icon/uparrow.png";

const Group2 = () => {
  return (
    <div className="group2-wrapper">
      {/**  <div className="mask">
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
      </div>**/}
      <span className="text1"> 42.34%</span>

      <div className="calandericon-wrapper">
        <img className="calander-icon" src={CalanerIcon} alt="CalanerIcon" />
      </div>

      <div className="uparrow-wrapper">
        <img className="up-arrow-icon" src={UpArrowIcon} alt="UpArrowIcon" />
        <span className="text2">12%</span>
      </div>
      
      <span className="text3"> Page per visit </span>

      <div className="question-circle-wrapper">
        <img
          className="-QuestionCircleIcon"
          src={QuestionCircleIcon}
          alt="QuestionCircleIcon"
        />
      </div>
    </div>
  );
};

export default Group2;
