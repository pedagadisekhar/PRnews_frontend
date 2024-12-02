import './App.css';
import Landing from "./components/LandingPage/landing.js";
import ProductUpload from './components/Products/UploadProduct.js'; 
import Articaldetails from './components/Articaldetails/artcal.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     
        <Router>
          <Routes> <Route exact path='/'element={<Landing />} />
          <Route path="/productupload" element={<ProductUpload />} />
          <Route exact path="/artcle/:id" element={< Articaldetails />} />





          
             
          </Routes>
        </Router>
   
    </div>
  );
}

export default App;
