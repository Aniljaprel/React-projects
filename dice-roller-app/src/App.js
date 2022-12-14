
import './index.css';
import { useState } from 'react';


const App = () =>{
  const [diceNumber, setDiceNumber]= useState(1)
  const [diceNumber2, setDiceNumber2]= useState(2)
const refrehdice=()=>{
  const randno= Math.floor(Math.random()*6)+1
  setDiceNumber(randno)
  const randno2= Math.floor(Math.random()*6)+1
 
  setDiceNumber2(randno2)
}
  return (
    <div >
    <center>
      <img width={200} height={200} src={require(`./assets/${diceNumber}.png`)}></img>
      <img width={200} height={200} src={require(`./assets/${diceNumber2}.png`)}></img>

      <br></br>
      <button  onClick={()=>refrehdice()} className='button '>Roll</button>
      
      </center>
    
    </div>
  );
}

export default App;
