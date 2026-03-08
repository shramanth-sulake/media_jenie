import React from 'react';

const OfferSection = () => {
    return (
        <div className="w-100 bg-white d-flex flex-column">

            {/* --- SECTION 1: Top Image Background --- */}
            <div className="w-100 d-flex flex-column align-items-center">
                <div className="w-100 px-4 px-md-5">
                    <div
                        className="w-100 position-relative d-flex justify-content-center"
                        style={{
                            backgroundImage: 'url("/images/image 44.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            minHeight: '450px',
                            height: '55vh',
                            borderRadius: '0px'
                        }}
                    >
                    </div>
                </div>

                {/* Overlapping White Card */}
                <div className="w-100 container position-relative px-desktop-8 card-overlap" style={{ zIndex: 20 }}>
                    <div className="bg-white p-4 p-md-5 border-md-0 border shadow-sm" style={{ boxShadow: '0px 15px 60px rgba(0,0,0,0.1) !important' }}>
                        <h2 className="fw-bold text-dark mb-4 responsive-title-2" style={{ lineHeight: '1.25', letterSpacing: '-0.02em' }}>
                            Offer/ Value/ Solution: How is our <br className="d-none d-md-block" /> lead-generation service unique?
                        </h2>
                        <div className="mb-5 text-secondary mt-4 responsive-text" style={{ lineHeight: '1.6', maxWidth: '500px', marginTop: '2rem' }}>
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
            <div className="w-100 container py-4 mt-5 mb-4 px-desktop-8">
                <img
                    src="/images/MediaJenie-Website-Dev-Process-Full 1.png"
                    alt="Process Flowchart"
                    className="w-100 h-auto d-block mx-auto border"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* --- SECTION 3: Yellow Audit Banner --- */}
            <div className="w-100 container mb-5 mt-4 px-desktop-8">
                <div className="row g-0 align-items-center rounded-4 position-relative overflow-hidden shadow-sm" style={{ backgroundColor: '#fde047' }}>

                    {/* Content Left */}
                    <div className="col-12 col-md-8 p-4 p-md-5 position-relative" style={{ zIndex: 2 }}>
                        <h2 className="fw-bold text-dark mb-4 responsive-title-2" style={{ lineHeight: '1.25', letterSpacing: '-0.02em', color: '#1f2937' }}>
                            Audit / Free Diagnosis / Kit:<br />
                            Not sure if you need<br />
                            professional lead-gen service?
                        </h2>

                        <div className="text-dark mb-5 responsive-text" style={{ lineHeight: '1.6', color: '#374151' }}>
                            <p className="mb-2 pe-md-5">Take this quick audit and<br className="d-none d-sm-block" /> we'll show you.</p>
                            <ul className="mb-0 ps-3" style={{ listStyleType: 'disc' }}>
                                <li className="mb-2">It's completely free</li>
                                <li className="mb-2">Only takes about 90 seconds</li>
                                <li className="mb-0">Get a tailored action report</li>
                            </ul>
                        </div>

                        <button className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#000', color: '#fde047', padding: '14px 32px', fontSize: '15px', width: 'fit-content' }}>
                            Book a 30 mins Strategy Call
                            <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Image Right */}
                    <div className="col-12 col-md-4 d-flex justify-content-end align-items-end position-absolute h-100 end-0 bottom-0 d-none d-md-flex pointer-events-none" style={{ pointerEvents: 'none' }}>
                        <img
                            src="/images/img.png"
                            alt="Audit Magnifying Glass"
                            className="img-fluid"
                            style={{
                                maxWidth: '140%',
                                objectFit: 'contain',
                                objectPosition: 'bottom right',
                                position: 'absolute',
                                bottom: 0,
                                right: '-5%',
                                maxHeight: '110%'
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OfferSection;
