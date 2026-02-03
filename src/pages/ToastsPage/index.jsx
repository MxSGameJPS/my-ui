import { useState } from "react";
import styled from "styled-components";
import Toast  from "../../components/Toast/";

export default function ToastsPage() {
    const [toast, setToast] = useState(null);

    const showToast = (type, message) => {
        setToast({ type, message });
    };

    const closeToast = () => {
        setToast(null);
    };

    return (
        <Container>
            <h2> Componente: Toast Notification</h2>
            <p> Avisos Flutuantes temporários</p>

            <ButtonsContainer>
                <Button
                $variant='#00b37e' 
                onClick={() => showToast("success", "Sucesso! Componente Funcionando")}
                >
                    Mostrar Toast de Sucesso
                </Button>

                <Button 
                $variant='#f75a68'
                onClick={() => showToast("error", "Erro! Algo deu errado")}
                >
                    Mostrar Toast de Erro
                </Button>

                <Button
                $variant='#fba94c'
                onClick={() => showToast("warning", "Atenção! Verifique os dados")}
                >
                    Mostrar Toast de Aviso
                </Button>

                <Button
                $variant='#3291ff'
                onClick={() => showToast("info", "Info! Novas atualizações disponíveis")}
                >
                    Mostrar Toast de Informação
                </Button>


            </ButtonsContainer>

            {toast && (
            <Toast 
                message={toast.message} 
                type={toast.type} 
                onClose={closeToast} 
            />
            )};
        </Container>
    );
};

const Container = styled.div`
color : #ffffff;
display: flex;
flex-direction: column;
gap: 20px;
`;

const ButtonsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 15px;
margin-top: 20px;
`;

const Button = styled.button`
padding: 15px;
background-color: ${props => props.$variant};
color: #ffffff;
border: none;
border-radius: 6px;
cursor: pointer;
font-weight: bold;
transition: transform 0.2s, filter 0.2s;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

&:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
}

&:active {
    transform: translateY(0);
}

`;

