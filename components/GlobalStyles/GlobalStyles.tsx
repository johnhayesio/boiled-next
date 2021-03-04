// Import packages
import { NextPage } from 'next'

export const GlobalStyles: NextPage = () => (
  <style jsx global>
    {`
      html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body,
      h1,
      h2,
      h3,
      h4,
      p,
      figure,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      ul[role='list'],
      ol[role='list'] {
        list-style: none;
      }

      body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
      }

      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      img {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}
  </style>
)
