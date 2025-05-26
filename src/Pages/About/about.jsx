import React, { useState } from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  const [openIndex, setOpenIndex] = useState(0);

  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const faqData = [
    {
      question: "Question 1.1",
      answer:
        "Answer to question 1.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Question 1.2",
      answer:
        "Answer to question 1.2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 1.3",
      answer:
        "Answer to question 1.3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const tabStyle = (isActive) => ({
    padding: "10px 20px",
    cursor: "pointer",
    background: isActive ? "#DD0000" : "white",
    color: isActive ? "white" : "black",
    marginLeft: "-20px",
    zIndex: isActive ? 2 : 1,
    position: "relative",
    borderRadius: "5px 5px 0 0",
    transition: "background 0.3s",
    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
    minWidth: "150px",
    textAlign: "center",
  });

  return (
    <div className="AboutContainer">
      <div className="AboutHero">
        <div className="AboutHeroContent">
          <h2 className="AboutHeroTitle">
            <span className="AboutHighlight"></span> ABOUT VINYLE'D
          </h2>
          <p className="AboutHeroSubtitle">What Makes Us Different?</p>
        </div>
      </div>

      <div className="AboutIntro">
        <div className="AboutIntroImageWrapper">
          <img
            src="./Images/about_us_1.JPG"
            alt="Display"
            className="AboutIntroImage"
          />
        </div>
        <div className="AboutIntroText">
          <h2 className="AboutIntroTitle">Who Are We?</h2>
          <p className="AboutIntroParagraph">
            VINYLE'D Detailing is Bangalore’s premier destination for automotive
            detailing and paint protection. We specialize in delivering high-end
            care for luxury, performance, and exotic vehicles, with precision,
            passion, and unmatched attention to detail.
          </p>
          <p className="AboutIntroParagraph">
            Our cutting-edge facility is home to a team of highly trained
            professionals dedicated to restoring and preserving vehicles at the
            highest standard. From advanced paint correction to expertly applied
            PPF, every service is executed with technical expertise and artistic
            flair.
          </p>
          <p className="AboutIntroParagraph">
            At VINYLE'D, we offer a complete car care experience — including
            enhancement, protection, and long-term maintenance solutions — all
            under one roof.
          </p>
          <p className="AboutIntroParagraph AboutItalic">
            “Where craftsmanship meets innovation”
          </p>
          <p className="AboutIntroParagraph">
            Our mission is to redefine how vehicle aesthetics are perceived and
            preserved in India. We create experiences that go beyond
            surface-level beauty — elevating automotive care into an expression
            of pride, performance, and passion.
          </p>
        </div>
      </div>

      <div className="AboutStandards">
        <div className="AboutStandardsContent">
          <div className="AboutStandardsText">
            <h4 className="AboutStandardsTitle">
              Raising the Bar – Our Commitment to Excellence:
            </h4>
            <ul className="AboutStandardsList">
              <li>
                <strong>Precision-Crafted Processes:</strong> At VINYLE'D, every
                detailing and PPF technique is carefully developed and refined
                in-house. From meticulous surface preparation to custom-fit
                protection films, our team ensures every vehicle receives a
                tailored treatment that exceeds expectations.
              </li>
              <li>
                <strong>Uncompromising Quality:</strong> Each vehicle undergoes
                a multi-stage quality assurance process, starting from the
                initial assessment to final delivery. Our trained professionals
                follow strict protocols to ensure consistent, flawless results
                every time.
              </li>
              <li>
                <strong>Trusted Assurance:</strong> Our commitment doesn’t end
                with delivery. VINYLE'D offers a transparent warranty and
                dedicated aftercare support, ensuring you experience complete
                peace of mind long after your vehicle leaves our facility.
              </li>
            </ul>
          </div>

          <div className="AboutStandardsImageWrapper">
            <img
              src="./Images/about_us_2.JPG"
              alt="VINYLE'D Example"
              className="AboutStandardsImage"
            />
            <div className="AboutStandardsButtonWrapper">
              <button
                className="AboutStandardsButton"
                onClick={() => navigate("/contact-us")}
              >
                Request Call Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutQuote">
        <div className="AboutQuoteContent">
          <p>
            One simple philosophy drives our business:
            <br />
            <strong>“Excellence is not a skill, it's an attitude.”</strong>
            <br />- Ralph Marston
          </p>
        </div>
      </div>

      <div className="AboutFacilities">
        <div className="AboutFacilitiesImageWrapper">
          <img
            src="./Images/about_us_3.JPG"
            alt="Display"
            className="AboutFacilitiesImage"
          />
          <div className="AboutFacilitiesButtonWrapper">
            <button
              className="AboutFacilitiesButton"
              onClick={() => navigate("/contact-us")}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="AboutFacilitiesText">
          <h3 className="AboutFacilitiesTitle">Our Facilities</h3>
          <p className="AboutFacilitiesParagraph">
            VINYLE'D operates from a state-of-the-art facility located in the
            heart of Bangalore, India. Purpose-built for precision and
            performance, our studio is designed to meet the highest standards in
            automotive detailing and paint protection services.
          </p>
          <p className="AboutFacilitiesParagraph">
            We provide a comfortable and professional environment for our
            clients, while ensuring optimal working conditions for our detailing
            specialists. Every element of our workspace has been carefully
            engineered to support world-class craftsmanship, with controlled
            settings that protect and enhance the results of our treatments. Key
            features of our facility include:
          </p>
          <ul className="AboutFacilitiesList">
            <li>
              Climate-controlled interiors to ensure perfect application of
              detailing and PPF materials.
            </li>
            <li>
              Dust-free, sealed overnight vehicle storage for maximum
              protection.
            </li>
            <li>
              Advanced lighting systems for accurate paintwork inspection and
              correction.
            </li>
            <li>
              Ergonomic car lifting equipment for precise and safe access during
              treatments.
            </li>
            <li>High-performance air compressor and filtration systems.</li>
            <li>
              Efficient air extraction to maintain a clean and particle-free
              environment.
            </li>
            <li>
              Softened, deionised water system for a flawless finishing touch.
            </li>
          </ul>
        </div>
      </div>

      <div className="AboutFooter">
        <h2 className="AboutFooterTitle">VINYLE'D.in</h2>
        <p className="AboutFooterText">Follow Us @vinyle'd</p>
      </div>
    </div>
  );
}
