import {Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Details from "./pages/Detailslogement"
import Error from "./pages/Error"
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";



function App() {
  return (
    <div className="App">
      <Navigation/>      
      <Routes>
          <Route path ="" element={<Home />} />
          <Route path ="About" element={<About />} />
          <Route path ="Detailslogement/:productid" element={<Details />} />
          <Route path ="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
