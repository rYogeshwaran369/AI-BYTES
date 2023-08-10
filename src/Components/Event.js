import React from 'react'

export default function Event({url,name,date}) {
  return (
    <div style={{width:'27%',height:'70%',backgroundColor:'white',borderRadius:'2%',marginTop:'3%'}}>

        <div style={{margin:'2%',height:'80%',backgroundColor:'green',borderRadius:'4%',backgroundImage:`url('${url}')`,display:'flex',backgroundSize:'cover'}}>
        </div>

        <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>

                <h3 style={{marginBottom:0,letterSpacing:4,fontSize:'1em'}}>{name}</h3>
                <span style={{color:'gray',letterSpacing:1}}>{date}</span>
                <span>MCA BLOCK </span>
        </div>
    </div>
  )
}
