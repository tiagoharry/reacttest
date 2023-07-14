import { Container, Nav } from "./styles"
import Logo from '../../assets/keilaLogo.svg'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />

      <Nav>
          <a href="http://">Home</a>
          <a href="http://">Sobre</a>
          <a href="http://">Contato</a>
      </Nav>

    </Container>

  )
}