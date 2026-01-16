import { useState } from "react";
import styled from "styled-components";
import Toast from "../../components/Toast";
import Cards from "../../components/Cards";

export default function Home() {
  //Estado para controlar a visibilidade do Toast
  //Inicialmente ele vai ser null (não existe um tost visível)
  const [showToast, setShowToast] = useState(null);

  const handleShowSuccess = () => {
    setShowToast({
      type: "success",
      message: "Você apertou o Botão de Sucesso",
    });
  };

  const handleShowError = () => {
    setShowToast({ type: "error", message: "Você apertou o Botão de Erro" });
  };

  const closeToast = () => {
    setShowToast(null);
  };
  return (
    <MainContainer>
      <h1> Bem Vindos ao MyUI</h1>
      <p>Seu Design System Pessoal</p>
      <main
        style={{
          position: "relative",
          zIndex: 1,
          color: "#ffffff",
          textAlign: "center",
          paddingTop: "20vh",
        }}
      >
        <h1>Testando Toast</h1>

        <ButtonContainer>
          <ButtonSucesso onClick={handleShowSuccess}>
            Mostrar Toast de Sucesso
          </ButtonSucesso>
          <ButtonErro onClick={handleShowError}>
            Mostrar Toast de Erro
          </ButtonErro>
        </ButtonContainer>

        <Cards title="Exemplo de Card" cor="#f000dc">
          <p>Este é um exemplo de conteúdo dentro do Card.</p>
        </Cards>
        <Cards title="Exemplo de Card" cor="#fffb07">
          <p>Este é um segundo exemplo de conteúdo dentro do Card.</p>
        </Cards>
      </main>

      {/*Renderização Condicional do Toast*/}
      {showToast && (
        <Toast
          type={showToast.type}
          message={showToast.message}
          onClose={closeToast} //Função que limpa o estado do Toast
        />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  z-index: 1; /*Para ficar na frente das particulas*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ButtonSucesso = styled.button`
  padding: 10px 20px;
  background-color: #029e24;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
const ButtonErro = styled.button`
  padding: 10px 20px;
  background-color: #9e0202;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
