import { Container, Nav, CadastroLogin } from "./styles"
import { Link } from 'react-router-dom'

import Logo from '../../assets/keilaLogo.svg'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />

      <Nav>
          <Link to="/">INÍCIO</Link>
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