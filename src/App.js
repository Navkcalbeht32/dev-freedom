import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import Hero from './components/Hero/Hero.component';
import LinkCard from './components/LinkCard/LinkCard.component';
import { Router } from 'react-router-dom';
import CTA from './components/CTA/CTA.component';
import Footer from './components/Footer/Footer.component';
import Banner from './components/Banner/Banner.component';
import CustomCards from './components/CustomCards/CustomCards.component';

function App() {
  return (

      <Grid container direction="column">
          <Banner />
          <Navbar />
          <Hero />
          <Grid container direction="row">
            <CustomCards />
          </Grid>
          <Grid container direction="row">
            <CTA />
          </Grid>
          <Footer />
      </Grid>

    
  );
}

export default App;
