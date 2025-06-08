"use client";
import React from 'react'
import { useAppSelector } from "@/store/store";
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import api from "@/apis/api";
import { API_PATH } from "@/apis/path";

const NavbarComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter()
  const user = useAppSelector((state) => state.user.user)
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async () => {
    try {
      await api({method: 'GET', url: API_PATH.LOGOUT_USER});
      document.cookie = 'token='
      router.replace('/login')
    }catch(error) {
      if(error instanceof FirebaseError) {
        console.log({error},'sas')
      }
    }
  }
  
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
       
        </Typography>

        <Box>
          <IconButton onClick={handleMenu} size="small" sx={{ ml: 2 }}>
            <Avatar src={user.photoUrl || ''} ></Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 4,
              sx: { mt: 1.5, minWidth: 220 },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Box px={2} py={1}>
              <Typography variant="subtitle1" fontWeight={500}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
            </Box>

            <MenuItem onClick={() => { handleClose(); onLogout(); }}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo (NavbarComponent)