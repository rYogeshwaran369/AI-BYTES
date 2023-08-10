import React from 'react'
import '../Css/Faculties.css'

const FacultyCard = ({ imageUrl, name, description }) => {
    return (
  
      <div className="faculty-card" style={{display:'flex',flexDirection:'row',width:'80%',marginLeft:'10%'}}>
       
        <div className="faculty-image-container" >
          <img src='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691596852/IMG20230719104823_yj7n2s.jpg' alt={name} className="faculty-image" style={{height:'23em',width:'100%'}} />
          <h2  className="faculty-name" >Mrs.Venkata Lakshmi,Ph.D.,</h2>
        </div>
        <div style={{marginLeft:'4%'}} className="faculty-details">
          <h1>Head Of The Department</h1>
  <h3>Special thanks to my dedicated students whose unwavering enthusiasm and diligence brighten each day. Your thirst for knowledge fuels the joy of teaching. Grateful for your remarkable journey.</h3>
        </div>
  
  
      </div>
      
    );
  };
  
  export default FacultyCard;