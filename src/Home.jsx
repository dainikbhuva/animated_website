import React from 'react'
import web from '../src/images/img01.png';
import Common from './Common';

function Home() {
  return (
    <>
      <Common name='Grow your bussness with' imgsrc={web} visit='/service' btname='Get started'/>
    </>
  )
}

export default Home;
