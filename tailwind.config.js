/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: {
          50: '#0b0f0f',
          100: '#151e1e',
          200: '#2a3c3c',
          300: '#3f5a5a',
          400: '#557777',
          500: '#6a9595',
          600: '#88aaaa',
          700: '#a5c0c0',
          800: '#c3d5d5',
          900: '#e1eaea',
          950: '#f0f4f4',
        },
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        text: {
          50: '#0b0f0f',
          100: '#151e1e',
          200: '#2a3c3c',
          300: '#3f5a5a',
          400: '#557777',
          500: '#6a9595',
          600: '#88aaaa',
          700: '#a5c0c0',
          800: '#c3d5d5',
          900: '#e1eaea',
          950: '#f0f4f4',
        },
        primary: {
          50: '#090f11',
          100: '#121f21',
          200: '#233e43',
          300: '#355c64',
          400: '#467b86',
          500: '#589aa7',
          600: '#79aeb9',
          700: '#9bc2ca',
          800: '#bcd7dc',
          900: '#deebed',
          950: '#eef5f6',
        },
        secondary: {
          50: '#081012',
          100: '#102023',
          200: '#204146',
          300: '#2f616a',
          400: '#3f818d',
          500: '#4fa1b0',
          600: '#72b4c0',
          700: '#95c7d0',
          800: '#b9dadf',
          900: '#dcecef',
          950: '#edf6f7',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          50: '#071112',
          100: '#0e2125',
          200: '#1c424a',
          300: '#2a636f',
          400: '#388594',
          500: '#46a6b9',
          600: '#6bb8c7',
          700: '#90c9d5',
          800: '#b5dbe3',
          900: '#daedf1',
          950: '#edf6f8',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
