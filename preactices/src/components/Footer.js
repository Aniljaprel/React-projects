import React from "react";


export const Footer = () => {
  let footerstyle={
    position: "absolute",
    top:"150vh",
    width:"100%",
  };
  return (
    <footer className="bg-danger text-light py" style={footerstyle} >
      <p className="text-center">copyright &copy; mytodoslist.com</p>
      
    </footer>
  );
};
