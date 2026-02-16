'use client';

import React from 'react';
import Image from 'next/image';

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
                    <Image src="/logo.png" alt="Emma logo" width={20} height={20} />
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
