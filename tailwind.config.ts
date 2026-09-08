import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020712',
          900: '#071A36',
          850: '#0B2A5B',
          800: '#0F3470',
          700: '#184994',
          600: '#1D5BB6',
        },
        electric: {
          500: '#1677FF',
          400: '#388EFF',
          300: '#64A7FF',
          600: '#005CE6',
        },
        cyanAccent: {
          400: '#23A9FF',
          500: '#0099FF',
          300: '#52BAFF',
        },
        growthGreen: {
          500: '#10B981',
          400: '#34D399',
        },
        surface: {
          50: '#F7F9FC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          800: '#111827',
          900: '#0D131F',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-electric': '0 0 25px -5px rgba(22, 119, 255, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(35, 169, 255, 0.4)',
        'glow-subtle': '0 0 50px -10px rgba(22, 119, 255, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      }
    },
  },
  plugins: [],
};

export default config;
