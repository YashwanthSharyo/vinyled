import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header/header";
import React from "react";
import Footer from "../../components/Footer/footer";
import HomePage from "../../Pages/Home/home";
import About from "../../Pages/About/about";
import Contact from "../../Pages/Contact/contact";
import ShopProducts from "../../Pages/ShopProducts/shopproducts";
import CustomProject from "../../Pages/CustomProject/customProject";
import Branding from "../../Pages/Branding/branding";
import WhatsApp from "../../components/WhatsApp/whatsApp";
import Process from "../../Pages/Process/process";
import Team from "../../Pages/Team/team";
import Personolization from "../../Pages/Personolization/personolization";
import Protect from "../../Pages/Protect/protect";
import Enhance from "../../Pages/Enhance/enhance";
import Maintain from "../../Pages/Maintain/maintain";
import Client from "../../Pages/Clients/clients";

function Navigation() {
    return (
        <Router basename="/vinyled/">
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/enhance" element={<Enhance />} />
                    <Route path="/maintain" element={<Maintain />} />
                    <Route path="/protect" element={<Protect />} />
                    <Route path="/personolization" element={<Personolization />} />
                    <Route path="/custom-project" element={<CustomProject />} />
                    <Route path="/protect" element={<Protect />} />
                    <Route path="/branding" element={<Branding />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/our-process" element={<Process />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/our-clients" element={<Client />} />
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
