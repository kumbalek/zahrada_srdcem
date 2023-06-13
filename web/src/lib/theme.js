const customColors = {
  black: '#475840',
  grey: '#363636',
  white: '#fdfdfd',
  whiteish: '#aaa'
}

export default {
  breakpoints: ['40rem', '52rem', '64rem', '80rem'],
  fontSizes: [
    '0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '2rem', '3rem', '4rem'
  ],
  colors: {
    dark: customColors.black,
    middle: customColors.grey,
    light: customColors.white,
    lightish: customColors.whiteish
  },
  space: [
    '0.25rem', '0.5rem', '1rem', '2rem', '3rem', '4rem', '6rem', '8rem', '12rem'
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
}
