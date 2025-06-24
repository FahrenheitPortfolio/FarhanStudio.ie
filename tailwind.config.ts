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
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'rotate-in': 'rotateIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'morphing': 'morphing 6s ease-in-out infinite',
        'text-reveal': 'textReveal 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'parallax-slow': 'parallax 20s linear infinite',
        'parallax-fast': 'parallax 10s linear infinite',
        'elastic': 'elastic 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-soft': 'bounceSoft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wave': 'wave 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'cursor-blink': 'cursorBlink 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config