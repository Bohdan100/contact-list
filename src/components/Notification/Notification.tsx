import { FC } from "react";
import { INotificationProps } from "interfaces";

import { Snackbar, Alert, AlertTitle } from "@mui/material";

export const Notification: FC<INotificationProps> = ({
  alert,
  message,
  closeNotice,
}) => {
  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeNotice();
  };

  return (
    <Snackbar
      sx={{ width: "300px", height: "30px" }}
      open={alert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={4000}
      onClose={handleAlertClose}
    >
      <Alert
        variant="filled"
        severity="info"
        onClose={handleAlertClose}
        sx={{ mt: "20px" }}
      >
        <AlertTitle>Notification</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};
