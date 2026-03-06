import React from 'react';

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
    return (
        <div className="w-100 container px-3 py-5">
            <h2 className="fw-bold text-dark mb-5" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', marginLeft: '1rem' }}>
                Case Studies
            </h2>

            <div className="d-flex gap-4 overflow-auto pb-4 pt-2 hide-scrollbar w-100 px-3" style={{ scrollSnapType: 'x mandatory' }}>

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

                <div style={{ scrollSnapAlign: 'start', flexShrink: 0, paddingRight: '1rem' }}>
                    <CaseCard
                        bgImage="/images/C.png"
                        text={<>Producing 100s of learning <br /> videos for a US <br /> organization.</>}
                    />
                </div>

            </div>
        </div>
    );
};

export default CaseSection;
