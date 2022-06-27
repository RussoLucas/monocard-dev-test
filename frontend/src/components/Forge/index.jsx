import pokemonLogo from "../../assets/images/pokemonLogo.png";
import gameboy from "../../assets/images/gameboy.png";

export const Forge = () => {
  return (
    <div
      style={{
        width: "30%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${gameboy})`,
        backgroundSize: "90% 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          marginTop: "15%",
          width: "80%",
          height: "40%",
          backgroundColor: "#942a2a",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};
