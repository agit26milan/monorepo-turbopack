import { configureStore } from '@reduxjs/toolkit';
import appReducers from './reducers';

export const store = configureStore({
  reducer: appReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

// Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;