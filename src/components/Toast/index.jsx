import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

//Props: message (texto), type ('success' ou 'error'), onClose (função do pai para fechar o toast)
export default function Toast ({ message, type = 'success', onClose}) {
    
    useEffect(() => {
        //1. Iniciar o Timer, assim que o componente for montado
        const timer = setTimeout(() => {
            //2. Chamar onClose apos 3 segundos, para fechar o componente
            onClose();
        }, 3000);//3 segundos

        //3. Limpar o Timer, quando o componente for desmontado
        return () => {
            clearTimeout(timer);
        };

    }, [onClose]);
    
    return (
        <ToastContainer $type={type}>
            <ToastMessage>{message}</ToastMessage>
            <CloseButton onClick={onClose}>X</CloseButton>
        </ToastContainer>
   );
};

const slideIn = keyframes`
from { transform: translateX(100%); opacity: 0; }
to { transform: translateX(0); opacity: 1; }
`;

const ToastContainer = styled.div`
position: fixed;
top: 20px;
right: 20px;
z-index: 1000;
min-width: 250px;

/*Receber a cor dinamicamente por props */
background-color: ${props => props.$type === 'success' ? '#00b37e' : '#f75a68'};

color: #ffffff;
padding: 1rem;
border-radius: 6px;
box-shadow: 0 4px 12px rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;

/* Animação de Entrada */
animation :${slideIn} 0.5s ease-out;

/*Cursor indicando que é clicavel */
cursor: pointer;
`
const CloseButton = styled.button`
background: transparent;
border: none;
color: #ffffff;
cursor: pointer;
font-weight: bold;
`;

const ToastMessage = styled.span`
color: #ffffff;
`;