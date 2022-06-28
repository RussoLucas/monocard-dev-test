import { Routes, Route } from "react-router-dom";
import appRoutes from "./routes/app.routes";
import wallpaper from "./assets/images/wallpaper.jpg";
import { Gameboy } from "./components/Gameboy";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
      }}
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
