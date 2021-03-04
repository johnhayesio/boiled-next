// Import packages
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        boxSizing: 'border-box',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
        margin: '0',
      },
      'ul[role="list"], ol[role="list"]': {
        listStyle: 'none',
      },
      body: {
        minHeight: '100vh',
        textRendering: 'optimizeSpeed',
        lineHeight: '1.5',
      },
      'a:not([class])': {
        textDecorationSkipInk: 'auto',
      },
      img: {
        display: 'block',
        maxWidth: '100%',
      },
      'input, button, textarea, select': {
        font: 'inherit',
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*, *::before, *::after': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
          scrollBehavior: 'auto !important',
        },
      },
    },
  },
})

export default theme
