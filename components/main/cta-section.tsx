'use client';

import React from 'react';

export default function CtaSection() {
    return (
        <section
            id="generate"
            style={{
                padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 64px)',
                background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
                color: '#ffffff',
                textAlign: 'center',
            }}
        >
            <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <div
                    style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                            'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                        border: '1px solid rgba(255,255,255,0.12)',
                        margin: '0 auto 2rem',
                        color: 'rgba(255,255,255,0.8)',
                    }}
                >
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
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                </div>

                <h2
                    style={{
                        fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                    }}
                >
                    지금 바로 시작하세요
                </h2>
                <p
                    style={{
                        fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.6,
                        marginBottom: '2.5rem',
                    }}
                >
                    아이디어가 있다면, 썸네일은 AI가 완성합니다.
                    <br />
                    무료로 시작해보세요.
                </p>

                <a
                    href="#generate"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 28px',
                        borderRadius: 14,
                        background: '#ffffff',
                        color: '#000000',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '1rem',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        boxShadow: '0 8px 32px rgba(255,255,255,0.1)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow =
                            '0 12px 40px rgba(255,255,255,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow =
                            '0 8px 32px rgba(255,255,255,0.1)';
                    }}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                    무료로 썸네일 만들기
                </a>
            </div>
        </section>
    );
}
