import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: gray;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Nav = styled.div`
   display: flex;
   gap: 10px;

   > a {
    text-decoration: none;
    font-size: 20px;
    color: antiquewhite;
   }
`