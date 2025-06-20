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
  IconButton,
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import useRegister from "./hooks/useRegister";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterContainer = () => {
  const {
    onRegisterUser,
    onChangeEmail,
    onChangePassword,
    isDisableBtn,
    isLoading,
    showPassword,
    togglePass,
  } = useRegister();
  return (
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
          Register
        </Typography>
        <Stack spacing={2}>
          <form onSubmit={onRegisterUser}>
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
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePass} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={onChangePassword}
              />
              <Button
                loading={isLoading}
                disabled={isDisableBtn()}
                type="submit"
                variant="contained"
                fullWidth
              >
                Register
              </Button>
            </Stack>
          </form>

          <Link component={NextLink} href={"/login"}>
            <Typography variant="subtitle1" textAlign="center">
              Already have an account? Login
            </Typography>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
};

export default RegisterContainer;
