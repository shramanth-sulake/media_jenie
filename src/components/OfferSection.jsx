import React from 'react';

const OfferSection = () => {
    return (
        <div className="w-100 bg-white d-flex flex-column">

            {/* --- SECTION 1: Top Image Background --- */}
            <div className="w-100 d-flex flex-column align-items-center">
                <div
                    className="w-100 position-relative d-flex justify-content-center"
                    style={{
                        backgroundImage: 'url("/images/image 44.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '450px',
                        height: '55vh'
                    }}
                >
                </div>

                {/* Overlapping White Card */}
                <div className="w-100 container px-3 position-relative" style={{ zIndex: 20, marginTop: '-8rem' }}>
                    <div className="bg-white p-4 p-md-5 border-md-0 border shadow-sm" style={{ boxShadow: '0px 15px 60px rgba(0,0,0,0.1) !important' }}>
                        <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '2.5rem', lineHeight: '1.25', letterSpacing: '-0.02em' }}>
                            Offer/ Value/ Solution: How is our <br className="d-none d-md-block" /> lead-generation service unique?
                        </h2>
                        <div className="mb-5 text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '900px' }}>
                            <p className="mb-4">
                                Most lead-gen programs focus on channels, and activities, assuming intent-of-buying.
                            </p>
                            <p className="mb-0">
                                We work at "decision-science" level. We understand how your target customer take buying decision - which is spread across many touch-points and stages. We work at demand-signal-capture and demand-activation-signals, to generate quality and predictable lead pipeline for you.
                            </p>
                        </div>

                        <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-4">
                            <button className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', padding: '14px 32px', fontSize: '15px' }}>
                                Book a 30 Mins Strategy Call
                                <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <button className="btn btn-light rounded-pill fw-bold border border-secondary shadow-sm" style={{ backgroundColor: '#fff', color: '#000', padding: '14px 32px', fontSize: '15px' }}>
                                Take a Free Audit (90 Sec)
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 2: Flowchart Diagram --- */}
            <div className="w-100 container px-3 py-4 mt-5 mb-4">
                <img
                    src="/images/MediaJenie-Website-Dev-Process-Full 1.png"
                    alt="Process Flowchart"
                    className="w-100 h-auto d-block mx-auto border"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* --- SECTION 3: Yellow Audit Banner --- */}
            <div className="w-100 container px-3 mt-4 mb-5">
                <img
                    src="/images/Frame 31.png"
                    alt="Audit Banner"
                    className="w-100 h-auto d-block mx-auto"
                    style={{ objectFit: 'contain' }}
                />
            </div>

        </div>
    );
};

export default OfferSection;
