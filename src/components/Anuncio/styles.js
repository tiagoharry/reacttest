import styled from 'styled-components'

export const Container = styled.div`

margin-top: 48px;
margin-bottom: 58px;
position: relative;
display: inline-block;
text-align: center;
width: 100%;
 
`

export const Outdoor = styled.div`
 

  > img {
  width: 1120px;
 }

 > figcaption {
  position: absolute;
  top: 185px;
  left: 70px;
  color: #F6257F;
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; 
  text-align: left;
 }

 @media (max-width: 700px) {
  > img {
     width: 460px;
    }

    > figcaption {
      font-size: 12px;
      top: 65px;
      left: 25px;
    }
 }
`