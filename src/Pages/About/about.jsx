import React, { useState } from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';

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
      question: 'Question 1.1',
      answer:
        'Answer to question 1.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Question 1.2',
      answer:
        'Answer to question 1.2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Question 1.3',
      answer:
        'Answer to question 1.3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
  ];

  const tabStyle = (isActive) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    background: isActive ? '#DD0000' : 'white',
    color: isActive ? 'white' : 'black',
    marginLeft: '-20px',
    zIndex: isActive ? 2 : 1,
    position: 'relative',
    borderRadius: '5px 5px 0 0',
    transition: 'background 0.3s',
    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
    minWidth: '150px',
    textAlign: 'center',
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
            src="https://i.shgcdn.com/2e1db7b1-9719-45ec-bbc4-17e3bf5bb974/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Display"
            className="AboutIntroImage"
          />
        </div>
        <div className="AboutIntroText">
          <h2 className="AboutIntroTitle">Who are we ?</h2>
          <p className="AboutIntroParagraph">
            VINYLE'D Detailing is the world's most exclusive detailing and paint
            protection film specialist, handling the largest volume of supercars
            anywhere in the world.
          </p>
          <p className="AboutIntroParagraph">
            Our state of the art facilities house some of the most skilled
            detailers and paint protection film installers in the world. This
            environment, coupled with our expertise, allows us to offer our
            clients the highest possible quality.
          </p>
          <p className="AboutIntroParagraph">
            At VINYLE'D we offer a total car care solution package, incorporating
            everything from{' '}
            <a
              href="https://topazdetailing.com/services/enhance/"
              target="_blank"
              rel="noreferrer"
            >
              VINYLE'D enhancement
            </a>{' '}
            and{' '}
            <a
              href="https://topazdetailing.com/services/protect/"
              target="_blank"
              rel="noreferrer"
            >
              VINYLE'D protection
            </a>{' '}
            through to{' '}
            <a
              href="https://topazdetailing.com/services/maintain/"
              target="_blank"
              rel="noreferrer"
            >
              VINYLE'D maintenance
            </a>
            .
          </p>
          <p className="AboutIntroParagraph AboutItalic">
            “The perfect marriage between science and art”
          </p>
          <p className="AboutIntroParagraph">
            VINYLE'D Detailing exists in order to trigger positive emotions; the
            company was born to rewrite how car owners should maintain the
            appearance of their vehicles, to recreate car presentation results
            that will satisfy even the most discerning clients.
          </p>
        </div>
      </div>

      <div className="AboutStandards">
        <div className="AboutStandardsContent">
          <div className="AboutStandardsText">
            <h4 className="AboutStandardsTitle">
              Setting the standard, an industry benchmark:
            </h4>
            <ul className="AboutStandardsList">
              <li>
                <strong>VINYLE'D Design:</strong> Every process and technique is
                developed in-house, from our detailing stages and specially
                blended compounds through to our dedicated PPF design team. Each
                panel of every kit is patterned, designed and produced at our HQ
                meaning a perfect fit and optimum protection that's not available
                anywhere else.
              </li>
              <li>
                <strong>VINYLE'D Quality:</strong> Every car passes through our VINYLE'D
                Control stages, starting from the first contact, ensuring the
                correct assessment, best advice and unparalleled quality control
                every time.
              </li>
              <li>
                <strong>VINYLE'D Warranty:</strong> We stand by our work, VINYLE'D
                provide the most comprehensive warranty and aftercare programme in
                the industry, administered by our HQ. This means should there ever
                be an issue or question we are able to assist efficiently and
                completely with no delay.
              </li>
            </ul>
          </div>
          <div className="AboutStandardsImageWrapper">
            <img
              src="https://i.shgcdn.com/8dc7e943-6a3d-43a1-b17a-d36e113fc2f2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="VINYLE'D Example"
              className="AboutStandardsImage"
            />
            <div className="AboutStandardsButtonWrapper">
              <button className="AboutStandardsButton" onClick={() => navigate('/contact-us')}>Request Call Back</button>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutQuote">
        <div className="AboutQuoteContent">
          <p>
            One simple philosophy drives our business:
            <br />
            <strong>“Treat others as you would like to be treated yourself”</strong>
            <br />- Nabil Naamo
          </p>
        </div>
      </div>

      <div className="AboutFacilities">
        <div className="AboutFacilitiesImageWrapper">
          <img
            src="https://i.shgcdn.com/972a6069-729c-4b28-8390-7c9fc43efe82/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Display"
            className="AboutFacilitiesImage"
          />
          <div className="AboutFacilitiesButtonWrapper">
            <button className="AboutFacilitiesButton" onClick={() => navigate('/contact-us')}>Get In Touch</button>
          </div>
        </div>
        <div className="AboutFacilitiesText">
          <h3 className="AboutFacilitiesTitle">Our Facilities</h3>
          <p className="AboutFacilitiesParagraph">
            VINYLE'D has developed purpose built facilities to conduct its treatments.
            Workshops are conveniently located in London NW10, Bristol, Bahrain,
            Leeds, Midlands & Qatar offering its clients easy access, convenience
            and unmatched security.
          </p>
          <p className="AboutFacilitiesParagraph">
            We offer a relaxed friendly environment for our clients, as well as the
            working environment in something as delicate as{' '}
            <a href="https://topazdetailing.com/services/enhance/">VINYLE'D DETAILING</a>{' '}
            and <a href="https://topazdetailing.com/services/protect/">VINYLE'D PPF</a>{' '}
            requires optimal conditions to achieve the desired results. The
            materials, products and operations involved within our work are
            sensitive to temperature, humidity and dust. Some of these
            considerations are listed below:
          </p>
          <ul className="AboutFacilitiesList">
            <li>
              Temperature controlled environment to get the best from our products.
            </li>
            <li>
              Airtight capsule for car storage overnight so that dust particles
              don’t compromise our work.
            </li>
            <li>
              State of the art built-in variable lighting permitting correct paint
              inspection.
            </li>
            <li>
              Car lifting systems to assist in tackling our treatments without
              having to work from awkward angles.
            </li>
            <li>Air compressor system.</li>
            <li>Air suction systems.</li>
            <li>Softened deionised water to achieve a better finish.</li>
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