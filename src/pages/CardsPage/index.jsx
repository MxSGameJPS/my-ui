import styled from "styled-components";
import Cards from "../../components/Cards/";
import HoverCard from "../../components/Cards/HoverCard";
import GoldenCard from "../../components/Cards/GoldenCard";

export default function CardsPage() {
  return (
    <Container>
      <h2> Meus Cards </h2>

      <h3>1. Social Cards (Cards sobrepostos)</h3>
      <Div >
        <Cards />
      </Div>

      <h3>2. Hover Cards (Cards com efeito hover)</h3>
      <Grid>
        <HoverCard />
        <HoverCard
        title="React JS"
        description="React Pro - Do Zero ao Mercado de Trabalho"
        />
      </Grid>

      <h3> 3. Card de Luxo (card com efeito dourado)</h3>
      <Grid>
        <GoldenCard />
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 40px;
    text-align: center;
  }
  p {
    text-align: center;
  }

  h3 {
    font-size: 30px;
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    width: fit-content;
    background-color: aquamarine;
    color: #000000;
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  margin-bottom: 250px;
`;

const Div = styled.div`
margin-bottom: 50px;
display: flex;
`;