import React, { useRef, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
  });
  const getInTouchRef = useRef(null);

  // Function to handle the button click and scroll
  const scrollToGetInTouch = () => {
    getInTouchRef.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Scroll to the top of the section
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMailtoLink = () => {
    return `mailto:venagantiyashwanth@gmail.com
      ?subject=Contact Form
      &body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AReferral: ${formData.referral}`.replace(
      /\s+/g,
      ""
    );
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const serviceLinks = {
  1: "/enhance",
  2: "/protect",
  3: "/maintain",
  4: "/personolization",
  5: "/custom-project",
  6: "/branding",
};


  const handleClick = (index) => {
    setTimeout(() => {
      navigate(serviceLinks[index]);
    }, 500);
  };

  return (
    <div className="home-page">
      <section className="section black">
        <div className="black-content">
          <div className="text">
            <h1>Transform Your Ride with VINYLE'D</h1>
            <p>
              Revamp your vehicle with VINYLE'Ds expert car wraps, premium paint
              protection films, and bespoke graphics. Our Bangalore team has
              been delivering excellence for decades. Trust us to transform your
              car or bike with top-tier materials and unmatched craftsmanship.
            </p>
            <button className="action-btn" onClick={scrollToGetInTouch}>
              Get started
            </button>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-container">
          <h2 className="service-title">Services</h2>
          <div className="service-grid">
            {/* Image 1 - PPF and Wraps */}
            <div
              className="service-item"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(1)}
            >
              <img
                src="./Images/home_ppf.JPG"
                alt="Service 1"
                className="service-image"
              />
              <div className="service-overlay" />
              <div
                className={`service-description ${
                  hovered === 1 ? "visible" : ""
                }`}
              >
                Paint Protection Film (PPF) shields vehicles from scratches,
                chips, and UV damage, preserving paint and resale value.
              </div>
              <div className="service-label">PPF</div>
            </div>

            {/* Image 2 - Ceramic / Graphene Coating */}
            <div
              className="service-item"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(2)}
            >
              <img
                src="./Images/home_ceramic_coating.JPG"
                alt="Service 2"
                className="service-image"
              />
              <div className="service-overlay" />
              <div
                className={`service-description ${
                  hovered === 2 ? "visible" : ""
                }`}
              >
                Ceramic and graphene coatings create a durable, hydrophobic
                shield on a vehicle's surface, protecting against UV rays,
                chemical stains, and minor scratches.
              </div>
              <div className="service-label">Ceramic / Graphene Coating</div>
            </div>

            {/* Image 3 - Custom Design */}
            <div
              className="service-item"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(3)}
            >
              <img
                src="./Images/home_custom_design.JPG"
                alt="Service 3"
                className="service-image"
              />

              <div className="service-overlay" />
              <div
                className={`service-description ${
                  hovered === 3 ? "visible" : ""
                }`}
              >
                Custom design for vehicles offers bespoke vinyl wraps, decals,
                or paint protection film patterns tailored to individual style
                preferences.
              </div>
              <div className="service-label">Custom Design</div>
            </div>

            {/* Image 4 - Branding */}
            <div
              className="service-item"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(4)}
            >
              <img
                src="./Images/home_branding.JPG"
                alt="Service 4"
                className="service-image"
              />
              <div className="service-overlay" />
              <div
                className={`service-description ${
                  hovered === 4 ? "visible" : ""
                }`}
              >
                Vehicle branding transforms cars, trucks, or fleets into mobile
                advertisements with custom vinyl wraps, decals, or logos
                tailored to your business identity.
              </div>
              <div className="service-label">Branding</div>
            </div>

            {/* Image 5 - Design Project (Duplicate of PPF and Wraps) */}
            <div
              className="service-item"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(5)}
            >
              <img
                src="./Images/home_custom_project.JPG"
                alt="Service 5"
                className="service-image"
              />
              <div className="service-overlay" />
              <div
                className={`service-description ${
                  hovered === 5 ? "visible" : ""
                }`}
              >
                Transform your ideas into stunning designs. Our team creates
                unique visuals tailored to your needs, ensuring a perfect fit
                for your project, whether it’s branding, marketing, or something
                else.
              </div>
              <div className="service-label">Custom Project</div>
            </div>

            {/* Image 6 - Wraps (Duplicate of Ceramic / Graphene Coating) */}
            <div
              className="service-item"
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(6)}
            >
              <img
                src="./Images/wrap.jpg"
                alt="Service 6"
                className="service-image"
              />
              <div className="service-overlay" />
              <div
                className={`service-description ${
                  hovered === 6 ? "visible" : ""
                }`}
              >
                Transform the look and feel of your vehicle with high-quality
                wraps. Whether you’re looking for a sleek, modern design or a
                bold, eye-catching graphic, our custom wraps are the perfect
                solution.
              </div>
              <div className="service-label">Wraps</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="green-bottom">
          <div className="green-bottom-left">
            <div className="left-content">
              <h2 className="left-title">About Us</h2>
              <p className="left-text">
                Automotive Restoration Service is our go-to auto styling shop in
                Bangalore, offering professional services for both cars and
                bikes. We specialize in colour change wraps, paint protection
                film (PPF), detailing, and chrome delete. Located in Chelekere,
                Kalyan Nagar, we take pride in delivering high-quality finishes
                with expert precision and care. Whether it’s for protection or
                style, we help your vehicle stand out on the road.
              </p>
              <div className="button-container">
                <button
                  className="left-button"
                  onClick={() => navigate("/about")}
                >
                  Know More
                </button>
              </div>
              <div className="left-image-container">
                <img
                  src="Images/carpart5.svg"
                  alt="Car Part"
                  className="left-image"
                />
              </div>
            </div>
          </div>

          <div className="green-bottom-right">
            <div className="right-content-centered">
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtext">
                Everything you need to know about VINYLE'D. Can’t find the
                answer you’re looking for?
              </p>
              <p className="faq-contact">
                Feel free to{" "}
                <Link to="/contact-us" className="contact-link">
                contact us
                </Link>
              </p>

              <button className="faq-button">FAQ's</button>
            </div>
          </div>
        </div>

        <div className="section-container">
          {/* Left Column - Contact Form */}
          <div className="form-column" ref={getInTouchRef}>
            <div className="form-content">
              <h2 className="form-heading">Get in Touch</h2>

              <input
                type="text"
                placeholder="Name"
                className="form-input"
                name="name"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                name="email"
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
                name="phone"
                onChange={handleChange}
              />

              <select
                className="form-select"
                name="referral"
                onChange={handleChange}
              >
                <option value="">How did you find us?</option>
                <option value="Google">Google</option>
                <option value="Friend">Friend</option>
                <option value="Social Media">Social Media</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>

              <a
                href={generateMailtoLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="submit-btn">Submit</button>
              </a>

              <div className="contact-details">
                <div className="contact-box">
                  <p className="contact-label">&#9742; PHONE</p>
                  <p className="contact-text"><a href="tel:+919066431968">9066431968</a></p>
                </div>
                <div className="contact-box">
                  <p className="contact-label">&#9993; EMAIL</p>
                  <p className="contact-text"><a href="mailto:info@vinyled.in">info@vinyled.in</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Location Info */}
          <div className="location-column">
            <div className="location-content">
              <h2 className="location-heading">Location</h2>

              <div className="location-box">
                <p className="location-item">
                  📞<span><a href="tel:+919066431968">9066431968</a></span>
                </p>
                <p className="location-item">
                  📧<span><a href="mailto:info@vinyled.in">info@vinyled.in</a></span>
                </p>
                <p className="location-item">
                  📍
                  <span>
                    No: 4, 88/6, Situated at Chelekere Village, Kalyan Nagar
                    Post, Bangalore East, Karnataka 560043
                  </span>
                </p>
              </div>

              <div className=".location-map">
                <div className="map-wrapper">
                  <iframe
                    title="Vinyled Location"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.2827153716025!2d77.63419702649115!3d13.026668873570573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17ee7674eadb%3A0x9eaf8a9f4430758!2sVinyled%20%7C%20PPF%20%2CWRAP%20%2CSUNFILM%20coating%20for%20car%20in%20Bengaluru!5e0!3m2!1sen!2sin!4v1747321796100!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0, marginTop: "1rem" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
