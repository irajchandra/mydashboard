import "./sidebar.css";
//import CircleIcon from "../../icon/circle.png";
//import Circle2Icon from "../../icon/circle2.png";
import SearchIcon from "../../icon/search.png";

import OverviewIcon from "../../icon/overview.png";
import OpportunityIcon from "../../icon/opportunities.png";
import MyCompetitorsIcon from "../../icon/mycompetitors.png";
import BriefIcon from "../../icon/brief.png";
import SavedIcon from "../../icon/saved.png";

import SettingIcon from "../../icon/setting.png";
import HelpIcon from "../../icon/help.png";
import LogoutIcon from "../../icon/logout.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="circle">
          <div className="innerCircle"></div>
          <img className="searchIcon" src={SearchIcon} alt="searchicon" />
        </div>
        <span>Concured</span>
      </div>
      <div className="middle">
        <ul>
          <li>
            <img
              className="sidebaricon"
              src={OverviewIcon}
              alt="OverviewIcon"
            />
            <span>Overview</span>
          </li>

          <li>
            <img
              className="sidebaricon"
              src={OpportunityIcon}
              alt="OpportunityIcon"
            />
            <span>Opportunities</span>
          </li>

          <li>
            <img
              className="sidebaricon"
              src={MyCompetitorsIcon}
              alt="MyCompetitorsIcon"
            />
            <span>My Competitiors</span>
          </li>

          <li>
            <img className="sidebaricon" src={BriefIcon} alt="BriefIcon" />
            <span>Brief</span>
          </li>

          <li>
            <img className="sidebaricon" src={SavedIcon} alt="SavedIcon" />
            <span>Saved</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <ul>
          <li>
            <img className="sidebaricon" src={SettingIcon} alt="SettingIcon" />
            <span>Setting</span>
          </li>

          <li>
            <img className="sidebaricon" src={HelpIcon} alt="HelpIcon" />
            <span>Help</span>
          </li>

          <li>
            <img className="sidebaricon" src={LogoutIcon} alt="LogoutIcon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
