import React from 'react'

export default function Prof({name,url,prof}) {
  return (
    <div className="faculty-card" style={{display:'flex',flexDirection:'column',width:'20%',marginLeft:'2%'}}>
      <div className="staff-image-container">
        <img src={url}  className="faculty-image" />
        <h2 className="faculty-name">{prof}</h2>
      </div>
      <div style={{margin:0,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h3 style={{margin:3}}>{name}</h3>
      </div>




    </div>
  )
}
