import { Container, Outdoor } from "./styles";
import Anuncio from '../../assets/anuncioHome.png'

export function Poster() {
  return (
    <Container>
      <Outdoor>
        <img src={Anuncio} alt="" />
      </Outdoor>

    </Container>
  )
}