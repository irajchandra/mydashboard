import "./navbar.css";
import { useState } from "react";
import KeyBaseIcon from "../../../icon/keybase.png";
//import DropDownIcon from "../../icon/dropdown.png";
import ColorPlusIcon from "../../../icon/plus.png";
import ProfileIcon from "../../../icon/profileicon.png";
import ColorQuestionCircleIcon from "../../../icon/colorquestionmark.png";

const Navbar = () => {
  const [team, setTeam] = useState("");

  const handleOptionChange = (event) => {
    setTeam(event.target.value);
  };
  return (
    <div className="navbar">
      <div className="group1">
        <div className="left">
          <div className="keybasewrapper">
            <img className="keybaseicon" src={KeyBaseIcon} alt="KeyBaseIcon" />
          </div>
          <div className="selectdropdown">
            <select value={team} onChange={handleOptionChange}>
              <option value="">Boro Team</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
              <option value="team3">Team 3</option>
            </select>
          </div>
          {/** this is without Dropdown  
          
          <h1>Boro Team</h1>
          <div className="dropdownwrapper">
            <img
              className="dropdownicon"
              src={DropDownIcon}
              alt="dropdownicon"
            />
          </div>**/}
          <div className="pluswrapper">
            <img
              className="colorplusicon"
              src={ColorPlusIcon}
              alt="colorplusicon"
            />
          </div>
        </div>
        <div className="right">
          <img className="profileicon" src={ProfileIcon} alt="profileicon" />

          <div className="selectdropdown">
            <select value={team} onChange={handleOptionChange}>
              <option value="">Zahra hashst</option>
              <option value="team1">Raj chandra</option>
              <option value="team2">Johny Depp</option>
              <option value="team3">Katherine</option>
            </select>
          </div>
          {/** this is without Dropdown  
          
          <h1>Zahra hashst</h1>
          <div className="dropdownwrapper">
            <img
              className="dropdownicon"
              src={DropDownIcon}
              alt="dropdownicon"
            />
          </div>**/}
        </div>
      </div>
      <div className="group2">{/** this is for line **/}</div>
      <div className="group3">
        <h1> Project Statistics</h1>

        <div className="questionwrapper">
          <img
            className="ColorQuestionCircleIcon"
            src={ColorQuestionCircleIcon}
            alt="ColorQuestionCircleIcon"
          />
        </div>
        <div className="frames">
          <div className="frame1"><h1>3o days</h1></div>
          <div className="frame2"><h1>90 days</h1></div>
          <div className="frame3"><h1>60 months</h1></div>
          <div className="frame4"><h1>12 months</h1></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
