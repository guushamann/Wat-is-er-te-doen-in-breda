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
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: "200",
              fontFamily: "Funnel Display",
              marginBottom: "0",
              marginTop: "0",
              lineHeight: "0.7",
              fontSize: "2rem",
            },
            h1: {
              fontSize: "5rem",
            },
            h2: {
              fontSize: "3rem",
            },
            h3: {
              fontSize: "2rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
