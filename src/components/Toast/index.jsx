import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiX,
} from "react-icons/fi";

const toastTypes = {
  success: {
    color: "#00b37e",
    icon: <FiCheckCircle size={24} />,
  },
  error: {
    color: "#f75a68",
    icon: <FiAlertCircle size={24} />,
  },
  warning: {
    color: "#fba94c",
    icon: <FiAlertTriangle size={24} />,
  },
  info: {
    color: "#3291ff",
    icon: <FiInfo size={24} />,
  },
};

//Props: message (texto), type ('success' ou 'error'), onClose (função do pai para fechar o toast)
export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    //1. Iniciar o Timer, assim que o componente for montado
    const timer = setTimeout(() => {
      //2. Chamar onClose apos 3 segundos, para fechar o componente
      onClose();
    }, 3000); //3 segundos

    //3. Limpar o Timer, quando o componente for desmontado
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <ToastContainer $type={type}>
      {toastTypes[type]?.icon}
      <Content>
        <strong style={{ textTransform: "capitalize" }}>{type}</strong>
        <span style={{ fontSize: "0.9rem", marginTop: "4px" }}>{message}</span>
      </Content>

      <CloseButton onClick={onClose}>
        <FiX size={18} />
      </CloseButton>
    </ToastContainer>
  );
}

const slideIn = keyframes`
from { transform: translateX(100%); opacity: 0; }
to { transform: translateX(0); opacity: 1; }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  min-width: 300px;

  /*Receber a cor dinamicamente por props */
  background-color: ${props => toastTypes[props.$type].color};

  color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;

  /* Animação de Entrada */
  animation: ${slideIn} 0.5s ease-out;

  /*Cursor indicando que é clicavel */
  cursor: pointer;

  backdrop-filter: blur(4px);
`;
const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

    &:hover {
        color: #ffffff
    }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
