import React from "react";
import "./Home.css";
import { BiBook } from "react-icons/bi";
import SettingsIcon from "@material-ui/icons/Settings";
import { BsFillCaretLeftFill } from "react-icons/bs";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import PieChartIcon from "@material-ui/icons/PieChart";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="sidebar">
          <div className="sidebar_item">
            <div class="www">
              <PieChartIcon />
            </div>
          </div>

          <div className="sidebar_item">
            <div class="www">
              <AccountBoxOutlinedIcon />
              <div className="dash">Dashboards</div>
            </div>
          </div>
          <div className="sidebar_item">
            <div class="www">
              <BiBook />
              <div className="dash">Lesson Plan</div>
            </div>
          </div>
          <div className="sidebar_item">
            <div class="www">
              <SettingsIcon />
              <div className="dashi">Setting</div>
            </div>
          </div>
        </div>

        <div className="right_side">
          <div className="navbar_right">
            <div className="right_icon">
              <div className="nav_push"></div>
              <div className="nav_push"></div>
              <div className="nav_push"></div>
            </div>
            <div className="nav_bottom">
              <div className="nav_push"></div>

              <div className="nav_push"></div>
              <div className="nav_push"></div>
            </div>
          </div>
          <div class="video">
            <p>
              <BsFillCaretLeftFill />
              Videos
            </p>
          </div>

          <div className="middle_right">
            <input
              className="middle_select"
              placeholder="Insert URL here"
              type="text"
            />
          </div>
          <div className="orr">
            <div className="navbar_middle2">
              <div className="middle_right">
                <strong>upload</strong>
              </div>
            </div>
            <strong className="or">or</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
