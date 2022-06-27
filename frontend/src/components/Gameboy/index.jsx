import "./styles.css";

export const Gameboy = (props) => {
  return (
    <div style={{ transform: "scale(1.8)" }}>
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
          <div id="screen">{props.children}</div>
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
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
