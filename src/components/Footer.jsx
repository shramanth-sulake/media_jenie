import React from 'react';

const Footer = () => {
    return (
        <footer className="w-100 py-5 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#0a0a0a', minHeight: '350px' }}>
            <div className="container px-4 text-center d-flex flex-column align-items-center">

                <h3 className="text-white mb-4 fw-light" style={{ fontSize: '1.75rem', lineHeight: '1.5', maxWidth: '850px', letterSpacing: '0.01em' }}>
                    Explore our services — whether you want to browse capabilities, <br className="d-none d-md-block" />
                    achieve goals, or evaluate a partner.
                </h3>

                <button
                    className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center mt-3 shadow-sm hover-shadow-md transition-all"
                    style={{ backgroundColor: '#ffdb24', color: '#000', padding: '12px 32px', fontSize: '14.5px' }}
                >
                    Book a 30 Mins Strategy Call
                    <svg className="ms-2" style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>
        </footer>
    );
};

export default Footer;
