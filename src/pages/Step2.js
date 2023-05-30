import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/step2/Hero'
import SubmitProperty from '../components/step2/SubmitProperty.js'
import HowDoesSell from '../components/step2/HowDoesSell'

export default function Step2() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Hero />
            <SubmitProperty />
            <HowDoesSell/>
            <Footer />
        </>
    )
}
