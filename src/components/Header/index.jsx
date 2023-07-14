import { Container, Nav, CadastroLogin } from "./styles"

import Logo from '../../assets/keilaLogo.svg'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />

      <Nav>
          <a href="http://">INÍCIO</a>
          <a href="http://">CASTEGORIAS</a>
          <a href="http://">CARRINHO</a>
      </Nav>

      <CadastroLogin>
        <a href="">CADASTRO</a>
        <a href="">LOGIN</a>
      </CadastroLogin>

    </Container>

  )
}