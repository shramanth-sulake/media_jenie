import React, { useRef } from 'react';

const CaseCard = ({ bgImage, text }) => {
    return (
        <div
            className="position-relative d-flex flex-column justify-content-between p-4 overflow-hidden rounded"
            style={{
                width: '315px',
                minWidth: '315px',
                height: '412px',
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h3 className="fw-bold text-dark mt-2 position-relative w-100 pe-3" style={{ fontSize: '17px', lineHeight: '1.35', zIndex: 10 }}>
                {text}
            </h3>

            <div className="d-flex justify-content-start position-relative mb-2" style={{ zIndex: 10 }}>
                <button className="btn rounded-pill fw-bold shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', fontSize: '12.5px', padding: '10px 24px' }}>
                    View case study
                </button>
            </div>
        </div>
    );
};

const CaseSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-100 container px-3 py-5">
            {/* Header row with title and arrows */}
            <div className="d-flex align-items-center justify-content-between mb-5 px-2">
                <h2 className="fw-bold text-dark mb-0" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>
                    Case Studies
                </h2>

                <div className="d-flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="btn d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                        style={{ width: '44px', height: '44px', backgroundColor: '#fff', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.borderColor = '#000'; e.currentTarget.querySelector('svg').style.stroke = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#6c757d'; e.currentTarget.querySelector('svg').style.stroke = '#000'; }}
                    >
                        <svg width="18" height="18" fill="none" stroke="#000" viewBox="0 0 24 24" style={{ transition: 'stroke 0.2s' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="btn d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                        style={{ width: '44px', height: '44px', backgroundColor: '#fff', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.borderColor = '#000'; e.currentTarget.querySelector('svg').style.stroke = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#6c757d'; e.currentTarget.querySelector('svg').style.stroke = '#000'; }}
                    >
                        <svg width="18" height="18" fill="none" stroke="#000" viewBox="0 0 24 24" style={{ transition: 'stroke 0.2s' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scrollable cards row */}
            <div
                ref={scrollRef}
                className="d-flex gap-4 overflow-auto pb-4 pt-2 custom-scrollbar w-100 px-2"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
                    <CaseCard
                        bgImage="/images/A.png"
                        text={<>Launching & growing a <br /> new D2C f&b brand.</>}
                    />
                </div>

                <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
                    <CaseCard
                        bgImage="/images/C.png"
                        text={<>Producing 100s of learning <br /> videos for a US <br /> organization.</>}
                    />
                </div>

                <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
                    <CaseCard
                        bgImage="/images/B.png"
                        text={<>Growing sales of a <br /> hospitality brand through <br /> CX transformation.</>}
                    />
                </div>

                <div style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
                    <CaseCard
                        bgImage="/images/C.png"
                        text={<>Producing 100s of learning <br /> videos for a US <br /> organization.</>}
                    />
                </div>

                <div style={{ scrollSnapAlign: 'start', flexShrink: 0, paddingRight: '1rem' }}>
                    <CaseCard
                        bgImage="/images/B.png"
                        text={<>Scaling a B2B SaaS brand <br /> through targeted <br /> lead generation.</>}
                    />
                </div>
            </div>
        </div>
    );
};

export default CaseSection;
