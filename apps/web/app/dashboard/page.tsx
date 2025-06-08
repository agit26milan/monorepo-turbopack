
"use client"
import React from 'react'
import useDashboard from './hooks/useDashboard'
import NavbarComponent from '@/components/Navbar/Navbar'
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from "@mui/material";

const DashboardPage = () => {
    const {getDetailUser, user, handleSubmit} = useDashboard()
  
    React.useEffect(() => {
        getDetailUser()
    }, [])

    return (
      <React.Fragment>
        <NavbarComponent />
         <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Profile Information
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid component={'div'} size={{lg: 12}} >
              <TextField InputLabelProps={{ shrink: true }} name='name' defaultValue={user?.name} fullWidth label="Full Name" variant="outlined" />
            </Grid>
            <Grid component={'div'} size={{lg: 12}}>
              <TextField   
              InputLabelProps={{ shrink: true }}
              name='email' defaultValue={user?.email} fullWidth label="Email Address" type="email" variant="outlined" />
            </Grid>
            <Grid component={'div'} size={{lg: 12}}>
              <TextField defaultValue={user?.phone} name='phone' InputLabelProps={{ shrink: true }} fullWidth label="Phone Number" type="tel" variant="outlined" />
            </Grid>
            <Grid component={'div'} size={{lg: 12}} >
              <TextField defaultValue={user?.address} name='address' InputLabelProps={{ shrink: true }} fullWidth label="Address" variant="outlined" multiline rows={3} />
            </Grid>
            <Grid component={'div'} size={{lg: 12}} >
              <Button type='submit' fullWidth variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
      </React.Fragment>
    )
}


export default DashboardPage