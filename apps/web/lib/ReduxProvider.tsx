"use client"
import React from 'react'
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from '@/store/store';

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider