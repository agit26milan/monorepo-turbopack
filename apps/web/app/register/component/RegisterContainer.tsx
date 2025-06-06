"use client"


import React from 'react'
import { Box, Button, TextField, Typography, Paper, Stack, Link } from "@mui/material";
import NextLink from "next/link";


const RegisterContainer = () => {
    return (
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
         Register
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
              Register
            </Button>
   
                        <Link component={NextLink} href={"/"} >
                      <Typography  variant="subtitle1" textAlign="center">
                    Already have an account? Login
                    </Typography>
                
                </Link>
   

           
          </Stack>
        </form>
      </Paper>
    </Box>
    )
}


export default RegisterContainer