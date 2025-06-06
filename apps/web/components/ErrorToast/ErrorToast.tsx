"use client";

import { Snackbar, Alert } from "@mui/material";

interface ErrorToastProps {
  isOpen: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  message: string;
  type?:string
}
const ErrorToast: React.FC<ErrorToastProps> = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.isOpen}
      autoHideDuration={4000}
      onClose={props.onClose}
    >
      <Alert severity="error" variant="filled" onClose={props.onOpen}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorToast;
