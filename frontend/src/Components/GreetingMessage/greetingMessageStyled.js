import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  color: var(--primary-text-color);
`;

export const Message = styled.div`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  padding-bottom: 10px;
`;

export const Username = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
