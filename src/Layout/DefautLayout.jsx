import { MdOutlineDesignServices } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import ParticlesBackground from "./../components/Particles/index";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <ParticlesBackground />
      <Sidebar>
        <h2>
          MyUI <MdOutlineDesignServices size={32} color="#ffffff" />
        </h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/toasts">Toasts</Link>
          <Link to="/buttons">Botões</Link>
          <Link to="/cards">Cards</Link>
        </nav>
      </Sidebar>

      <Content>
        {/* Outlet é onde as páginas filhas vão aparecer */}
        <Outlet />
      </Content>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.aside`
  position: relative;
  z-index: 10;
  width: 250px;
  background: rgba(18,18,20, 0.75);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-right: 1px solid #323238;

  h2 {
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 20px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    display: block;
    color: #c4c4cc;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
      color: #00b37e;
    }
  }
`;

const Content = styled.main`
  position: relative;
  z-index: 10;
  flex: 1;
  padding: 30px;
  background: transparent;
`;
