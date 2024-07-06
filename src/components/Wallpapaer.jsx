import React from 'react'

export default function Wallpapaer() {
  return (
    <div>
      <div className="zoma">
    <div className="nav">
    <h2>login</h2>
    <button><h2>Create Account</h2></button>
     </div>
<div className="body">
    <div className="circle">
        <div> <h1>e!</h1></div>
       
    </div>
    <div className="para">
        <h1>find the best restaurant,cafe and bars </h1>
    </div>
</div>
<div className="landf">

      <div className="loc">
         <i className="fi fi-sr-marker"></i>
         <input list="loca" placeholder="Location"/>
          <datalist id="loca">
        <selected>
            <option>bengaluru</option>
            <option>salem</option>
            <option>chennai</option>
          </selected>
           </datalist>
      </div>

       <div className="food">
        <i className="fi fi-bs-search ser"></i>
        <input className="di" type="text" placeholder="Search for favourite"/>
       </div>
</div>
  </div>

 
    </div>
  )
}
