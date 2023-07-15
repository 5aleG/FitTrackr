import styled from "styled-components";
import backgroundImage from "../../Assets/backgroundimage.png";

export const BackgroundContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const MarketingText = styled.h1`
    width: 164px;
    height: 500px;
    position: absolute;
    left: 46px;
    top: 75px;
    color: #FFF;
    font-family: 'Teko', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
`;

export const LoginButton = styled.button`
    display: inline-flex;
    padding: 15px 131px;
    width: 350px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #cfbfba;
    background: rgba(217, 217, 217, 0.05);
`;

export const SignUpButton = styled.button`
    display: inline-flex;
    padding: 15px 131px;
    width: 350px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #cfbfba;
    background: rgba(217, 217, 217, 0.05);
`;

export const ButtonText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    `;