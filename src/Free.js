import React from 'react'

function Free() {
    let arr = [1,2,3,4,5]
  return (
    <div>
        <h1>kjsabh</h1>
        {arr.map((e , index)=>(
            
            // console.log(e);
            <div key={index}>{e}</div>
            // <h2>{e}</h2>
            
            ))}
    </div>
  )
}

export default Free