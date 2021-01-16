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
import Data from './assets/data.jpg';
import Team from './assets/team.jpg';
import Shop from './assets/shop.jpg';

function App() {
  return (

      <Grid container direction="column">
          <Banner />
          <Navbar />
          <Hero />
          <Grid container direction="row" className="card-grid">
            <Grid item xs={12} sm={6} md={4}>
              <CustomCards title="Guide" heading="Erasing Your Digital Footprint: A Guide" image={Data}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCards title="title" heading="Development: Infrastructure of the Future" image={Team}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCards title="title" heading="Security in Mind Products: Tech & More" image={Shop} />
            </Grid>
            
          </Grid>
          <Grid container direction="row">
            <CTA />
          </Grid>
          <Footer />
      </Grid>

    
  );
}

export default App;
