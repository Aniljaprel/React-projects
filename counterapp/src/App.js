import React, {useState} from "react";
import './style.css';
const App =() =>{
    const [number, setnumber]=useState(0);
    return <div>
        <h1>{number}</h1>
    <button className="button" onClick={()=> setnumber(number+1)}>Add</button>
    <button className="button" onClick={()=> setnumber(number-1)}>less</button>
    <button className="button" onClick={()=> setnumber(0)}>Reset</button>

    </div>
}
export default App;