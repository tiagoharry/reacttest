import { Container, SlideText } from './styles'
import Slide1 from '../../assets/slide1.png'

export function Slide() {
  return (

    <Container>
      <SlideText>
        <div className="text_left">
        <p>Descubra um novo jeito<br/>
          de se vestir conosco!</p>
        </div>
       <div className="text_right">
       <p>As coleções de OUTONO<br/>
          estão chegando!</p>
       </div>      
      </SlideText>

      <img src={Slide1} alt="" />
    </Container>

  )
}