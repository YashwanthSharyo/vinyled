import { useState, useEffect } from 'react';
import './clients.css';

export default function Client() {
    const clients = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
];


    const reviews = [
        {
            name: "John Doe",
            review: "Amazing service! They exceeded our expectations and delivered on time.",
            picture: "https://w0.peakpx.com/wallpaper/112/617/HD-wallpaper-hero-prabhas-formal-hero-prabhas-prabhas-hero-telugu-actor-thumbnail.jpg",
        },
        {
            name: "Jane Smith",
            review: "Professional and reliable. Highly recommend their services!",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94OsmAuPQHglChANnDvBgLByQrAIz4721yg&s",
        },
        {
            name: "Mike Johnson",
            review: "Their team transformed our business with innovative solutions.",
            picture: "https://m.media-amazon.com/images/M/MV5BMDBhNzk5YjgtMmMyOS00MTcwLWEwYTQtNzhkNTU5ZDQ4OWJmXkEyXkFqcGc@._V1_.jpg",
        },
        {
            name: "Sarah Lee",
            review: "Outstanding support and quality work. A true partner!",
            picture: "https://wallpapercave.com/wp/wp6987048.jpg",
        },
        {
            name: "David Brown",
            review: "Exceptional results and great communication throughout.",
            picture: "https://i.pinimg.com/236x/7e/2c/ba/7e2cba5c4ae5eb2cd6c3936b0ce37b5b.jpg",
        },
    ];

    const biggerClients = [
        {
            name: "Hewlett-Packard (HP)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
            description:
                "Partnered with HP to deliver cutting-edge technology solutions, enhancing enterprise efficiency and innovation.",
        },
        {
            name: "Big Client Inc",
            logo: "data:image/jpeg;base64,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",
            description:
                "Collaborated to streamline operations and drive digital transformation across their global network.",
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
           
            <section className="client-logos">
                <div className="container">
                    <h2>Our Valued Clients</h2>
                    <div className="client-grid">
                        {clients.map((client, index) => (
                            <img
                                key={index}
                                src={client.logo}
                                alt={client.name}
                                className="client-logo"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Review Carousel */}
            <section className="reviews">
                <div className="container">
                    <h2>What Our Clients Say</h2>
                    <div className="review-carousel">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className={`review-slide ${index === currentSlide ? 'active' : ''}`}
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