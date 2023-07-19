import styled from "styled-components";
import { TableRow } from "@mui/material";

import { getRandomColor } from "services";

export const HeadCell = styled.th`
  padding: 15px;

  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accentPrimary};

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

export const BodyRow = styled(TableRow)(() => ({
  backgroundColor: "transparent",
  transition: "0.2s cubic-bezier(0.4, 0, 0.2, 1)",

  "&:hover, &:focus": {
    backgroundColor: "#e5e0ff",
  },
}));

export const BodyCell = styled.td`
  padding: 10px;

  font-size: 14px;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.darkgrey};
  }

  @media screen and (min-width: 600px) {
    font-size: 15px;
  }
`;

export const BodyCellIcon = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.darkgrey};
  }
`;
export const IconWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  background-color: ${getRandomColor};
`;

export const Btn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.transparent};
  opacity: 0.7;
  cursor: pointer;

  :hover,
  :focus {
    opacity: 1;
  }
`;
