import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/Profile">
        <img
          src="https://github.com/LeonardoF-Andrade.png"
          alt="Foto do Usuario"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Leonardo Andrade</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
