import React from 'react'
import AboutSection from '../layout/AboutSection'
import BuyTicketSection from '../layout/BuyTicketSection'
import ContactSection from '../layout/ContactSection'
import FaqSection from '../layout/FaqSection'
import HeroSection from '../layout/HeroSection'
import HotelsSection from '../layout/HotelsSection'
import ScheduleSection from '../layout/ScheduleSection'
import SpeakersSection from '../layout/SpeakersSection'
import SubscribeSection from '../layout/SubscribeSection'
import SupportersSection from '../layout/SupportersSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <main id='main'>
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <HotelsSection />
        <SupportersSection />
        <FaqSection />
        <SubscribeSection />
        <BuyTicketSection />
        <ContactSection />
      </main>
    </>
  )
}

export default HomePage
