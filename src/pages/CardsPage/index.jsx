import styled from "styled-components";
import { useState } from "react";
import Cards from "../../components/Cards/";
import HoverCard from "../../components/Cards/HoverCard";
import GoldenCard from "../../components/Cards/GoldenCard";
import ProductCard from "../../components/Cards/ProductCard";

import Modal from "../../components/Modal";
import {
  hoverCardCode,
  goldenCardCode,
  productCardCode,
  socialCardCode,
} from "./../../utils/codeStrings";

export default function CardsPage() {
  //Estado para controlar qual código vai ser exibido
  //Se for null, o modal esta fechado. Se tiver string, o modal esta aberto

  const [selectedCode, setSelectedCode] = useState(null);

  return (
    <Container>
      <h2> Meus Cards </h2>
      {/*O modal Só aparece se selectedCode for verdadeiro */}
      {selectedCode && (
        <Modal
          code={selectedCode}
          onClose={() => setSelectedCode(null)}
        />
      )}

      {/* Sessão 1 */}
      <h3>1. Social Cards (Cards sobrepostos)</h3>
      <Div>
        <Cards />
        <ViewCodeBtn onClick={() => setSelectedCode(socialCardCode)}>
          &lt;/&gt; Ver Código
        </ViewCodeBtn>
      </Div>

      {/* Sessão 2 */}
      <h3>2. Hover Cards (Cards com efeito hover)</h3>
      <Grid>
        <HoverCard />
        <HoverCard
          title="React JS"
          description="React Pro - Do Zero ao Mercado de Trabalho"
        />
         <ViewCodeBtn onClick={() => setSelectedCode(hoverCardCode)}>
          &lt;/&gt; Ver Código
        </ViewCodeBtn>
      </Grid>

      {/* Sessão 3 */}
      <h3> 3. Card de Luxo (card com efeito dourado)</h3>
      <Grid>
        <GoldenCard />
        <ViewCodeBtn onClick={() => setSelectedCode(goldenCardCode)}>
          &lt;/&gt; Ver Código
        </ViewCodeBtn>
      </Grid>

      <h3> 4. Card de Produtos (animação sequencial)</h3>
      <Grid>
        <ProductCard />
        <ViewCodeBtn onClick={() => setSelectedCode(productCardCode)}>
          &lt;/&gt; Ver Código
        </ViewCodeBtn>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  h2 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    text-align: center;
  }

  h3 {
    font-size: 22px;
    padding: 10px 20px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    width: fit-content;
    background-color: #00b37e;
    color: #ffffff;
    width: fit-content;
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const Div = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

const ViewCodeBtn = styled.button`
background: transparent;
border: 1px solid #00b37e;
color: #00b37e;
padding: 8px 16px;
border-radius: 4px;
font-family: monospace;
font-weight: 600;
transition: 0.2s;

&:hover {
  background: #00b37e;
  color: #000000;
}
`;