/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx}",
    "./components/**/*.{ts,tsx,jsx}",
    "./app/**/*.{ts,tsx,jsx}",
    "./src/**/*.{ts,tsx,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "2xs": "0.5rem",
      },
      colors: {
        kakaoSkyblue: "#92e7ff8a",
        kakaoBlue: "#92caff8a",
        kakaoPurple: "#929dff8a",
        kakaoYellow: "rgb(255, 235, 50)",
        kakaoIcon: "#ededed",
        greenyellow: "greenyellow",
        black: "rgb(208, 208, 208)",
        //
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        50: "170px",
        "305px": "305px",
      },
      maxWidth: {
        "90p": "90%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        underBar: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        opacity0to100: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        closeAnimation: {
          "0%": { opacity: 1, background: "black" },
          "100%": { opacity: 0, background: "black" },
        },
        fadeInDown: {
          "0%": { opacity: 0.5, transform: "translate3d(0, -10px, 0)" },
          "90%": { opacity: 1 },
          to: { opacity: 1 },
        },
        fadeOutDown: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0.7",
            transform: "translate3d(0, 100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInDown: " fadeInDown 0.5s",
        fadeOutDown: " fadeOutDown 0.5s",
        fadeInUp: "fadeInUp 0.5s",
        closeAnimation: "closeAnimation 0.3s",
        opacity0to100: "opacity0to100 0.5s",
      },
      transitionProperty: {
        position: "position, bottom,transform, background, height, width",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
