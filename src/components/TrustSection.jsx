import React from 'react';

const TrustSection = () => {
    return (
        <div className="w-100 bg-white py-5 d-flex flex-column align-items-center font-sans">

            {/* Header */}
            <div className="container px-4 text-center text-md-start mb-4" style={{ maxWidth: '1000px' }}>
                <h2 className="fw-bold text-dark" style={{ fontSize: '2rem', color: '#2b2b2b' }}>
                    Trust: Highly Rated
                </h2>
            </div>

            {/* Logo Carousel Border Section */}
            <div className="w-100 border-top border-bottom py-4 mb-5" style={{ borderColor: '#eef0f2' }}>
                <div className="container px-4 overflow-hidden" style={{ maxWidth: '1000px' }}>
                    {/* Rather than building a full slider, we render the provided group image which seems to be the logo strip */}
                    <img
                        src="/images/Group 1.png"
                        alt="Client Logos"
                        className="w-100 h-auto"
                        style={{ objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            </div>

            {/* Testimonials and Fit Section Container */}
            <div className="container px-4" style={{ maxWidth: '1000px' }}>

                {/* 1. Clients Speak */}
                <div className="mb-5 pb-5">
                    <h3 className="fw-bold mb-4" style={{ fontSize: '1.4rem', color: '#6c757d' }}>Clients Speak</h3>

                    <div className="row g-4 align-items-center mt-3">
                        <div className="col-12 col-md-7 pe-md-5">
                            <p className="fw-medium mb-4" style={{ fontSize: '1.05rem', color: '#444', lineHeight: '1.6' }}>
                                "Thanks for turning out 3 lovely videos in Kannada on Cervical cancer. Your team was very responsive to our feedback and took action in a short time. We appreciate the professionalism shown and hope to work with you again in the future."
                            </p>

                            <div className="d-flex gap-3 mt-4">
                                <button className="btn btn-link p-0 text-dark opacity-75" style={{ transition: 'opacity 0.2s', ':hover': { opacity: '1' } }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                </button>
                                <button className="btn btn-link p-0 text-dark opacity-100">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 position-relative ps-md-5">
                            {/* Vertical divider on desktop */}
                            <div className="d-none d-md-block position-absolute bg-light h-100" style={{ width: '2px', left: 0, top: 0 }}></div>

                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src="https://ui-avatars.com/api/?name=Kanchan+Bannerjee&background=ec4899&color=fff&rounded=true"
                                    alt="Kanchan Bannerjee"
                                    className="rounded-circle"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="fw-bold mb-1 text-dark" style={{ fontSize: '1rem' }}>Kanchan Bannerjee</h5>
                                    <p className="text-secondary mb-0 fst-italic" style={{ fontSize: '0.85rem', lineHeight: '1.3' }}>
                                        Hon Secretary<br />
                                        <span style={{ fontStyle: 'normal' }}>ICS</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 2. Fit: Our Lead-gen Service is perfect for... */}
                <div className="w-100 p-4 p-md-5 mt-4" style={{ backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
                    <h2 className="fw-bold text-center text-dark mb-5" style={{ fontSize: '2rem', lineHeight: '1.3' }}>
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
                            <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '1.2rem' }}>
                                Small & Medium <br /> Organizations
                            </h4>
                            <p className="text-dark mb-0 fw-medium" style={{ fontSize: '0.95rem', color: '#444' }}>
                                B2B or B2C businesses can use our lead-<br className="d-none d-xl-block" />
                                gen services.
                            </p>
                        </div>

                        {/* Right column Content */}
                        <div className="col-12 col-md-6 ps-md-5 mt-4 mt-md-0">
                            <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '1.2rem' }}>
                                B2B / B2C Products & Services
                            </h4>
                            <p className="text-dark mb-0 fw-medium" style={{ fontSize: '0.95rem', color: '#444' }}>
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
