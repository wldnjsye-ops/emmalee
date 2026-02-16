'use client';

import React from 'react';
import { Indie_Flower } from 'next/font/google';

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
});

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 5.25L12 18.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 12L12 5.25L5.25 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PromptArea() {
  const [value, setValue] = React.useState('');
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 320)}px`;
  }, [value]);

  return (
    <section className="prompt-shell">
      <p className={`title ${indieFlower.className}`}>
        Paste your blog post. Emma creates a click-worthy thumbnail in seconds.
      </p>

      <div className="prompt-box">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="블로그 글 또는 핵심 요약을 입력하면 썸네일 컨셉을 만들어드려요..."
        />

        <div className="bottom-row">
          <div className="chips">
            <button type="button">Thumbnail Concept</button>
            <button type="button">Title Hook Copy</button>
            <button type="button">Visual Direction</button>
          </div>

          <button type="button" className="send-btn" disabled={value.trim().length === 0}>
            <SendIcon />
          </button>
        </div>
      </div>

      <style jsx>{`
        .prompt-shell {
          width: min(980px, calc(100% - 32px));
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .title {
          margin: 0;
          text-align: center;
          font-size: clamp(2rem, 3vw, 3rem);
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.95);
        }

        .prompt-box {
          border-radius: 28px;
          padding: 12px;
          background: rgba(246, 246, 246, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 14px 44px rgba(0, 0, 0, 0.22);
        }

        textarea {
          width: 100%;
          min-height: 120px;
          max-height: 320px;
          resize: none;
          border: none;
          outline: none;
          background: transparent;
          color: #151515;
          font-size: clamp(1rem, 1.5vw, 1.16rem);
          line-height: 1.5;
          padding: 14px 14px 10px;
          font-family: inherit;
        }

        textarea::placeholder {
          color: rgba(0, 0, 0, 0.38);
        }

        .bottom-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 8px 6px;
        }

        .chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .chips button {
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(0, 0, 0, 0.04);
          color: #1d1d1d;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
        }

        .send-btn {
          margin-left: auto;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: none;
          display: inline-grid;
          place-items: center;
          background: #111;
          color: #fff;
          cursor: pointer;
        }

        .send-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}
