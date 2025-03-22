/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 4s   forwards, blink 0.8s infinite",
      },
      screens: {
        'mobile': '480px',  // Custom extra small breakpoint
        'tablet': '768px',
        'lapsmall': '1024px',
        'laplarge': '1440px',
        'lapxl': '2560px',
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
    },
    fontFamily:{
      monsorate:["Montserrat", "sans-serif"]
    },
    
  },
  plugins: [],
}

