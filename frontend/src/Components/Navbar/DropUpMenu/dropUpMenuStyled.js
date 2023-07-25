import styled from 'styled-components';

export const DropUpContainer = styled.div`
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 95%;
    min-height: 100px;
    background-color: #575899;
    border-radius: 40px;
    padding: 10px;
    ${(props) => props.expanded && 'max-height: 300px;'} 
`;

export const MenuItem = styled.div`
    color: #fff;
    font-size: 16px;
    margin: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const CircleIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-bottom: 8px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 10px;

    input[type="number"] {
        width: 120px;
        background-color: #6F70C0;
        color: #fff;
        padding: 10px;
        border: 1px solid #8E8FF5;
        border-radius: 4px;

        
        &::placeholder {
        color: #C0C1F8;
        }
    }
        button {
            color: #fff;
            border: none;
            padding: 8px 10px;
            border-radius: 10px;
            cursor: pointer;

            &:last-child {
            background-color: #28A77B;
            margin-left: 10px;
            }
        }
    `;
