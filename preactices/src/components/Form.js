import React,{useState} from 'react'



export default function Form(props) {
  const handleclick=()=>{
    // console.log("uppercaseletter" +text);
    let newtext=text.toUpperCase();
    settext(newtext);
  }
  const handleclear=()=>{
    let newtext='';
    settext(newtext);
  }
  const handleonchange=(event)=>{
    
    settext(event.target.value);
  }

  const [text, settext]= useState('enter text here');
  return (
<>
 
<div className="container">
<form>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="emailinput"  className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1" />
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<div className="mb-3 form-check">
  <textarea className="" id="mybox"  value={text} onChange={handleonchange} cols="40" rows="10"></textarea>
</div>
<button type="submit" className="btn btn-primary mx-3" onClick={handleclick}>Submit</button>
<button type="submit" className="btn btn-primary mx-3" onClick={handleclear}>clear</button>
</form>
</div>
<div className="conatiner my-2">
  <h1>your text summary</h1>
  <p> {text.split(" ").length} words and {text.length} characters</p>
</div>
</>
  )
}
