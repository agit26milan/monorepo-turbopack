"use client";
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Link,
} from "@mui/material";
import useLogin from "./hooks/useLogin";
import NextLink from "next/link";

const LoginPage = () => {
  const { onChangeEmail, onChangePassword, isDisableLoginButton, onLoginUser, isLoading } =
    useLogin();

  return (
    <React.Fragment>
      <Box
        sx={{
          height: "100vh",
          bgcolor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: 360,
            bgcolor: "#fff",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" mb={2} textAlign="center">
            Login
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              variant="outlined"
              onChange={onChangeEmail}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              variant="outlined"
              onChange={onChangePassword}
            />
            <Button
              onClick={onLoginUser}
              disabled={isDisableLoginButton()}
              type="submit"
              variant="contained"
              fullWidth
              loading={isLoading}
            >
              Login
            </Button>
            <Link component={NextLink} href={"/register"}>
              <Typography variant="subtitle1" textAlign="center">
                Don&apos;t have an account? Register
              </Typography>
            </Link>
          </Stack>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default LoginPage;
