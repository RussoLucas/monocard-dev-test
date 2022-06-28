import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "../Menu";
import "./styles.css";

export const Gameboy = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [showMenu, toggleMenu] = useState(false);

  const allowShowMenu = () => {
    if (pathname !== "/") toggleMenu(!showMenu);
  };

  return (
    <div style={{ transform: "scale(2)" }}>
      <br></br>
      <br></br>

      <div id="GBbody">
        <div id="side">
          <hr></hr>
          <hr></hr>
        </div>
        <div id="com">▲ COMM.</div>
        <div id="volume"></div>
        <div id="screenWrapper">
          <div id="screenReflection"></div>
          <div id="screen">
            {children}
            {showMenu && <Menu toggleMenu={toggleMenu} />}
          </div>
          <div id="logo">
            <span className="logoName">
              <i>GAMEBOY</i>
            </span>
            <span className="logoModel">
              <b>
                <span id="c">C</span>
                <span id="o1">O</span>
                <span id="l">L</span>
                <span id="o2">O</span>
                <span id="r">R</span>
              </b>
            </span>
          </div>
          <div id="powerLight"></div>
          <div id="powerSymbols">)))</div>
          <div id="powerWord">POWER</div>
        </div>

        <div id="nintendo">
          <span>Nintendo</span>
        </div>

        <ul id="arrows">
          <li id="center">●</li>
          <li id="up">▲</li>
          <li id="right">►</li>
          <li id="down">▼</li>
          <li id="left">◀</li>
        </ul>

        <ul id="ABbtns">
          <li>A</li>
          <li>B</li>
        </ul>

        <div id="SSbtns">
          <ul>
            <li onClick={allowShowMenu}></li>
            <li onClick={() => navigate("/game-view")}></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
