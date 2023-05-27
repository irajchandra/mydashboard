import "./group4.css";
import HourGlassIcon from '../../../../../icon/hourglassicon.png'
import DownArrowIcon from "../../../../../icon/dropdownred.png";

const Group4 = () => {
  return (
    <div className="group4-wrapper">
      <span className="text1">00:03:27</span>

      <div className="hourglassicon-wrapper">
        <img className="graph-icon" src={HourGlassIcon} alt="GraphIcon" />
      </div>

      <div className="downarrow-wrapper">
        <img className="downarrow-icon" src={DownArrowIcon} alt="DownArrowIcon" />
        <span className="text2">2.4%</span>
      </div>

      <span className="text3">Avg. Visit Duration</span>

    </div>
  );
};

export default Group4;
