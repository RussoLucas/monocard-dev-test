import { Gameboy } from "../../components/Gameboy";
import pikachu from "../../assets/images/pikachuStartScreen.gif";

export const Start = () => {
  return (
    <Gameboy>
      <div>
        <img
          style={{
            position: "absolute",
            height: "100%",
            objectFit: "contain",
          }}
          src={pikachu}
        />
      </div>
    </Gameboy>
  );
};
