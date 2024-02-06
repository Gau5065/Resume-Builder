import React, { useState } from 'react'

const Resume1 = () => {
    const [demo, setdemo] = useState('');
    const [Height1, setHeight] = useState();
    const [Width1, setWidth] = useState();
   
    const getDetailsOfDiv = () =>{
        if(demo == ""){
            alert("please Select Somthing")
        }else{
            var height = document.getElementsByClassName('height')[0].value;
            var width = document.getElementsByClassName('width')[0].value;
            var r1M1B1 = document.getElementsByClassName(demo)[0];
    
            r1M1B1.style.width = width + "px";
            r1M1B1.style.height = height + "px";
        }
    }

    const getDivDetails = (a) =>{
        setdemo('');
        console.log(a.target.className);
        console.log(a.target.clientWidth);
        console.log(a.target.clientHeight);
        setdemo(a.target.className);
        setHeight(a.target.clientHeight);
        setWidth(a.target.clientWidth);
        document.getElementsByClassName('height')[0].value = a.target.clientHeight;
        document.getElementsByClassName('width')[0].value = a.target.clientWidth;
    }
  return (
    <>
    <div className='resume1Mainbox1'>
        <input type='number' placeholder='Enter Height' className='height'/>
        <input type='number' placeholder='Enter Width' className='width'/>
        <button onClick={getDetailsOfDiv}>CLICK</button>
        <div className='r1M1B1' onClick={getDivDetails}>
            <div className="gaurav" onClick={getDivDetails}></div>
        </div>
    </div>
    </>
  )
}

export default Resume1
