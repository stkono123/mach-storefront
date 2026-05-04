import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004c4c',
        'primary-container': '#006666',
        'primary-fixed': '#a2f0ef',
        secondary: '#515f78',
        'secondary-container': '#d2e0fe',
        surface: '#f9f9ff',
        'surface-container': '#e7eeff',
        'surface-container-low': '#f0f3ff',
        'surface-container-high': '#dee8ff',
        'surface-container-lowest': '#ffffff',
        'on-background': '#111c2c',
        'on-surface': '#111c2c',
        'on-primary': '#ffffff',
        'on-secondary-container': '#55637d',
        'outline-variant': '#bec9c8',
        background: '#f9f9ff',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
