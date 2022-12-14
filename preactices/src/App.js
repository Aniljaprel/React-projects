import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toodos } from './components/Toodos';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import contact from './components/contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>

      <Header />
      <Toodos />
     {
     /* <Form heading="Enter your info..."/> */}
     

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<index />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<contact />} />

          {/* <Route index element={<Home />} /> */}
          
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      
      </Routes>
    </BrowserRouter>
  
  
     <Alert alert={alert}/>
      <Footer />
    </>
  );
}

export default App;
