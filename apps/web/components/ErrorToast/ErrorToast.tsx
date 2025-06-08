"use client";
import React, { useEffect } from 'react'
import { Snackbar, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from '@/store/store';
import { resetErrorAction } from '@/store/actions/errorAction';


const ErrorToast = () => {
  const error = useAppSelector((state) => state.error.error)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(error?.type) {
      setTimeout(() => {
        dispatch(resetErrorAction())
      }, 2000)
    }
  }, [error])

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(error?.type)}
      autoHideDuration={4000}
    >
      <Alert severity="error" variant="filled">
        {error?.message}
      </Alert>
    </Snackbar>
  );
};

export default React.memo(ErrorToast);
