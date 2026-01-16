import styled from "styled-components";

export default function Cards ({ children, title, cor }) {
    return (
        <CardsContainer>
            {
                title && <h3 style={{ color: cor || '#ffffff', marginBottom: '10px'}}>{title}</h3>
            }
            
            {children}
        </CardsContainer>
    )
};

const CardsContainer = styled.div`
background: #202024;
padding: 20px;
border-radius: 8px;
border: 1px solid #323238;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
margin-top: 20px;
`;