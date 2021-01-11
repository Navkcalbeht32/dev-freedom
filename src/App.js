import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import Hero from './components/Hero/Hero.component';
import LinkCard from './components/LinkCard/LinkCard.component';
import { Router } from 'react-router-dom';
import CTA from './components/CTA/CTA.component';

function App() {
  return (

      <Grid container direction="column">
          <Navbar />
          <Hero />
          <Grid container direction="row">
            <CTA />
          </Grid>
      </Grid>

    
  );
}

export default App;
