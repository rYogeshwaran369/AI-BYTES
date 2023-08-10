import React from 'react'
import { Link } from 'react-router-dom'
import AchievementsPage from '../Components/Projects'


export default function Academic_breackthroughs() {
  return (
    <div>
        <div style={{  backgroundColor:'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}><h3 style={{ marginLeft: '9%', fontWeight: 'bold', fontSize: '1.7em', fontFamily: 'monospace', color: 'white' }}>HOME</h3></Link>

  <div style={{ display: 'flex', flexDirection: 'row', width: '45%', justifyContent: 'space-between', marginRight: '2%', textDecoration: 'none' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/magazine'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>MAGAZINES</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/events'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>EVENTS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/academic'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>ACADEMIC_BREAKTHROUGHS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/faculty'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>FACULTIES</h3></Link>
  </div>
</div>

     {/* Magazines Section */}
     <div style={{ marginTop: '-2%', height: '90vh', color: 'white', backgroundColor: 'black', width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        
     <div style={{ transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <img src="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691605560/image-removebg-preview__16_-transformed_kz9wld.png" alt="Magazine" />
        </div>
        
        <div  style={{ width: '50%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',  transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <h2 style={{ fontSize: '5em' }}>Our Initiatives</h2>
          <p style={{wordSpacing:2}}>
          Welcome to our vibrant online gallery of student excellence and creativity! Join us in celebrating the academic milestones and artistic brilliance that set our students apart.  This meticulously crafted section is a celebration of our students' remarkable academic achievements and boundless creative talents. 
This is not just a platform; it's a testament to the heights we can reach when we empower young minds to explore, create, and excel.
             </p>
        </div>
      
      </div>


      <AchievementsPage/>
    </div>
  )
}
