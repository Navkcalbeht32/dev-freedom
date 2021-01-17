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
import Section from './components/Section/Section.component';
import MiniCard from './components/MiniCard/MiniCard.component';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Gmail } from './assets/gmail.svg';
import { ReactComponent as Snapchat } from './assets/snapchat.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Tiktok } from './assets/tik-tok.svg';
import { ReactComponent as Messenger} from './assets/messenger.svg';
import { ReactComponent as GooglePhotos} from './assets/google-photos.svg';
import { ReactComponent as WeChat} from './assets/wechat.svg';



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
              <CustomCards title="Info" heading="Web App Development: Infrastructure of the Future" image={Team}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCards title="Info" heading="Security in Mind Products: Tech & Hardware" image={Shop} />
            </Grid>
            
          </Grid>
          <Grid container direction="row">
            <Section heading="How Big-Tech Applications use your Data" subheading="and what they know about you."  />
            <Grid container direction="row"  justify="center" className="mini-cards">
              <MiniCard Icon={Google} title="Google" />
              <MiniCard Icon={Instagram} title="Instagram" />
              <MiniCard Icon={Facebook} title="Facebook" />
              <MiniCard Icon={Snapchat} title="Snapchat" />
              <MiniCard Icon={Tiktok} title="TikTok" />
              <MiniCard Icon={Messenger} title="Messenger" />
              <MiniCard Icon={GooglePhotos} title="Google Photos" />
              <MiniCard Icon={WeChat} title="WeChat" />
              <MiniCard Icon={Gmail} title="Gmail" />
            </Grid>
            
          </Grid>

          <Section heading="User & Development Resources" subheading="resources linked below." />
          <Grid container direction="row">
            <CTA /> 
          </Grid>
          <Footer />
      </Grid>

    
  );
}

export default App;
