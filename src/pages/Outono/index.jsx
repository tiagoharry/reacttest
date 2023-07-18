import { Container, Novidades } from "../home/styles";
import { ComprarButton } from "../../components/ComprarButton"
import { CarrinhoButton } from "../../components/CarrinhoButton"
import { Header } from "../../components/Header"

import Rafaela from '../../assets/colecao1/conjunto_Rafaela.png'
import Marcela from '../../assets/colecao1/conjunto_Marcela.png'
import Natalia from '../../assets/colecao1/conjunto_Natalia.png'
import Amanda from '../../assets/colecao1/conjunto_Amanda.png'
//import { Link } from "react-router-dom";


export function Outono() {
  return (
    <Container>
      <Header />
      <Novidades>

        <div className="card_novidades">
          <img src={Rafaela} alt="" />
          <p>Conjunto Rafaela</p>
          <div className="info_card">
            <span>Camisa e Calça</span>
            <div className="price">
              <p>R$ <strong>89,90</strong></p>
            </div>
          </div>
          <div className="buttons">
            <ComprarButton />
            <CarrinhoButton />
          </div>
        </div>

        <div className="card_novidades">
          <img src={Marcela} alt="" />
          <p>Conjunto Marcela</p>
          <div className="info_card">
            <span>Camisa e Calça</span>
            <div className="price">
              <p>R$ <strong>99,90</strong></p>
            </div>
          </div>
          <div className="buttons">
            <ComprarButton />
            <CarrinhoButton />
          </div>

        </div>
        <div className="card_novidades">
          <img src={Natalia} alt="" />
          <p>Conjunto Natalia</p>
          <div className="info_card">
            <span>Camisa e Bermuda</span>
            <div className="price">
              <p>R$ <strong>89,90</strong></p>
            </div>
          </div>
          <div className="buttons">
            <ComprarButton />
            <CarrinhoButton />
          </div>
        </div>

        <div className="card_novidades">
          <img src={Amanda} alt="" />
          <p>Conjunto Amanda</p>
          <div className="info_card">
            <span>Casaco e Bermuda</span>
            <div className="price">
              <p>R$ <strong>89,90</strong></p>
            </div>
          </div>
          <div className="buttons">
            <ComprarButton />
            <CarrinhoButton />
          </div>
        </div>
      </Novidades>

   
        <a href="">Voltar</a>

    </Container>
  )
}