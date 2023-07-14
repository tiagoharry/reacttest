import { Header } from "../../components/Header"
import { Slide } from "../../components/Slide"
import { Stroke } from '../../components/Stroke'
import { ComprarButton } from "../../components/ComprarButton"
import { CarrinhoButton } from "../../components/CarrinhoButton"
import { Container, Nav, Novidades } from "./styles"

import Rafaela from '../../assets/colecao1/conjunto_Rafaela.png'
import Marcela from '../../assets/colecao1/conjunto_Marcela.png'
import Natalia from '../../assets/colecao1/conjunto_Natalia.png'
import Amanda from '../../assets/colecao1/conjunto_Amanda.png'
import Cristian from '../../assets/colecao1/conjunto_Cristian.png'
import Rodrigo from '../../assets/colecao1/conjunto_Rodrigo.png'
import Martin from '../../assets/colecao1/conjunto_Martin.png'
import Tiago from '../../assets/colecao1/conjunto_Tiago.png'
import Anuncio from '../../assets/anuncioHome.png'

import Oculos from '../../assets/colecao2/oculos.png'
import Relogio from '../../assets/colecao2/relogio.png'
import Joias from '../../assets/colecao2/joias.png'
import Bolsas from '../../assets/colecao2/bolsas.png'

export function Home() {
  return (
    <Container>
      <Header />
      <Slide />
      <Stroke />
      <Nav>
        <a href="http://">Novidades</a>
        <a href="http://">Ver todos</a>
        <a href="http://">Coleção de outono</a>
      </Nav>
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

        <div className="card_novidades">
          <img src={Cristian} alt="" />
          <p>Conjunto Cristian</p>
          <div className="info_card">
            <span>Camisa</span>
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
          <img src={Rodrigo} alt="" />
          <p>Conjunto Rodrigo</p>
          <div className="info_card">
            <span>Camisa e Casaco</span>
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
          <img src={Martin} alt="" />
          <p>Conjunto Martin</p>
          <div className="info_card">
            <span>Camisa e Casaco</span>
            <div className="price">
              <p>R$ <strong>189,90</strong></p>
            </div>
          </div>
          <div className="buttons">
            <ComprarButton />
            <CarrinhoButton />
          </div>
        </div>

        <div className="card_novidades">
          <img src={Tiago} alt="" />
          <p>Conjunto Tiago</p>
          <div className="info_card">
            <span>Camisa e Calça</span>
            <div className="price">
              <p>R$ <strong>78,90</strong></p>
            </div>
          </div>
          <div className="buttons">
            <ComprarButton />
            <CarrinhoButton />
          </div>
        </div>
      </Novidades>

      <Stroke />
      <div className="anuncio">
        <img src={Anuncio} alt="" />
      </div>

      <div className="textCall">
        <p>Acompanhe nossa coleção de acessórios masculinos e femininos.</p>
      </div>

      <div className="colection">
        <div className="colection_product">
          <img src={Oculos} alt="" />
          <p>Óculos</p>
        </div>

        <div className="colection_product">
          <img src={Relogio} alt="" />
          <p>Relógio</p>
        </div>

        <div className="colection_product">
          <img src={Joias} alt="" />
          <p>Jóias</p>
        </div>

        <div className="colection_product">
          <img src={Bolsas} alt="" />
          <p>Bolsa</p>
        </div>

      </div>

    </Container >
  )
}