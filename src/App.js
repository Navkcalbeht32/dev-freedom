import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import Hero from './components/Hero/Hero.component';

function App() {
  return (
    <Grid container direction="column">
      <Navbar />
      <Hero />
    </Grid>
  );
}

export default App;
