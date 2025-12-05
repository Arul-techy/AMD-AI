/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ELEGANT & PEACEFUL PALETTE
        elegant: {
          navy: '#2C2F44',           // Deep Navy
          teal: '#A4B5B9',           // Dusty Teal
          lavender: '#D0D2DE',       // Soft Lavender Gray
          porcelain: '#EAE7E2',      // Warm Porcelain
        },
        // DYNAMIC & CHIC PALETTE
        dynamic: {
          black: '#000000',          // Black
          bronze: '#9D683B',         // Luxury Bronze
          sand: '#DEC8B5',           // Soft Sand
          warmgray: '#EAE8E5',       // Light Warm Gray
        },
        // ELEVATED & TIMELESS PALETTE
        elevated: {
          forest: '#2C3729',         // Deep Forest Green
          gold: '#CBB57B',           // Gold Beige
          sage: '#C3C9C0',           // Cool Sage
          blush: '#E5DAD6',          // Blush Neutrals
        },
        // Legacy colors (for backwards compatibility)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c2d6b',
        },
        secondary: {
          50: '#f8fafc',
          500: '#64748b',
          700: '#334155',
          900: '#0f172a',
        },
        accent: {
          400: '#f97316',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '40px',
      },
      boxShadow: {
        // Elegant shadows (navy + bronze)
        'elegant-sm': '0 2px 8px rgba(44, 47, 68, 0.08)',
        'elegant-md': '0 4px 16px rgba(44, 47, 68, 0.12)',
        'elegant-lg': '0 8px 24px rgba(44, 47, 68, 0.15)',
        'elegant-xl': '0 16px 40px rgba(44, 47, 68, 0.2)',
        // Dynamic shadows (bronze accents)
        'dynamic-sm': '0 2px 8px rgba(157, 104, 59, 0.1)',
        'dynamic-md': '0 4px 16px rgba(157, 104, 59, 0.15)',
        'dynamic-lg': '0 8px 24px rgba(157, 104, 59, 0.2)',
        // Glass effects (soft shadows)
        glass: '0 8px 32px rgba(44, 47, 68, 0.08)',
        'glass-lg': '0 20px 60px rgba(44, 47, 68, 0.12)',
        'glass-sm': '0 4px 15px rgba(44, 47, 68, 0.06)',
        'glass-xl': '0 30px 80px rgba(44, 47, 68, 0.15)',
      },
      borderColor: {
        glass: 'rgba(44, 47, 68, 0.2)',
        'glass-light': 'rgba(208, 210, 222, 0.4)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        shimmer: 'shimmer 3s infinite',
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.8)' },
        },
      }
    },
  },
  plugins: [],
}
