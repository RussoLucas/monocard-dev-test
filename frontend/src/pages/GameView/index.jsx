import GameViewBackground from "../../assets/images/game-image.png";

export const GameView = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `url(${GameViewBackground})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};
