import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-100 bg-white d-flex flex-column">
            {/* Header */}
            <header className="w-100 px-4 px-md-5 py-4 d-flex justify-content-start">
                <img
                    src="/images/logo 1.png"
                    alt="Media Jenie Logo"
                    style={{ height: '40px', objectFit: 'contain' }}
                />
            </header>

            {/* Main Content */}
            <main className="w-100 container d-flex flex-column align-items-center justify-content-center text-center" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
                <h1 className="fw-bold text-dark mb-4" style={{ fontSize: '3.5rem', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
                    Hero: Frustrated with low <br className="d-none d-md-block" />
                    quality & less leads?
                </h1>

                <p className="mb-5" style={{ fontSize: '1.5rem', color: '#4b5563', maxWidth: '850px', lineHeight: '1.6' }}>
                    Explanation Block: We help organizations <strong className="fw-semibold text-dark">generate predictable <br className="d-none d-md-block" />
                        leads</strong> through our Proprietary <strong className="fw-semibold text-dark">Decision-Science Framework</strong>
                </p>

                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 w-100 mt-2">
                    <button className="btn rounded-pill d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', padding: '14px 32px', fontSize: '15px' }}>
                        Book a 30 Mins Strategy Call
                        <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    <button className="btn btn-light rounded-pill fw-bold border border-secondary shadow-sm" style={{ padding: '14px 32px', fontSize: '15px', color: '#000', backgroundColor: '#fff' }}>
                        Take a Free Audit (90 Sec)
                    </button>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
