/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#030712',
        secondary: '#4b5563',
      },
      fontFamily: {
        switzer: ['Switzer', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['128px', {
          lineHeight: '102px',
          fontWeight: '500',
        }],
        'heading': ['60px', {
          lineHeight: '60px',
          fontWeight: '500',
        }],
        'subheading': ['24px', {
          lineHeight: '32px',
          fontWeight: '500',
        }],
        'body': ['14px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
      },
    },
  },
  plugins: [],
};