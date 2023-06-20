
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/services" element={<Services/>} />

      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
