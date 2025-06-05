import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import "./contact.css";

export default function Contact() {
  // State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    selectedOptions: [],
    carDetails: "",
    studio: "",
    request: "",
    date: "",
    time: "",
  });

  const [viewMode, setViewMode] = useState("form");

  // Handle input/text/selection changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle service dropdown change (to reset selectedOptions)
  const handleServiceChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      service: value,
      selectedOptions: [], // Reset checkboxes when service changes
    }));
  };

  // Handle checkbox selections
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedOptions = checked
        ? [...prev.selectedOptions, value]
        : prev.selectedOptions.filter((opt) => opt !== value);

      return {
        ...prev,
        selectedOptions: updatedOptions,
      };
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, date, time } = formData;
    const appointment = `${date} ${time}`;

    alert(`Appointment booked for ${name} on ${appointment}`);

    console.log({
      ...formData,
      appointment,
    });
  };
  const serviceOptions = {
    Detailing: ["Interior", "Exterior", "Engine Bay"],
    "Paint Protection": ["Ceramic Coating", "PPF", "Wax"],
    Wrapping: ["Gloss", "Matte", "Satin"],
  };

  return (
    <div className="contact-container">
      {/* Left Section: Map and Address */}
      <div className="map-address-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.2827153716025!2d77.63419702649115!3d13.026668873570573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17ee7674eadb%3A0x9eaf8a9f4430758!2sVinyled%20%7C%20PPF%20%2CWRAP%20%2CSUNFILM%20coating%20for%20car%20in%20Bengaluru!5e0!3m2!1sen!2sin!4v1747321796100!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="London Studio Location"
          ></iframe>
        </div>
        <div className="address-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Name:</strong> Vinyled Studio
          </p>
          <p>
            <strong>Address:</strong> No: 4, 88/6, Situated at Chelekere
            Village, Kalyan Nagar Post, Bangalore East, Karnataka 560043
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:info@vinyled.in">info@vinyled.in</a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919066431968">+91 90664 31968</a>
          </p>
        </div>
      </div>

      {/* Right Section: Contact Form and Appointment Booking */}
      <div className="contact-form-section">
        <h1>REQUEST A CALL BACK OR MAKE A BOOKING</h1>
        <p>Use the form below to request a call back or book an appointment:</p>
        <div className="toggle-buttons">
          <button
            type="button"
            className={viewMode === "form" ? "active" : ""}
            onClick={() => setViewMode("form")}
          >
            Request Call Back
          </button>
          <button
            type="button"
            className={viewMode === "calendly" ? "active" : ""}
            onClick={() => setViewMode("calendly")}
          >
            Book Appointment
          </button>
        </div>
        {viewMode === "form" ? (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name">NAME</label>
              <input
                name="name"
                placeholder="Enter your name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">EMAIL</label>
              <input
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">PHONE</label>
              <input
                name="phone"
                placeholder="Enter phone number"
                type="text"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* ✅ Vehicle Dropdown */}
            <div>
              <label htmlFor="vehicle">VEHICLE DETAILS</label>
              <select
  name="vehicle"
  required
  value={formData.vehicle}
  onChange={handleChange}
>
  <option value="">Select Vehicle</option>

  {/* --- Hatchbacks --- */}
  <option disabled>-- Hatchbacks --</option>
  <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
  <option value="Hyundai i20">Hyundai i20</option>
  <option value="Tata Tiago">Tata Tiago</option>
  <option value="Renault Kwid">Renault Kwid</option>
  <option value="Maruti Suzuki Baleno">Maruti Suzuki Baleno</option>

  {/* --- Sedans --- */}
  <option disabled>-- Sedans --</option>
  <option value="Honda City">Honda City</option>
  <option value="Hyundai Verna">Hyundai Verna</option>
  <option value="Skoda Slavia">Skoda Slavia</option>
  <option value="Volkswagen Virtus">Volkswagen Virtus</option>
  <option value="Toyota Yaris">Toyota Yaris</option>

  {/* --- SUVs --- */}
  <option disabled>-- SUVs --</option>
  <option value="Hyundai Creta">Hyundai Creta</option>
  <option value="Tata Nexon">Tata Nexon</option>
  <option value="Mahindra XUV700">Mahindra XUV700</option>
  <option value="Kia Seltos">Kia Seltos</option>
  <option value="MG Hector">MG Hector</option>
  <option value="Toyota Fortuner">Toyota Fortuner</option>

  {/* --- Pickup & Vans --- */}
  <option disabled>-- Pickup / Vans --</option>
  <option value="Mahindra Bolero Pickup">Mahindra Bolero Pickup</option>
  <option value="Tata Xenon">Tata Xenon</option>
  <option value="Toyota Hilux">Toyota Hilux</option>
  <option value="Maruti Eeco">Maruti Eeco</option>

  {/* --- Bikes --- */}
  <option disabled>-- Bikes --</option>
  <option value="Royal Enfield Classic 350">Royal Enfield Classic 350</option>
  <option value="Bajaj Pulsar NS200">Bajaj Pulsar NS200</option>
  <option value="TVS Apache RTR 160 4V">TVS Apache RTR 160 4V</option>
  <option value="Yamaha MT-15">Yamaha MT-15</option>
  <option value="KTM Duke 250">KTM Duke 250</option>
  <option value="Honda CB350 RS">Honda CB350 RS</option>
  <option value="Suzuki Gixxer 250">Suzuki Gixxer 250</option>

  {/* --- Scooters --- */}
  <option disabled>-- Scooters --</option>
  <option value="Honda Activa 6G">Honda Activa 6G</option>
  <option value="TVS Ntorq 125">TVS Ntorq 125</option>
  <option value="Suzuki Access 125">Suzuki Access 125</option>
  <option value="Yamaha Ray ZR">Yamaha Ray ZR</option>

  {/* --- Electric Vehicles --- */}
  <option disabled>-- EVs --</option>
  <option value="Tata Nexon EV">Tata Nexon EV</option>
  <option value="MG ZS EV">MG ZS EV</option>
  <option value="Kia EV6">Kia EV6</option>
  <option value="Ather 450X">Ather 450X</option>
  <option value="Ola S1 Pro">Ola S1 Pro</option>
  <option value="TVS iQube">TVS iQube</option>

  {/* --- Luxury Vehicles --- */}
  <option disabled>-- Luxury / Premium --</option>
  <option value="Mercedes-Benz GLC">Mercedes-Benz GLC</option>
  <option value="BMW X5">BMW X5</option>
  <option value="Audi A6">Audi A6</option>
  <option value="Land Rover Defender">Land Rover Defender</option>
  <option value="Harley Davidson Iron 883">Harley Davidson Iron 883</option>
</select>

            </div>

            {/* ✅ Service Dropdown */}
            <div>
              <label htmlFor="service">SERVICE FIELD</label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleServiceChange}
              >
                <option value="">Select Service</option>
                <option value="Detailing">Detailing</option>
                <option value="Paint Protection">Paint Protection</option>
                <option value="Wrapping">Wrapping</option>
              </select>
            </div>

            {/* ✅ Dependent Checkboxes */}
            {formData.service && (
              <div>
                <label>SELECT OPTIONS</label>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {serviceOptions[formData.service]?.map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        name="selectedOptions"
                        value={option}
                        checked={formData.selectedOptions.includes(option)}
                        onChange={handleCheckboxChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="request">REQUEST</label>
              <textarea
                name="request"
                placeholder="Enter your message"
                value={formData.request}
                onChange={handleChange}
              />
            </div>

            <div className="submit-container">
              <button type="submit">SEND</button>
            </div>
          </form>
        ) : (
          <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>
              Book a 30-Minute Appointment
            </h2>
            <InlineWidget
              url="https://calendly.com/yashwanth-sharyo/30min"
              styles={{ height: "600px", width: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
