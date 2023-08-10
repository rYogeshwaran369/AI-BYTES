import React from 'react'
import FacultyCard from '../Components/Hod'
import Prof from '../Components/Prof'
import { Link } from 'react-router-dom'


export default function Faculty() {
  return (
    <div>

<div style={{  marginBottom:'3%',backgroundColor:'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}><h3 style={{ marginLeft: '9%', fontWeight: 'bold', fontSize: '1.7em', fontFamily: 'monospace', color: 'white' }}>HOME</h3></Link>

  <div style={{ display: 'flex', flexDirection: 'row', width: '45%', justifyContent: 'space-between', marginRight: '2%', textDecoration: 'none' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/magazine'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>MAGAZINES</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/events'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>EVENTS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/academic'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>ACADEMIC_BREACKTHROUGHS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/faculty'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>FACULTIES</h3></Link>
  </div>
</div>
         <FacultyCard/>
  

  <div style={{display:'flex',flexDirection:'row',marginTop:'5%',justifyContent:'space-evenly'}}>
        <Prof name='Dr.T.Sujatha,Ph.D' prof='Associate Professor' url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691599872/IMG20230718122950_yuph8a.jpg'/>
        <Prof name='Mr.A.Wasim Raja, M.E' prof='Assistant Professor' url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691602113/IMG20230720165131_01_jizbj7.jpg'/>
        <Prof name='Mr.S.Senthi Kumar, M.E' prof='Assistant Professor' url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691602442/IMG20230718141717_psce8t.jpg'/>
  </div>

  <div style={{display:'flex',flexDirection:'row',marginTop:'5%',justifyContent:'space-evenly'}}>
        <Prof name='Mr.K.Balaji, M.E.,(Ph.D)' prof='Assistant Professor' url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691602295/IMG20230718143239_tacwfz.jpg'/>
        <Prof name='Mr.G.S.Pugalendhi, M.E' prof='Assistant Professor' url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691629662/WhatsApp_Image_2023-08-10_at_6.37.03_AM_k8zg8t.jpg'/>
        <Prof name='Mr.B.Kiruba, M.E.,(Ph.D)' prof='Assistant Professor' url='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691602562/IMG20230717103604_yllyoh.jpg'/>
  </div>

   

    </div>
  )
}
