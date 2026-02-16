'use client';

import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const linkStyle: React.CSSProperties = {
        color: 'rgba(255,255,255,0.6)',
        textDecoration: 'none',
        fontSize: '0.88rem',
        fontWeight: 500,
        transition: 'color 0.2s',
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                padding: '0 clamp(20px, 4vw, 48px)',
                height: 64,
                background: scrolled ? 'rgba(10, 10, 10, 0.82)' : 'transparent',
                backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
                borderBottom: scrolled
                    ? '1px solid rgba(255,255,255,0.06)'
                    : '1px solid transparent',
                transition:
                    'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
                fontFamily:
                    "'Space Grotesk', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif",
            }}
        >
            {/* Left — Logo + Text */}
            <a
                href="/"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    color: '#ffffff',
                    justifySelf: 'start',
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.9 }}
                >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span
                    style={{
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Blog Thumbnail AI
                </span>
            </a>

            {/* Center — Nav links */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                    justifySelf: 'center',
                }}
            >
                <a
                    href="#about"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                    }
                >
                    Features
                </a>
                <a
                    href="#pricing"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                    }
                >
                    Pricing
                </a>
                <a
                    href="#contact"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                    }
                >
                    Contact
                </a>
            </div>

            {/* Right — Get Started button */}
            <div style={{ justifySelf: 'end' }}>
                <a
                    href="#generate"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 20px',
                        borderRadius: 10,
                        background: '#ffffff',
                        color: '#000000',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        transition: 'opacity 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.88';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Get Started
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            </div>
        </nav>
    );
}
