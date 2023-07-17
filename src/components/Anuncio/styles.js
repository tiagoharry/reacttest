import styled from 'styled-components'

export const Container = styled.div`
text-align: center;
margin-top: 48px;
margin-bottom: 58px;
 > img {
  width: 1120px;
 }

 @media (max-width: 700px) {
  > img {
     width: 480px;
    }
 }
`