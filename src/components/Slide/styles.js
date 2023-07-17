import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 60px;
  position: relative;
  width: 100%;
 > img {
  width: 100%;
 }
`

export const SlideText = styled.div`
  display: flex;
  gap: 700px;
 margin-left: 100px;
 width: 100%;
  p {
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
    gap: 280px;
    margin-left: 15px;
    p {
      font-size: 13px;
    }
  }
`