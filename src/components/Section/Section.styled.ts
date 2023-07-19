import styled from "styled-components";
import { Box } from "@mui/material";

export const SectionWrap = styled(Box)(() => ({
  marginBottom: "35px",
  paddingTop: "20px",

  bordeRadius: "10px",
  boxShadow: `0 0 0 2px #8ea7e9,
    8px 8px 0 0 #8ea7e9`,
}));

export const TitleWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  padding: "0 20px 20px",
  borderBottom: "3px solid #8ea7e9",
}));
