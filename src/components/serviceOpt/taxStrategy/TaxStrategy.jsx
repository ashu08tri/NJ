import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";

import React from 'react'

function TaxStrategy() {
  return (
    <>
    <Header image={'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65154e435996ffa377d17a61_pexels-gustavo-fring-3873864.jpg'} under={'Tax Optimization'} title={'Tax Compliance'}
    desc={'Our Tax Compliance service ensures you meet all federal and local tax obligations, reducing the risk of penalties and helping you maintain a clean financial slate.'}
    />
    <SecondSection image={'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05ee616124d1aa39a6bd_note-thanun-LiarWHLHjx0-unsplash.webp'}/>
    <ThirdSection />
    </>
  )
}

export default TaxStrategy;