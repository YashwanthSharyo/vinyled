import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Hello from "../../Pages/Login/login";
import Header from "../../components/Header/header";
import React from "react";
import Footer from "../../components/Footer/footer";
import HomePage from "../../Pages/Home/home";
import LoginPage from "../../Pages/Login/login";
import Enhance from "../../Pages/Enhance/enhance";
import Customise from "../../Pages/Customise/customise";
import Maintain from "../../Pages/Maintain/maintain";
import Protect from "../../Pages/Protect/protect";
import About from "../../Pages/About/about";
import Team from "../../Pages/Team/team";
import Contact from "../../Pages/Contact/contact";
import ShopProducts from "../../Pages/ShopProducts/shopproducts";

function Navigation() {
    return (
        <Router>
            <div >
                <Header />
                <Routes>
                    <Route path="/hello" element={<Hello />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/enhance" element={<Enhance />} />
                    <Route path="/customise" element={<Customise />} />    
                    <Route path="/maintain" element={<Maintain />} />
                    <Route path="/protect" element={<Protect />} />     
                    <Route path="/about" element={<About />} />  
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact-us" element={<Contact />} />  
                    <Route path="/shop-products" element={<ShopProducts />} />       
                </Routes>
                <Footer />
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />                    
                </Routes>
            </div>
            
            
        </Router>
    );
}

export default Navigation;