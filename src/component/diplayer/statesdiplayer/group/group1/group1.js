import "./group1.css";
import GraphIcon from "../../../../../icon/bargraph.png";
import QuestionCircleIcon from "../../../../../icon/whitequestionmark.png";
import UpArrowIcon from "../../../../../icon/uparrow.png";

const Group1 = () => {
  return (
    <div className="group1-wrapper">
      <div className="mask">
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
      </div>
      <span className="text1"> 42.34%</span>

      <div className="graphicon-wrapper">
        <img className="graph-icon" src={GraphIcon} alt="GraphIcon" />
      </div>

      <div className="uparrow-wrapper">
        <img className="up-arrow-icon" src={UpArrowIcon} alt="UpArrowIcon" />
        <span className="text2">12%</span>
      </div>

      <span className="text3"> Bounce Rate</span>

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

export default Group1;
