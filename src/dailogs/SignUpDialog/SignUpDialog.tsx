import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { RegisterAuthView } from "../../components/RegisterAuthView/RegisterAuthView";

export interface SignUpDialogProps {
  open: boolean;
  onClose: () => void;
  onRequestSignIn: () => void;
  /** First-time signup: parent shows OTP before dashboard access */
  onRegistrationComplete: (email: string) => void;
}

export default function SignUpDialog({
  open,
  onClose,
  onRequestSignIn,
  onRegistrationComplete,
}: SignUpDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            m: { xs: 1, sm: 2 },
            maxWidth: 960,
            width: "100%",
            borderRadius: 3,
            overflow: "hidden",
            maxHeight: "calc(100vh - 24px)",
          },
        },
      }}
    >
      <RegisterAuthView
        compact
        open={open}
        onRequestSignIn={onRequestSignIn}
        onRegistrationComplete={onRegistrationComplete}
      />
    </Dialog>
  );
}
