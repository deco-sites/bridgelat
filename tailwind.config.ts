export const theme = {
  "primary": "hsl(180 100% 10%)",
  "secondary": "hsl(0 39% 39%)",
  "accent": "hsl(150 100% 50%)",
  "neutral": "hsl(0 0% 20%)",
  "base-100": "hsl(0 0% 100%)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",

  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase", // set default text transform for buttons
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

export default {
  content: ["./**/*.tsx"],
  safelist: [
    {
      pattern: /slide/,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideTop: {
          "0%": { transform: "translateY(50vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideTopMedium: {
          "0%": { transform: "translateY(25vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideTopShort: {
          "0%": { transform: "translateY(10vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRightMedium: {
          "0%": { transform: "translateX(-50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRightShort: {
          "0%": { transform: "translateX(-25%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideBottom: {
          "0%": { transform: "translateY(-50vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideBottomMedium: {
          "0%": { transform: "translateY(-25vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideBottomShort: {
          "0%": { transform: "translateY(-10vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideLeftMedium: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideLeftShort: {
          "0%": { transform: "translateX(25%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideTop: "slideTop 1s",
        slideTopMedium: "slideTopMedium 1s",
        slideTopShort: "slideTopShort 1s",
        slideRight: "slideRight 1s",
        slideRightMedium: "slideRightMedium 1s",
        slideRightShort: "slideRightShort 1s",
        slideBottom: "slideBottom 1s",
        slideBottomMedium: "slideBottomMedium 1s",
        slideBottomShort: "slideBottomShort 1s",
        slideLeft: "slideLeft 1s",
        slideLeftMedium: "slideLeftMedium 1s",
        slideLeftShort: "slideLeftShort 1s",
      },
    },
  },
};
