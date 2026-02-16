'use client';

import React from 'react';

const features = [
    {
        title: '텍스트만 입력하면 끝',
        description:
            '블로그 제목이나 본문을 붙여넣기만 하세요. AI가 맥락을 분석해 최적의 썸네일 디자인을 자동 생성합니다.',
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
        ),
    },
    {
        title: '다양한 스타일 제공',
        description:
            '미니멀, 그라디언트, 일러스트, 포토 등 다양한 스타일 프리셋을 지원합니다. 브랜드에 맞는 톤을 선택하세요.',
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        title: '즉시 다운로드',
        description:
            '1200×630, 1200×1200 등 원하는 비율로 바로 다운로드. 추가 편집 도구 없이 블로그에 바로 업로드하세요.',
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        ),
    },
];

export default function Features() {
    return (
        <section
            id="about"
            style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 64px)',
                background: '#050505',
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
                    Features
                </p>
                <h2
                    style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        margin: '0 auto 1rem',
                    }}
                >
                    왜 Blog Thumbnail AI 인가요?
                </h2>
                <p
                    style={{
                        fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                        color: 'rgba(255,255,255,0.6)',
                        maxWidth: 560,
                        margin: '0 auto 3.5rem',
                        lineHeight: 1.6,
                    }}
                >
                    디자인 툴 없이도, 몇 초 만에 전문가 수준의 블로그 썸네일을 만들 수 있습니다.
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {features.map((f, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '36px 28px',
                                borderRadius: 16,
                                background:
                                    'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                                border: '1px solid rgba(255,255,255,0.08)',
                                textAlign: 'left',
                                transition: 'border-color 0.3s, transform 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255,255,255,0.06)',
                                    marginBottom: '1.25rem',
                                    color: 'rgba(255,255,255,0.85)',
                                }}
                            >
                                {f.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {f.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.92rem',
                                    color: 'rgba(255,255,255,0.55)',
                                    lineHeight: 1.65,
                                }}
                            >
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
