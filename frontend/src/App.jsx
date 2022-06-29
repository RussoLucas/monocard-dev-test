import { Routes, Route } from "react-router-dom";
import appRoutes from "./routes/app.routes";
import { Gameboy } from "./components/Gameboy";
import wallpaper from "./assets/images/wallpaper.jpg";
import "./styles.css";

function App() {
  return (
    <div
      id="App"
      className="App"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Gameboy>
        <Routes>
          {appRoutes.map((el) => {
            return (
              <Route
                key={el.name}
                path={el.name}
                exact
                element={el.component}
              />
            );
          })}
        </Routes>
      </Gameboy>
    </div>
  );
}

export default App;
