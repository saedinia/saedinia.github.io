/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          secondary: 'hsl(10 100% 30% / 1)',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          secondary: 'oklch(0.8804 0.206 93.72)',
        },
      },
    ],
  },
};
