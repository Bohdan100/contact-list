import styled from "styled-components";

export const NetworkLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: "0.5s cubic-bezier(0.4, 0, 0.2, 1)";

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
