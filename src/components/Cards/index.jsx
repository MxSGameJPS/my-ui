import styled from "styled-components";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Cards() {
  const socialLinks = [
    {
      id: 1,
      name: "Github",
      color: "#333", //cor de fundo ao passar o mouse
      url: "https://github.com/mxsgamejps",
      rotate: -15, // O ângulo que o card começa
      icon: <FaGithub size={44} />,
    },
    {
      id: 2,
      name: "Linkedin",
      color: "#0077b5", //cor de fundo ao passar o mouse
      url: "https://www.linkedin.com/in/saulopavanello",
      rotate: 5, // O ângulo que o card começa
      icon: <FaLinkedin size={44} />,
    },
    {
      id: 3,
      name: "Instagram",
      color: "#e1306c", //cor de fundo ao passar o mouse
      url: "https://www.instagram.com/mxsgamejps",
      rotate: 25, // O ângulo que o card começa
      icon: <FaInstagram size={44} />,
    },
  ];

  // useState é a memoria do componente
  //guarda o id do card que foi clicado para fazer uma animação
  const [activeCard, setActiveCard] = useState(null);

  //Função que abre o link
  const handleCardClick = (link) => {
    //Avisar a memoria que o card foi clicado
    setActiveCard(link.id);

    //esperar 300ms para fazer a animação
    setTimeout(() => {
      window.open(link.url, "_blank"); //abrir o link em uma nova aba
      setActiveCard(null); //resetar a memoria
    }, 300);
  };
  return (
    <>
       
      <Styledwrapper>
        <div className="container">
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className={`glass ${activeCard === link.id ? "clicked" : ""}`}
              data-text={link.name}
              style={{
                "--r": link.rotate,
                "--bg-color": link.color,
              }}
              onClick={() => handleCardClick(link)}
            >
              {link.icon}
            </div>
          ))}
        </div>
      </Styledwrapper>
    </>
  );
}



const Styledwrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  .glass {
    position: relative;
    width: 200px;
    height: 250px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    margin: 0 -45px; /* sobreposição dos cards */
    backdrop-filter: blur(10px);

    transform: rotate(calc(--r) * 1deg);

    transition: 0.5s;
    cursor: pointer;
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 20px;
  }

  .glass:hover {
    background-color: var(--bg-color);
    transform: scale(1.1);
    z-index: 100;
    box-shadow: 0 0 20px var(--bg-color);
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: sans-serif;
    opacity: 0;
    transition: 0.3s;
  }

  .glass:hover::before {
    opacity: 1;
  }

  .glass.clicked {
    transform: scale(0.9);
    filter: brightness(1.5);
  }
`;
