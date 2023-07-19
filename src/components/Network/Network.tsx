import { FC } from "react";

import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

import { NetworkLink } from "./Network.styled";

export const Network: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <NetworkLink
        href="https://github.com/Bohdan100"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon sx={{ fontSize: 28, color: "#6e5494" }} />
      </NetworkLink>

      <NetworkLink
        href="https://www.linkedin.com/in/bohdan-orlovskiy/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon sx={{ fontSize: 30, color: "#0077b5" }} />
      </NetworkLink>

      <NetworkLink
        href="https://www.t.me/Bogdan_info"
        target="_blank"
        rel="noreferrer"
      >
        <TelegramIcon sx={{ fontSize: 28, color: "#24a1dd" }} />
      </NetworkLink>

      <NetworkLink
        href="https://uk.reactjs.org/"
        target="_blank"
        rel="noreferrer"
      >
        <AddIcCallIcon sx={{ fontSize: 25, color: "#0077b5" }} />
      </NetworkLink>
    </Box>
  );
};
