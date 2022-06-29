import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBorder from "../../assets/images/menu-border.png";
import { Container, ListContainer } from "./styles";

export function Menu({ toggleMenu }) {
  const navigate = useNavigate();

  const redirect = (route) => {
    navigate(route);
    toggleMenu(false);
  };

  return (
    <Container>
      <img
        style={{ position: "absolute", width: "100%", height: "100%" }}
        src={MenuBorder}
      />
      <ListContainer>
        <div
          style={{
            zIndex: 3,
            fontSize: 8,
            cursor: "pointer",
          }}
          onClick={() => redirect("/pokemon-forge")}
        >
          GERAR POKéMON
        </div>
        <div
          style={{ zIndex: 3, marginTop: 8, fontSize: 8, cursor: "pointer" }}
          onClick={() => redirect("/pokemon-list")}
        >
          POKéDEX
        </div>
      </ListContainer>
    </Container>
  );
}
