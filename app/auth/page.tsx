'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/components/auth/auth-context';

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/3wDb5OEq5T4?si=s7W0jF1s13UULL-D';

export default function AuthPage() {
  const { user, isLoading, errorMessage, signInWithGoogle, signOut } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [localError, setLocalError] = React.useState('');

  const handleGoogleLogin = async () => {
    setLocalError('');
    setIsSubmitting(true);
    const error = await signInWithGoogle();
    if (error) {
      setLocalError(`Google 로그인 시작 실패: ${error}`);
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    setLocalError('');
    setIsSubmitting(true);
    const error = await signOut();
    if (error) {
      setLocalError(`로그아웃 실패: ${error}`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="auth-page">
      <Link href="/" className="back-link">
        {'< back'}
      </Link>

      <div className="shell">
        <section className="left-pane">
          <div className="left-overlay" />
          <div className="video-wrap">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Emma intro video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="brand-wrap">
            <p className="brand-text">emma</p>
          </div>
        </section>

        <section className="right-pane">
          <div className="card">
            <Link href="/" className="logo">
              <Image src="/logo.png" alt="Emma logo" width={28} height={28} className="logo-image" />
              <span>Blog Thumbnail AI</span>
            </Link>

            <h1>시작하기</h1>
            <p className="subtitle">
              {user ? '로그인이 완료되었습니다.' : 'Google 계정으로 간편하게 로그인하세요.'}
            </p>

            {user ? (
              <div className="signed-wrap">
                <p className="user-email">
                  {user.email ?? user.user_metadata?.name ?? '로그인 사용자'}
                </p>
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoading || isSubmitting}
                  className="main-button"
                >
                  {isSubmitting ? '처리 중...' : '로그아웃'}
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading || isSubmitting}
                className="main-button"
              >
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.998 23.998 0 0 0 0 24c0 3.77.9 7.35 2.56 10.53l7.97-5.94z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.94C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                {isSubmitting ? '연결 중...' : 'Google로 계속하기'}
              </button>
            )}

            {localError || errorMessage ? (
              <p className="error-message">{localError || errorMessage}</p>
            ) : null}
          </div>
        </section>
      </div>

      <style jsx>{`
        .auth-page {
          min-height: 100vh;
          background: #050505;
          padding: 24px;
          position: relative;
          font-family:
            'Space Grotesk',
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            'Helvetica Neue',
            Arial,
            sans-serif;
        }

        .back-link {
          position: absolute;
          top: 24px;
          left: 24px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s;
          z-index: 4;
        }

        .back-link:hover {
          color: #ffffff;
        }

        .shell {
          min-height: calc(100vh - 48px);
          display: grid;
          grid-template-columns: 3fr 2fr;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .left-pane {
          position: relative;
          background:
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.14), transparent 40%),
            linear-gradient(155deg, #3f3f46 0%, #111111 48%, #050505 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(20px, 2.5vw, 40px);
          isolation: isolate;
        }

        .left-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.38);
          z-index: -1;
        }

        .video-wrap {
          width: min(92%, 760px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.55);
        }

        .video-wrap iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: 0;
          display: block;
        }

        .brand-wrap {
          display: flex;
          align-items: flex-end;
          min-height: 180px;
        }

        .brand-text {
          margin: 0;
          font-size: clamp(5.5rem, 14vw, 14rem);
          letter-spacing: -0.05em;
          line-height: 0.84;
          text-transform: lowercase;
          color: rgba(255, 255, 255, 0.94);
          text-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
          font-family:
            'Bebas Neue',
            'Anton',
            'Space Grotesk',
            'Arial Black',
            sans-serif;
        }

        .right-pane {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #070707 0%, #0d0d0d 100%);
          padding: clamp(16px, 2vw, 32px);
        }

        .card {
          width: 100%;
          max-width: 440px;
          padding: 48px 36px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          color: #ffffff;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 2rem;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: -0.01em;
        }

        .logo-image {
          border-radius: 6px;
        }

        .card h1 {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 0.5rem;
        }

        .subtitle {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.6;
          margin: 0 0 2rem;
        }

        .signed-wrap {
          display: grid;
          gap: 12px;
        }

        .user-email {
          margin: 0;
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          text-align: left;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .main-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          font-family: inherit;
        }

        .main-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
        }

        .main-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
          transform: none;
        }

        .error-message {
          margin: 0.9rem 0 0;
          font-size: 0.8rem;
          color: #ff9ea1;
          line-height: 1.4;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .shell {
            grid-template-columns: 1fr;
          }

          .left-pane {
            min-height: 54vh;
          }

          .brand-wrap {
            min-height: 120px;
          }
        }
      `}</style>
    </div>
  );
}
