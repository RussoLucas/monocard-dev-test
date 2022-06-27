import { PokemonForge } from "./pages/PokemonForge";
import { Start } from "./pages/Start";

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
      <Start />
    </div>
  );
}

export default App;
