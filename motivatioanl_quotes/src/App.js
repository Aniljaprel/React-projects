import React ,{useState} from 'react';
import Itemq from './Itemq';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

 const App = () => {

    const [items, setItems]= useState([])
    const  fetchdata=()=>{
      return fetch("https://jsonguide.technologychannel.org/quotes.json")
     .then((Response)=>Response.json())
      .then((data)=>{
setItems(data)
      })
    }
  return (
    <div>
       
      <button onClick={()=>fetchdata()}>Quotes here</button>
       
        <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      {items.map((item)=> <Itemq author={item.from} text={item.text}/> )}
      </Stack>
    </Box>
    </div>
  )
  }
  export default App;