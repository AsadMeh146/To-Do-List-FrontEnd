import "../src/App.css";
import { Route,Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Contact from "./components/Contact/Contact";
import ToDo from "./components/ToDo/ToDo";
import { useState } from "react";
import AboutUs from "./components/About/About";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogIn , setIsLogIn] = useState(true);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLogIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLogIn(true);
  };

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} isLogIn={isLogIn} onLogout={handleLogout}/>
    <div className="container">
    <Routes>
      
      <Route path="/" element={<SignIn onLogin={handleLogin}/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/home" element={<ToDo/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>



    </Routes>
    </div>
    <Footer></Footer>
    
    </>
  );
}

export default App;
