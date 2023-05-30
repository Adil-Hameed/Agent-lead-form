import React from 'react'
import PreNavbar from "../components/common/PreNavbar"
import Navbar from '../components/common/Navbar'

import FAQ from '../components/common/FAQ'
import Footer from '../components/common/Footer'
import Header from '../components/step1/Header'
import Email from '../components/step1/Email'


export default function Step1() {
  return (
    <>
      <PreNavbar />
      <Navbar />
      <Header/>
      <Email/>
      <FAQ />
      <Footer />
    </>
  )
}
