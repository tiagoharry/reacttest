import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`

export const Nav = styled.div`
   display: flex;
   gap: 16px;

   /*> a {
    text-decoration: none;
    font-size: 16px;
    color: #17171C;
    font-weight: 700;
    line-height: 120%;
    transition: 0.2s ease;
   }

   > a:hover {
    color:  #F6257F;
   }*/
`

export const CadastroLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

   > a {
    text-decoration: none;
    color: #F6257F;
    font-weight: 700;
    line-height: 120%
   }

   >a:nth-child(2) {
    background: #F6257F;
    border-radius: 4px;
    color: #FFF;
    padding:9px 16px;
   }
`