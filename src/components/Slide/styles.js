import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 60px;
  position: relative;
  width: 100%;
  display: inline-block;
 
  > img {
  width: 100%;
 }
`

export const SlideText = styled.div`
  display: flex;
  gap: 700px;
  width: 100%;

  figcaption {
    position: absolute;
    color: white;
    font-size: 32px;
    font-weight: 700;
    line-height: 120%; 
    top: 40px;
   
  }

  .text_right {
    text-align: right;
  }

  @media (max-width: 700px) {
    gap: 210px;
    margin-left: 10px;
    figcaption {
      font-size: 12px;
    }
  }
`