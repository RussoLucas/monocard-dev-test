import { Gameboy } from "../../components/Gameboy";
import pixelPokemonLogo from "../../assets/images/pixelPokemonLogo.png";
import pikachu from "../../assets/images/pikachu.png";

export const Start = () => {
  return (
    <Gameboy>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#dad7cd",
          borderRadius: "10px",
        }}
      >
        <img style={{ width: "50%", height: "30%" }} src={pixelPokemonLogo} />
        <button> START </button>
        <img style={{ width: "30%", height: "40%" }} src={pikachu} />
      </div>
    </Gameboy>
  );
};
