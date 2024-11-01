import React from 'react'
import Maincarousal from '../../components/Homecarousal/maincarousal'
import Homecardcarousal from '../../components/Homesectioncard/homecardcarousal'
import men_kurta from '../../../Data/Men_kurta';
import sari from '../../../Data/sari';
import Footer from '../../components/footer/footer';

export default function Home() {
  return (
    <div>
      <Maincarousal/>
      <div className=" space-y-10 py-20 flex flex-col justify-center">
        <Homecardcarousal data={men_kurta} sectionName={"Girls Dress"}/>
        <Homecardcarousal data={sari} sectionName={"Girls Sari"}/>
      
      </div>
      <Footer/>
    </div>
  )
}
