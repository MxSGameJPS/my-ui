import styled from "styled-components";

export default function Home() {
 
  return (
    <Container>
      <h1>Design System segundo Projeto do Curso</h1>
      <p>PROJETO DO CURSO REACT PRO</p>
    </Container>    
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
color: #ffffff;
text-align: center;
position: relative;
z-index: 20;


h1 { margin-bottom: 1rem; font-size: 3.5rem; }
p { font-size: 2.2rem; color: #c4c4cc; }
`;

