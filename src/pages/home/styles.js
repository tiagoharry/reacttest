import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .anuncio {
   margin-top: 48px;
   margin-bottom: 48px;
   display: flex;
   justify-content: center;
  }

  .textCall {
    display: flex;
    justify-content: center;
   text-align: center;
    color: #F6257F;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 48px;
  }  
`

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
`

export const Novidades = styled.div`
  display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 justify-content: center;
 gap: 16px;
 padding: 0 160px;
 margin-top: 14px;

 @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

 .card_novidades {
  margin-bottom: 48px;
   p {
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    margin-left: 5px;
  }

   span {
    margin-left: 5px;
  }

  .info_card {
   display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }
 }
`

export const Colection = styled.div` 
    display: flex;
    justify-content: center;
    margin-bottom: 82px;

   

  .colection_product {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #17171C;
    font-size: 32px;
    font-weight: 700;
    line-height: 120%; 
  }

  @media (max-width: 700px) {
      flex-direction: column;
      gap: 16px;

      .colection_product {
        font-size: 20px;
      }
    }
`