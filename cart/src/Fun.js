import React, { useEffect } from 'react'

const Fun = () => {
 const handleclick=()=>{
  let x=document.getElementById('fn1');
  console.log(x);
 }
 
  return (
    <> <div id="fn1">function</div>
    <button onClick={handleclick}>add</button>
    </>
   
   
  )
}

export default Fun