import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBorder from "../../assets/images/menu-border.png";

export function Menu({ toggleMenu }) {
  const navigate = useNavigate();

  const redirect = (route) => {
    navigate(route);
    toggleMenu(false);
  };

  return (
    <div
      style={{
        width: "100px",
        height: "120px",
        backgroundColor: "#fff",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <img
        style={{ position: "absolute", width: "100%", height: "100%" }}
        src={MenuBorder}
      />
      <div
        style={{
          width: "100%",
          zIndex: 1,
          fontSize: 10,
          display: "flex",
          flexDirection: "column",
          paddingTop: 10,
          paddingLeft: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            fontSize: 8,
          }}
          onClick={() => redirect("/pokemon-forge")}
        >
          GERAR POKéMON
        </div>
        <div
          style={{ zIndex: 2, marginTop: 8, fontSize: 8 }}
          onClick={() => redirect("/pokemon-list")}
        >
          POKéDEX
        </div>
      </div>
    </div>
  );
}
