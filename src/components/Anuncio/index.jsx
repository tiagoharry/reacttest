import { Container } from "./styles";
import Anuncio from '../../assets/anuncioHome.png'

export function Poster() {
  return (
    <Container>
      <img src={Anuncio} alt="" />
    </Container>
  )
}