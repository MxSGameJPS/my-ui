import ParticlesBackground from "./components/Particles"
import styled from "styled-components"

const MainContainer = styled.main`
position: relative;
z-index: 1; /*Para ficar na frente das particulas*/
display : flex ;
flex-direction : column ;
align-items: center;
justify-content: center;
min-height: 100vh;
color: #ffffff;
`


function App() {

  return (
    <>
      <ParticlesBackground />

      <MainContainer>
        <h1> Bem Vindos ao MyUI</h1>
        <p>Seu Design System Pessoal</p>
      </MainContainer>
    </>
  )
}

export default App
