import { Routes, Route } from "react-router-dom";
import appRoutes from "./routes/app.routes";
import { Gameboy } from "./components/Gameboy";
import { Container } from "./styles.js";

function App() {
  return (
    <Container className="App">
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
    </Container>
  );
}

export default App;
