import "./counter.css"
import { useState } from "react";

const Counter = () => {
    const [value,setValue]=useState(0);
    if(value < 0) { setValue(0)}
    
  return (
 <div className="counter">
    <span className="counter-title">Counter</span>
    <div className="counter-container">
        <button className="counter-button-inc" onClick={()=> setValue(value+1)}>+</button>
        <span className="counter-value">{value}</span>
    
        <button className="counter-button-dec" onClick={()=>setValue(value-1)}>-</button>
        </div>
 </div>
    )
}

export default Counter