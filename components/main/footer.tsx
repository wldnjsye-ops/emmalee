'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer
            style={{
                padding: '40px clamp(20px, 6vw, 64px)',
                background: '#050505',
                color: 'rgba(255,255,255,0.4)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}
            >
                {/* Logo / Brand */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: 0.6 }}
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                        Blog Thumbnail AI
                    </span>
                </div>

                {/* Copyright */}
                <p style={{ fontSize: '0.8rem', margin: 0 }}>
                    © {new Date().getFullYear()} Blog Thumbnail AI. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
