import pikachuStartScreen from "../../assets/images/pikachu-start-screen.gif";

export const Start = () => {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          height: "100%",
          objectFit: "contain",
        }}
        src={pikachuStartScreen}
      />
    </div>
  );
};
