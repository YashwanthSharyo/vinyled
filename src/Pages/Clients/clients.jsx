import { useState, useEffect } from "react";
import "./clients.css";

export default function Client() {
  const clients = [
    {
      name: "Hindustan Petroleum",
      logo: "https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png?t=1720244492",
    },
    {
      name: "Ferns Real Estate",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdQCa2VRqLfMz5isr1wBU3G0UwqMWg5uI1g&s",
    },
    {
      name: "Bounce",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGm3ly7R36Miw/company-logo_200_200/company-logo_200_200/0/1668166910925/bounceinc_india_logo?e=2147483647&v=beta&t=fBC17VwCITqGQ_XgxmwkGjIAQbFWxjACi9eDfotRUW0",
    },
    {
      name: "Bangalore Football Club",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Bengaluru_FC_logo.svg/230px-Bengaluru_FC_logo.svg.png",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    },
    {
      name: "JW Marriott",
      logo: "https://www.freelogovectors.net/wp-content/uploads/2023/05/jw-marriott-logo-freelogovectors.net_.png",
    },
    {
      name: "1win",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGyWOP9jSRZzQ/company-logo_200_200/company-logo_200_200/0/1718781765966/1win_group_logo?e=2147483647&v=beta&t=Et4xH77QhYAtytJMZYr3sJAw1WLQUeYiAbgyWZD2Ez4",
    },
  ];

  const reviews = [
    {
      name: "Somnath Chakravarty",
      review:
        "Vaibhav and his team at Vinyled did a spectacular job on my GS 1300. The PPF was fitted so well that it’s completely indistinguishable from the bike. I was thoroughly happy to see the bike once it was covered in PPF and have to say I couldn’t have asked for more.\n\nAlso, these guys are thorough professionals. Vaibhav spent quite a bit of time explaining about the product and process and we had a good chat. The bike was done and delivered on time as promised.\n\nI would highly recommend them for anyone looking to get their vehicle PPF covered or wrapped.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjWSF1vROk4OsLd9qoR-_GV6-Pt7TJv79NN7_TN3U_Noc1-Bv18w=w72-h72-p-rp-mo-ba3-br100",
    },
    {
      name: "sudheer timmaraju",
      review:
        "Vinyled is one of the best places to detail your car. I recently got my i20 N Line tail lights wrapped, and the team was very professional and did an amazing job bringing my idea to life. I am extremely happy with the results!",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjWPx2jF9kALM9PyY_1Xk2Ilcrsg0YG51Q5V06oVwJ_OZTIa49Hn=w72-h72-p-rp-mo-br100",
    },
    {
      name: "Vineeth Thilak",
      review:
        "Got my i20 N Line PPF'ed at Vinyled. Vaibhav was very helpful in guiding me through the entire process. If you're looking to hand over your car to a true professional and no-nonsense place, this is the only place in Bangalore. After in-depth research and visiting various detailing studios, I can say these guys stand out. They don’t falsely promote brands for profit margins — they provide genuine suggestions based on customer requirements. And for those looking for unique customizations, this team nails it with their one-of-a-kind designs. A huge shout-out to the entire Vinyled team — it’s rare to find such professionalism.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjWJ_Pua-6B7JdwAi9bt4yCQiTtqomeOZnPuXgsn8O5Khrimq36z=w72-h72-p-rp-mo-br100",
    },

    {
      name: "Vikas Chandra R",
      review:
        "Super professional and amazing job they did on my Dominar 400. My bike had a lot of scratches, and it’s been 5 years — it needed a complete makeover. They suggested colors, showed me each item, and explained everything in detail. The outcome was absolutely amazing. You can blindly trust them, and I assure you they will do wonders to your vehicle.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjW9P9boqIOWK4P6dHefyZOfCL0-HsfqKkGGUivP38oYEmO7N6FY=w72-h72-p-rp-mo-ba4-br100",
    },

    {
      name: "Ayantan Bhattacharya",
      review:
        "I had been searching for a reliable place to make my vision of customising my bike a reality and I couldn’t have found a better place than Vinyl’ed. Mr. Vaibhav was excellent at accommodating my ideas and also suggested a few improvements. Thank you Vaibhav and team for executing the project flawlessly. The bike looks superb and is a showstopper on the roads. The pricing is also competitive and affordable considering the excellent craftsmanship. I’m going to get my car customised as well. I would definitely recommend people to check out their work.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjUCcN_AascHdKsPL9KfaEv0_4h203Bxse93RUcMWVxSAi0B7tM=w72-h72-p-rp-mo-ba2-br100",
    },
    {
      name: "Pritish Ekka",
      review:
        "5/5 on quality of vinyl and wrap. 2/5 after they fit the parts. That’s where the main issue happens. They will not bother to put the wires, frames properly, incorrect nuts and bolts here and there. This is a pain point for most of these kinds of services. Please keep a close watch when the work is done. I had constantly monitored, even then they made mistakes while fixing back parts, wiring, and panels. When you pay a premium price over other cheap services, you would not like to compromise on this. Otherwise, the vinyl work is top notch.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjXKVemyml-ojFth7LWfyvhHc5uTurPOV52HhTzb1lzYV2q09_Sx=w72-h72-p-rp-mo-ba4-br100",
    },
    {
      name: "Vinay Patil",
      review: `I recently had the pleasure of visiting Vinyled for a bike wrap. Vaibhav, the boss, goes above and beyond to ensure that every customer feels heard and understood. He took the time to connect with me, grasping my requirements without any pressure to upsell or overdo it.

Vaibhav’s personal touch and commitment to excellence make this shop a standout in the industry. I highly recommend Vinyled for all your bike customization needs.`,
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjUjvOqpNDo2wmppisiQO2DlWbNUAS8P1z9Cv3knjlL568k7eWRY=w36-h36-p-rp-mo-ba2-br100",
    },
    {
      name: "Nishanth MV",
      review:
        "Excellent work done by Vaibhav and team. I recently got supercool sunfilms installed for two of my cars, I couldn't be more satisfied. The installation was smooth and quick, and the quality of the sunfilms is top-notch. I highly recommend it to anyone looking to upgrade their car's look and functionality.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjXp1RXY3pmlH41tX8HZ2Jnv9c8Pva7RADSd_hLvrgGS8LDH1nS3jg=w72-h72-p-rp-mo-ba2-br100",
    },
    {
      name: "Rajesh Vasanth",
      review:
        "Totally happy with the PPF! I was explained with sample the PPF quality and its features. 10 years warranty from the PPF manufacturer was peace of mind. Post installation inspection and support, tips on care and maintenance were explained thoroughly. Team Vinyled’s depth of knowledge and expertise is amazing. Worth every penny spent!",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjUPtiu5PRCEEaCim23ZUrvCvl0vEfhlbEiKD-96bICzVDTgdA-rXA=w72-h72-p-rp-mo-br100",
    },
    {
      name: "Sarathchandra Babu",
      review:
        "I gotta say, my recent visit to Vinyled totally blew me away. I mean, talk about professionalism and customer care – they nailed it, especially when it came to applying PPF. Right from the get-go, the team was super friendly and knew their stuff. They walked me through everything, making sure I was comfortable and sorting out any worries I had.\n\nBut here's the kicker – Vaibhav, the boss man, he was something else. His attention to detail was next level. He really cared about making sure I was happy with the job. And when I hit a snag with the PPF a few days later, Vaibhav didn't bat an eye. He told me to swing by, and boom, problem solved. That's what I call dedication.\n\nHonestly, after that, I have total faith in Vinyled. They're not just about slapping on some film – they genuinely care about making sure you're satisfied. So, if you're a Himalayan 450 owner like me, or just someone who wants top-notch PPF and killer service, Vinyled's where it's at 🔥",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjVHSFL1ZD3irLR3O3ImylE4rtA0saGDfWa4CZAo8ZjGu3HRHaZ_sQ=w72-h72-p-rp-mo-ba3-br100",
    },

    {
      name: "Melford Greig Quinn",
      review:
        "Red has been an iconic color in my collection of vehicles n My bike needed a makeover, Vaibhav n his team did an excellent Job in making that happen. Looking at the pictures one can tell the attention to detail.\nI would definitely recommend visiting Vinyl’ed.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjXdhWQn4zsmbVahN5UFCbspmNsYMnQjiFwjfKkse1g3-da7-33R=w72-h72-p-rp-mo-ba3-br100",
    },
    {
      name: "Ayush Bhattacharya",
      review:
        "Had an awesome experience at Vinyled. Vaibhav and his team are super professional and great to work with. Went here to get a roof wrap and got some chrome deletes done as well. Very reasonable price and quick and efficient working. Will go back for more work as well.",
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjUXSrVDThE4gp_910Uve-IKHRDjAoVnn57V6M-CHpgXRIut9wCVDA=w72-h72-p-rp-mo-ba3-br100",
    },
  ];

 const biggerClients = [
  {
    name: "Hindustan Petroleum",
    logo: "https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png?t=1720244492",
    description: "Partnered with Hindustan Petroleum to enhance fleet branding, delivering vibrant vehicle wraps that boost visibility across India’s fuel distribution network.",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    description: "Collaborated with Infosys to create custom vehicle branding, showcasing their innovative IT solutions through dynamic, professional fleet designs.",
  },
  {
    name: "1Win",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGyWOP9jSRZzQ/company-logo_200_200/company-logo_200_200/0/1718781765966/1win_group_logo?e=2147483647&v=beta&t=Et4xH77QhYAtytJMZYr3sJAw1WLQUeYiAbgyWZD2Ez4",
    description: "Worked with 1Win to design bold vehicle wraps, amplifying their brand presence with eye-catching graphics for promotional campaigns.",
  },
  {
    name: "Bengaluru Football Club",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Bengaluru_FC_logo.svg/230px-Bengaluru_FC_logo.svg.png",
    description: "Teamed up with Bengaluru Football Club to craft striking team vehicle wraps, enhancing fan engagement and club visibility.",
  },
  {
    name: "JW Marriott",
    logo: "https://www.freelogovectors.net/wp-content/uploads/2023/05/jw-marriott-logo-freelogovectors.net_.png",
    description: "Partnered with JW Marriott to deliver premium vehicle branding, elevating their luxury hospitality image with sleek, professional designs.",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
       {/* Review Carousel */}
      <section className="reviews">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="review-carousel">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`review-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img src={review.picture} alt={review.name} />
                <div className="stars">★★★★★</div>
                <p className="review-text">"{review.review}"</p>
                <p className="review-author">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bigger Clients */}
      <section className="bigger-clients">
        <div className="container">
          <h2>Our Premier Partners</h2>
          <div className="bigger-client-grid">
            {biggerClients.map((client, index) => (
              <div key={index} className="bigger-client-card">
                <img src={client.logo} alt={client.name} />
                <div>
                  <h3>{client.name}</h3>
                  <p>{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
