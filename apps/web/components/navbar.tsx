import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';

const NavbarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9',
        }}
      >
        
        <Container>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '0.5px',
              color: '#000',
            }}
          >
           {/* Agita */}
          </Typography>

        </Toolbar>
        </Container>
        
      </AppBar>
    </Box>
  );
}

export default React.memo(NavbarComponent) 