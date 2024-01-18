/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        lg: '1120px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: 'hsl(0deg 0% 100%)',
          secondary: 'hsl(10 100% 30% / 1)',
          neutral: '#000',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: 'hsl(0deg 0% 13.33%)',
          secondary: 'hsl(38.86 90.72% 61.96%)',
          neutral: '#fff',
        },
      },
    ],
  },
};
