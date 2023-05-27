import "./group3.css";
import UserIcon from "../../../../../icon/usericon.png";
import DownArrowIcon from "../../../../../icon/dropdownred.png";

const Group3 = () => {
  return (
    <div className="group3-wrapper">
      <span className="text1"> 326.60k </span>

      <div className="usericon-wrapper">
        <img className="user-icon" src={UserIcon} alt="UserIcon" />
      </div>

      <div className="downarrow-wrapper">
        <img className="down-arrow-icon" src={DownArrowIcon} alt="UpArrowIcon" />
        <span className="text2">2.1%</span>
      </div>

      <span className="text3"> Total Monthly Visit</span>

      {/** <div className="question-circle-wrapper">
        <img
          className="-QuestionCircleIcon"
          src={QuestionCircleIcon}
          alt="QuestionCircleIcon"
        />
      </div> **/}
    </div>
  );
};

export default Group3;
