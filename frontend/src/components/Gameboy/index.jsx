import gameboy from "../../assets/images/gameboy.png";

export const Gameboy = (props) => {
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
          borderStyle: "solid",
          borderWidth: "4px",
          borderColor: "black",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
