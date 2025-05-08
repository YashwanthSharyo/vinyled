import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header/header";
import React from "react";
import Footer from "../../components/Footer/footer";
import HomePage from "../../Pages/Home/home";
import About from "../../Pages/About/about";
import Team from "../../Pages/Team/team";
import Contact from "../../Pages/Contact/contact";
import ShopProducts from "../../Pages/ShopProducts/shopproducts";
import PPF from "../../Pages/PPF/ppf";
import Ceramic from "../../Pages/Ceramic/ceramic";
import ColorChangeWrap from "../../Pages/ColorChange/colorChange";
import CustomDesign from "../../Pages/CustomDesign/customDesign";
import CustomProject from "../../Pages/CustomProject/customProject";
import Branding from "../../Pages/Branding/branding";
import WhatsApp from "../../components/WhatsApp/whatsApp";

function Navigation() {
    return (
        <Router basename="/vinyled/">
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ppf" element={<PPF />} />
                    <Route path="/color-change-wrap" element={<ColorChangeWrap />} />
                    <Route path="/ceramic" element={<Ceramic />} />
                    <Route path="/custom-design" element={<CustomDesign />} />
                    <Route path="/custom-project" element={<CustomProject />} />
                    <Route path="/branding" element={<Branding />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/shop-products" element={<ShopProducts />} />
                    <Route path="/whats-app" element={<WhatsApp />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default Navigation;
