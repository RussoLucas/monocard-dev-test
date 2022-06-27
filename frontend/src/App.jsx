import { Routes, Route, Link } from "react-router-dom";
import appRoutes from "./routes/app.routes";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#14213d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Routes>
        {appRoutes.map((el) => {
          return (
            <Route key={el.name} path={el.name} exact element={el.component} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
