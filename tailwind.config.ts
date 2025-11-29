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
        'acid-green': '#ccff00',
        'forest-green': '#0d1f0f',
        'matte-black': '#0a0a0a',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'mono': ['Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
