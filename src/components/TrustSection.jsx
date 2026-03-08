import React, { useState } from 'react';

const testimonials = [
    {
        quote: '"Thanks for turning out 3 lovely videos in Kannada on Cervical cancer. Your team was very responsive to our feedback and took action in a short time. We appreciate the professionalism shown and hope to work with you again in the future."',
        name: 'Kanchan Bannerjee',
        title: 'Hon Secretary',
        org: 'ICS',
        avatar: 'https://ui-avatars.com/api/?name=Kanchan+Bannerjee&background=ec4899&color=fff&rounded=true'
    },
    {
        quote: '"Working with MediaJenie has been a game changer for us. Their team understood our brand voice immediately and delivered high-quality content consistently. We saw a notable spike in engagement within just the first month."',
        name: 'Rajiv Sharma',
        title: 'Marketing Director',
        org: 'Happilo',
        avatar: 'https://ui-avatars.com/api/?name=Rajiv+Sharma&background=4f46e5&color=fff&rounded=true'
    }
];

const TrustSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () => setActiveIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () => setActiveIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));

    const t = testimonials[activeIndex];

    return (
        <div className="w-100 bg-white py-5 d-flex flex-column align-items-center font-sans">

            {/* Header */}
            <div className="container px-4 text-center text-md-start mb-4" style={{ maxWidth: '1000px' }}>
                <h2 className="fw-bold text-dark" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.5rem)', color: '#2b2b2b' }}>
                    Trust: Highly Rated
                </h2>
            </div>

            {/* Logo Carousel Border Section — Infinite Marquee */}
            <div className="w-100 border-top border-bottom py-4 mb-5 overflow-hidden" style={{ borderColor: '#eef0f2' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        animation: 'marquee 18s linear infinite',
                        width: 'max-content'
                    }}
                >
                    <img
                        src="/images/Group 1.png"
                        alt="Client Logos"
                        style={{ height: '48px', objectFit: 'contain', flexShrink: 0, paddingRight: '60px' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <img
                        src="/images/Group 1.png"
                        alt="Client Logos"
                        aria-hidden="true"
                        style={{ height: '48px', objectFit: 'contain', flexShrink: 0, paddingRight: '60px' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            </div>

            {/* Testimonials and Fit Section Container */}
            <div className="container px-4" style={{ maxWidth: '1000px' }}>

                {/* 1. Clients Speak */}
                <div className="mb-5 pb-5">
                    <h3 className="fw-bold mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#6c757d' }}>Clients Speak</h3>

                    <div className="row g-4 align-items-center mt-3">
                        {/* Quote + Navigation */}
                        <div className="col-12 col-md-7 pe-md-5">
                            <p
                                className="fw-medium mb-4"
                                style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', color: '#444', lineHeight: '1.6', minHeight: '120px', transition: 'opacity 0.3s ease' }}
                            >
                                {t.quote}
                            </p>

                            {/* Arrows + dot indicators */}
                            <div className="d-flex align-items-center gap-3 mt-4">
                                <button
                                    onClick={prev}
                                    className="btn p-0 d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                                    style={{ width: '36px', height: '36px', backgroundColor: '#fff', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.borderColor = '#000'; e.currentTarget.querySelector('svg').setAttribute('stroke', '#fff'); }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#6c757d'; e.currentTarget.querySelector('svg').setAttribute('stroke', '#000'); }}
                                >
                                    <svg width="16" height="16" fill="none" stroke="#000" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                </button>

                                <button
                                    onClick={next}
                                    className="btn p-0 d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                                    style={{ width: '36px', height: '36px', backgroundColor: '#fff', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.borderColor = '#000'; e.currentTarget.querySelector('svg').setAttribute('stroke', '#fff'); }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#6c757d'; e.currentTarget.querySelector('svg').setAttribute('stroke', '#000'); }}
                                >
                                    <svg width="16" height="16" fill="none" stroke="#000" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>

                                {/* Dot indicators */}
                                <div className="d-flex gap-2 ms-2">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            className="btn p-0 rounded-circle border-0"
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                backgroundColor: i === activeIndex ? '#000' : '#d5d5d5',
                                                transition: 'background-color 0.2s'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author card */}
                        <div className="col-12 col-md-5 position-relative ps-md-5">
                            {/* Vertical divider on desktop */}
                            <div className="d-none d-md-block position-absolute bg-light h-100" style={{ width: '2px', left: 0, top: 0 }}></div>

                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="rounded-circle"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover', flexShrink: 0 }}
                                />
                                <div>
                                    <h5 className="fw-bold mb-1 text-dark" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>{t.name}</h5>
                                    <p className="text-secondary mb-0 fst-italic" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.3' }}>
                                        {t.title}<br />
                                        <span style={{ fontStyle: 'normal' }}>{t.org}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 2. Fit: Our Lead-gen Service is perfect for... */}
                <div className="w-100 p-4 p-md-5 mt-4" style={{ backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
                    <h2 className="fw-bold text-center text-dark mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', lineHeight: '1.3' }}>
                        Fit: Our Lead-gen <br className="d-none d-sm-block" />
                        Service is perfect for...
                    </h2>

                    <div className="row g-0 pt-2 position-relative">
                        {/* Vertical line divider for center */}
                        <div className="d-none w-100 d-md-flex justify-content-center position-absolute" style={{ height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
                            <div style={{ width: '1px', backgroundColor: '#d1d1d1', height: '100%' }}></div>
                        </div>

                        {/* Left column Content */}
                        <div className="col-12 col-md-6 pe-md-5">
                            <h4 className="fw-bold text-dark mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                                Small & Medium <br /> Organizations
                            </h4>
                            <p className="text-dark mb-0 fw-medium" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#444' }}>
                                B2B or B2C businesses can use our lead-<br className="d-none d-xl-block" />
                                gen services.
                            </p>
                        </div>

                        {/* Right column Content */}
                        <div className="col-12 col-md-6 ps-md-5 mt-4 mt-md-0">
                            <h4 className="fw-bold text-dark mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                                B2B / B2C Products & Services
                            </h4>
                            <p className="text-dark mb-0 fw-medium" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#444' }}>
                                B2B or B2C businesses can use our lead-<br className="d-none d-xl-block" />
                                gen services.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TrustSection;
