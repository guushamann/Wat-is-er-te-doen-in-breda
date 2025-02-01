/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        funnel: ["Funnel Display", "serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--theme-text)",
            "--tw-prose-headings": "var(--theme-text)",
            "--tw-prose-links": "var(--theme-text)",
            "--tw-prose-bold": "var(--theme-text)",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
