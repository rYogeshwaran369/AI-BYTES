import React from 'react';
import '../Css/AchievementsPage.css'
import { Link } from 'react-router-dom';

const AchievementsSegment = ({ title, content }) => {
  return (
    <div className="achievements-segment" style={{display:'flex',flexDirection:'column',width:'100%'}}>
      <h2 style={{textAlign:'center',fontSize:40,color:'white'}}>{title}</h2>
      <div style={{display:'flex',flexDirection:'row'}}> 
      {content.map((item, index) => (
        <div key={index} className="item" style={{marginLeft:'2%'}}>
          <h2 className='text'><Link style={{textDecoration:'none',color:'black'}} to='https://github.com/rYogeshwaran369/AI-BYTES'>{item.head}</Link></h2>
          <img className='imge' src={item.image} alt={item.title} style={{width:'100%',height:'30vh'}}/>
          {/* <p className='des'>{item.description}</p> */}
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default AchievementsSegment;