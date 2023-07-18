import { Container, SlideText } from './styles'
import Slide1 from '../../assets/slide1.png'

export function Slide() {
  return (

    <Container>
      <SlideText>
        <div className="text_left">
        <figcaption>Descubra um novo jeito<br/>
          de se vestir conosco!</figcaption>
        </div>
       <div className="text_right">
       <figcaption>As coleções de OUTONO<br/>
          estão chegando!</figcaption>
       </div>      
      </SlideText>

      <img src={Slide1} alt="" />
    </Container>

  )
}