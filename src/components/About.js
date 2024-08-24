
import React, { useEffect, useState } from 'react';
export const About = () => {

// it is show console + user also
  const [count,setcount]=useState(0)
  // let count=0
  function increament(){
    // count=count+1
    setcount(count+1)
    console.log('count',count);
    
  }
  // It is show only console
  // const [count,setcount]=useState(0)
  // let count1=0
  // function increament(){
  //   count1=count1+1
  //   // setcount(count+1)
  //   console.log('count',count);
    
  // }
  return (
    <>
     <div className='container'>
      <div className='row'>
        <div className='col-lg-10  text-center mt-3'>

       
      <h5> Increase value {count}</h5>
    <button className='btn-warning' type="button"
              onClick={increament}>Click here</button>
      </div>
      </div>
              </div>
    </>
   
    
  )
}
