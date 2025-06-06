"use client"

// import NavbarComponent from '@/components/navbar'
import React from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Link,
} from '@mui/material';
import useLogin from './hooks/useLogin';
import NextLink from "next/link";


const LoaginPage = () => {
    const {} = useLogin()

    return (
        <React.Fragment>
        <Box
      sx={{
        height: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 360,
          bgcolor: '#fff',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Login
        </Typography>

        <form >
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              variant="outlined"
            />
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
                      <Link component={NextLink} href={"/register"} >
                      <Typography  variant="subtitle1" textAlign="center">
                    Don&apos;t have an account? Register
                    </Typography>
                    </Link>
          </Stack>
        </form>
      </Paper>
    </Box>
        </React.Fragment>
    )
}


export default LoaginPage