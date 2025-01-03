import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import WhoShouldAttend from '../components/WhoShouldAttend'
import AdvisoryCommittee from '../components/AdvisoryCommittee'
import styles from '../styles/Home.module.scss'
import Speakers from '@/components/Speaker'
import Themes from '@/components/Themes'
import AnimatedSection from '@/components/AnimatedSection';
import BecomeASpeaker from './../components/BecomeASpeaker';
import SpeakerSessions from '../components/SpeakerSessions';
import { WavyBackgroundDemo } from '../components/LandingPage';
import Contact from '../components/ContactUs';
import BuyTicketsSection from '../components/BuyTicketsSection';
import Agenda from '../components/agenda';
import SocialSidebar from '../components/socialSidebar';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GenAI - Summit</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>

      <main className={styles.main}>
        <div>
          <SocialSidebar />
        </div>
        <div id="home">
          <AnimatedSection delay={0}>
            <WavyBackgroundDemo/>
          </AnimatedSection>
        </div>

        
        {/* <div id="about">
          <AnimatedSection delay={100}>
            <Agenda />
          </AnimatedSection>
        </div> */}

        <div id="about">
          <AnimatedSection delay={100}>
            <SpeakerSessions />
          </AnimatedSection>
        </div>

        <div id="BuyTicketSection">
          <AnimatedSection delay={100}>
            <BuyTicketsSection />
          </AnimatedSection>
        </div>

       {/* <div id="who-should-attend">
          <AnimatedSection delay={200}>
            <WhoShouldAttend />
          </AnimatedSection>
        </div>
        */}

        <div id="sessions">
          <AnimatedSection delay={200}>
            <Agenda />
          </AnimatedSection>
        </div>

        <div id="speakers">
          <AnimatedSection >
            <Speakers />
          </AnimatedSection>
        </div>

        <div id="BuyTicketSection">
          <AnimatedSection delay={400}>
            <BuyTicketsSection />
          </AnimatedSection>
        </div>

        <div id="become-speaker">
          <AnimatedSection delay={400}>
            <BecomeASpeaker/>
          </AnimatedSection>
        </div>

        <div id="themes">
          <AnimatedSection delay={500}>
            <Themes />
          </AnimatedSection>
        </div>

        <div id="committee">
          <AnimatedSection delay={600}>
            <AdvisoryCommittee />
          </AnimatedSection>
        </div>
        <div id="BuyTicketSection">
          <AnimatedSection delay={300}>
            <BuyTicketsSection />
          </AnimatedSection>
        </div>
        <div id="contact">
          <AnimatedSection delay={300}>
            <Contact />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}