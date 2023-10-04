import React from 'react'
import web from '../src/images/business.jpg';
import Common from './Common'

function About() {
  return (
    <>
      <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname='Contact Now' />
    </>
  )
}

export default About
