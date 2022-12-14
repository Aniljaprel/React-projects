import React from 'react'

 function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show"  role="alert">
    A simple alert <a href="#" class="alert-link">example link</a>.click
  
        <strong>{props.Alert}</strong>
  <button type="button" className="btn close" data-bs-dismiss="alert " aria-label="close" >Show live alert</button>
     </div>
  )
}
export default Alert;

