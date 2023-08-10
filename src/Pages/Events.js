import React from 'react'
import { Link } from 'react-router-dom'
import Event from '../Components/Event'


export default function Events() {
  return (
    <div style={{width:'100%',height:'100vh'}}>
     
     
      <div style={{  backgroundColor:'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}><h3 style={{ marginLeft: '9%', fontWeight: 'bold', fontSize: '1.7em', fontFamily: 'monospace', color: 'white' }}>HOME</h3></Link>

  <div style={{ display: 'flex', flexDirection: 'row', width: '45%', justifyContent: 'space-between', marginRight: '2%', textDecoration: 'none' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/magazine'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>MAGAZINES</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/events'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>EVENTS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/academic'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>ACADEMIC_BREACKTHROUGHS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/faculty'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>FACULTIES</h3></Link>
  </div>
</div>



        
        <div style={{ height: '100%', backgroundAttachment: 'fixed', backgroundImage: "url('https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691571301/WhatsApp_Image_2023-08-09_at_2.21.54_PM_dubjer.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{width:'100vw',backgroundColor:'transparent',justifyContent:'center',alignItems:'center',display:'flex',color:'white',flexDirection:'column'}}>

            <h1 style={{margin:0,fontSize:'2.2em'}}>2023 Events</h1>
            <span style={{fontSize:'1.2em'}}>Below Contents are About Completed Events</span>

        </div>
                <Event url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691626981/expo_dglaqk.jpg' name='Project Expo' date='SEPT - 15'/>
                <Event url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691627571/psychore_axa9er.jpg' name='Psy-Chore' date='MARCH - 15'/>
                
        </div>

        
       


    </div>
  )
}

