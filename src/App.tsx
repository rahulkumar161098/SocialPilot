import React from 'react';
import { Typography, Toolbar } from '@mui/material';
import Header from './components/Header/Header';
import { useTheme } from '@mui/material/styles';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import AppRouter from './routers/AppRouter';


function App() {
  const theme = useTheme();
  // const background = theme.palette.background.default;
  return (
    <>
      <AppRouter />

    </>
  );
}

export default App;
