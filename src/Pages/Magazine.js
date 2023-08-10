import React from 'react'
import { Link } from 'react-router-dom'
import MagazineCard from '../Components/Magazine'


export default function Magazine() {
  return (
    <div style={{width:'100vw',height:'100vh'}}>

<div style={{  backgroundColor:'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}><h3 style={{ marginLeft: '9%', fontWeight: 'bold', fontSize: '1.7em', fontFamily: 'monospace', color: 'white' }}>HOME</h3></Link>

  <div style={{ display: 'flex', flexDirection: 'row', width: '45%', justifyContent: 'space-between', marginRight: '2%', textDecoration: 'none' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/magazine'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>MAGAZINES</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/events'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>EVENTS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/academic'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>ACADEMIC_BREACKTHROUGHS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/faculty'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>FACULTIES</h3></Link>
  </div>
</div>


       {/*Faculties Page */}
       <div style={{ marginTop: '-2%', height: '90vh', color: 'white', backgroundColor: 'black', width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <div style={{marginLeft:'10%',width:'30%', transition: 'opacity 6s ease-in-out, transform 6s ease-in-out',justifyContent:'center',alignItems:'center',display:'flex'}}>
    <img
      src="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691590067/cover_fffqo1.png"
      style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}
      alt="Magazine"
    />
  </div>
  
  <div style={{ width: '50%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',  transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
    <h2 style={{ fontSize: '5em', textAlign: 'center' }}>AI BYTES</h2>
    <p style={{ wordSpacing: 1 }}>
      qwertyuioasdfghwertThe code you've provided seems to be correctly set up with a fixed navigation bar at the top of the page, a centered title with fade-in effects, and a content section below. Is there anything specific you're looking to achieve or modify in this code? If you have any further questions or adjustments, please let me know!
    </p>

  </div>
</div>



    <div style={{textAlign:'center'}}>
        <h1>Our Magazines</h1>
    </div>

    <div style={{paddingTop:'3%',width:'100vw',height:'100%',flexWrap:'wrap',backgroundColor:'white',justifyContent:'space-evenly',display:'flex'}}>

        <MagazineCard/>
        <MagazineCard/>
        <MagazineCard/>

    </div>
    </div>
  )
}
