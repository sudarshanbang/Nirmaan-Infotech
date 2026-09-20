import type { Config as TailwindConfig } from 'tailwindcss';

const config: TailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nirmaan Infotech Core Palette (Restored Live Site Identity)
        'deep-ink': '#071A36',
        'pure-white': '#ffffff',
        'cool-ash': '#64748b',
        pebble: '#e2e8f0',
        'midnight-hull': '#071A36',
        'charcoal-deck': '#0B2A5B',
        'clay-ember': '#1677FF',
        'pale-sky': '#f1f5f9',
        'pale-sky-light': '#f8fafc',

        // Theme Token Aliases Mapped to Nirmaan Brand Identity
        void: '#071A36',
        abyss: '#071A36',
        'deep-sea': '#071A36',
        'cobalt-panel': '#0B2A5B',
        'frosted-lilac': '#1677FF',
        'signal-blue': '#1677FF',
        'pulse-violet': '#1677FF',
        'aurora-purple': '#1677FF',
        'plasma-pink': '#1677FF',
        ember: '#1677FF',
        sulfur: '#1677FF',
        quartz: '#ffffff',
        ash: '#64748b',
        mist: '#e2e8f0',
        slateBorder: '#e2e8f0',
        obsidianEdge: '#0B2A5B',
        obsidian: '#071A36',
        inkline: '#0B2A5B',
        sapphireHairline: '#e2e8f0',

        navy: {
          950: '#020712',
          900: '#071A36',
          850: '#0B2A5B',
          800: '#0B2A5B',
          700: '#1e293b',
          600: '#071A36',
        },
        electric: {
          500: '#1677FF',
          400: '#388EFF',
          300: '#66A9FF',
          600: '#005CE6',
        },
        cyanAccent: {
          400: '#23A9FF',
          500: '#0099FF',
          300: '#66C2FF',
        },
        growthGreen: {
          500: '#10B981',
          400: '#34D399',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-figtree)', 'Figtree', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'glow-aurora': '0 0 40px -10px rgba(22, 119, 255, 0.25)',
        'glow-ember': '0 0 35px -5px rgba(22, 119, 255, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(35, 169, 255, 0.25)',
        'shadow-md': 'rgba(0, 0, 0, 0.08) 0px 3px 16px 0px',
        'shadow-xl': 'rgba(0, 0, 0, 0.15) 0px 4px 30px 0px',
        'shadow-xl-2': 'rgba(0, 0, 0, 0.2) 0px 20px 35px 0px',
        'shadow-inner-glow': 'rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset',
      },
      borderRadius: {
        'cards': '12px',
        'pill': '9999px',
        'input': '8px',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-aurora': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-aurora': 'pulse-aurora 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

export default config;
