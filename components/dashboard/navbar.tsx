'use client';

import React from 'react';
import Link from 'next/link';
import type { User } from '@supabase/supabase-js';

type DashboardNavbarProps = {
  user: User;
  isSigningOut: boolean;
  onSignOut: () => void;
};

export default function DashboardNavbar({
  user,
  isSigningOut,
  onSignOut,
}: DashboardNavbarProps) {
  const avatarUrl = user.user_metadata?.avatar_url as string | undefined;

  return (
    <header className="dash-nav">
      <Link href="/" className="floating logo-pill">
        <img src="/logo.png" alt="Emma logo" width={22} height={22} />
        <span>Emma</span>
      </Link>

      <div className="profile-wrap">
        <button type="button" className="floating profile-pill">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Profile" className="avatar" />
          ) : (
            <span className="avatar-fallback">
              {(user.email?.[0] ?? 'U').toUpperCase()}
            </span>
          )}
        </button>

        <div className="profile-popover">
          <div className="user-line">{user.email ?? 'Signed-in user'}</div>
          <button
            type="button"
            className="signout-btn"
            onClick={onSignOut}
            disabled={isSigningOut}
          >
            {isSigningOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .dash-nav {
          position: fixed;
          top: 18px;
          left: 22px;
          right: 22px;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
        }

        .floating {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(16, 16, 16, 0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
        }

        .logo-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .profile-wrap {
          position: relative;
        }

        .profile-pill {
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          cursor: default;
          padding: 0;
        }

        .avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 999px;
          display: block;
        }

        .avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: #fff;
          font-weight: 700;
          background: linear-gradient(135deg, #4b5563, #111827);
        }

        .profile-popover {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 220px;
          padding: 10px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(12, 12, 12, 0.9);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: 0.18s ease;
        }

        .profile-wrap:hover .profile-popover,
        .profile-wrap:focus-within .profile-popover {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .user-line {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.78);
          margin-bottom: 8px;
          word-break: break-all;
        }

        .signout-btn {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }

        .signout-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </header>
  );
}
