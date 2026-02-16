'use client';

import React from 'react';

const steps = [
    {
        num: '01',
        title: '텍스트 입력',
        description: '블로그 제목이나 키워드를 입력하세요.',
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 7V4h16v3" />
                <path d="M9 20h6" />
                <path d="M12 4v16" />
            </svg>
        ),
    },
    {
        num: '02',
        title: '스타일 선택',
        description: '원하는 디자인 스타일과 색상을 고르세요.',
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="13.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="10.5" r="2.5" />
                <circle cx="8.5" cy="7.5" r="2.5" />
                <circle cx="6.5" cy="12.5" r="2.5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: '다운로드',
        description: 'AI가 생성한 썸네일을 바로 다운로드하세요.',
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section
            style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 64px)',
                background: '#0a0a0a',
                color: '#ffffff',
            }}
        >
            <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
                <p
                    style={{
                        fontSize: '0.85rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: '0.75rem',
                    }}
                >
                    How it works
                </p>
                <h2
                    style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        margin: '0 auto 3.5rem',
                    }}
                >
                    3단계로 완성하는 썸네일
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '32px',
                        position: 'relative',
                    }}
                >
                    {steps.map((s, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                        >
                            {/* Step number circle */}
                            <div
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background:
                                        'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    marginBottom: '1.5rem',
                                    color: 'rgba(255,255,255,0.85)',
                                    position: 'relative',
                                }}
                            >
                                {s.icon}
                                {/* Step number badge */}
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: -6,
                                        right: -6,
                                        width: 26,
                                        height: 26,
                                        borderRadius: '50%',
                                        background: '#ffffff',
                                        color: '#000000',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {s.num}
                                </span>
                            </div>

                            {/* Connector line (not on last item) */}
                            {i < steps.length - 1 && (
                                <div
                                    aria-hidden="true"
                                    style={{
                                        display: 'none', // shown via media query workaround not needed — grid handles flow
                                    }}
                                />
                            )}

                            <h3
                                style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    marginBottom: '0.4rem',
                                }}
                            >
                                {s.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.92rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    lineHeight: 1.6,
                                    maxWidth: 260,
                                }}
                            >
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
