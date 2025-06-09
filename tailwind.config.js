/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode via a CSS class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0 1rem",
      screens: {
        DEFAULT: "100%",
        xl: "1320px",
        padding: "0 1rem",
      },
    },
    fontFamily: {
      funnel: ['"Funnel Display"', "sans-serif"],
      delight: ["delight", "sans-serif"],
      gilroy: ["Gilroy-Bold", "sans-serif"], // Add custom font
      walsheim: ["GT Walsheim Trial", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"], // Add Montserrat
      garamond: ["EB Garamond", "serif"],
      playfair: ["Playfair Display", "serif"],
      comic: ["Comic Neue", "cursive"],
      hedvig: ["Hedvig Letters Sans", "sans-serif"],
      SF: ['"SF Pro Display"', "system-ui", "sans-serif"],
    },
    extend: {
  
      letterSpacing: {
        "extra-widest": "0.15em", // or '0.2em', '0.25em', etc.
        "super-widest": "0.3em",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "linear-gradient": "var(--linear-gradient)",
        "banner-gradient": "var(--banner-gradient)",
      },
      colors: {
        "custom-pink": "#DD00AC",
        "custom-purple": "#7130C3",
        "custom-deep": "#410093",
        primary: "linear-gradient(90deg, #DD00AC,#7130C3,#410093)",
        // themeColor: "#35C66B",
        themeYellow: "#FFB22C",
        themeGreen: "#35C66B",
        themeGreenT: "#66B1E5",
        themeRed: "#FF2222",
        themeWhite: "#FFFFFF",
        themeBlack: "#000000",
        cardDark: "#1C1C65",
        cardLight: "#EAEAEA99",
        activeCardBg: "#0095FF66",
        tradeGreen: "#22C478",
        tradeRed: "#F23645",
        tradeGray: "#DBDBDB",
        titleGray: "#C7C7C7",
        tradeCardBg: "#00CDF933",
        headerBgDark1: "#242236",
        headerBgDark2: "#262c3e",
        evenTableBg: "#FFFFFF66",
        headerBgDark1: "#242236",
        headerBgDark2: "#262c3e",
        rootBgColor: "#121517",
        cardBgDark: "#E6FFF80A",
        inputBg: "#FFFFFF33",
        stakeCard: "#2F2F8A99",
        inputDark: "#23262F",
        tableBg: "#C2C2C24D",
        inputLight: "#ebebeb",
        darkText: "#0C7BEA",
        cardHover: "#b6ccf37d",
        popDark: "#2C2C2C",
        txtDark: "#B1B5C3",
      },
      screens: {
        xs: { max: "480px" },
        xTs: { min: "480px", max: "640px" },
        xTTs: { min: "640px", max: "770px" },

        tTl: { min: "1010px", max: "1200px" },
        sTt: { min: "770px", max: "1009px" },
        lTx: { min: "1280px", max: "1400px" },
        custom1: { max: "1500px", min: "1400px" },
        custom2: { max: "1600px", min: "1500px" },
        custom3: { max: "1800px", min: "1600px" },
        "2xl": "1800px",
        "3xl": "2000px",
        "4xl": "2300px",
        "5xl": "2600px",
        "6xl": "2900px",
        "7xl": "3200px",
        "8xl": "3500px",
        "9xl": "4000px",
        "10xl": "4500px",
        "11xl": "5000px",
        "12xl": "6000px",
      },

      spacing: {
        "xl-mx": 300, // ✅ Correct
        "lg-mx": 150, // ✅ Correct
        "md-mx": 100, // ✅ Correct
        "sm-mx": 50, // ✅ Correct
        "xs-mx": 10,
        //px
        "xl-px": 180, // red
        "lg-xl-px": 160, //green
        "lg-px": 100, // orange
        "md-lg-px": 80, //blue
        "md-px": 50, // purple
        "sm-md-px": 30, //pink
        "sm-px": 20, // slate
        "xs-sm-px": 20, //yellow
        "xs-px": 20, //white
        //py
        "xl-py": 100,
        "lg-xl-py": 80,
        "lg-py": 70,
        "md-lg-py": 60,
        "md-py": 60,
        "sm-md-py": 40,
        "sm-py": 20,
        "xs-sm-py": 20,
        "xs-py": 20,
        //
        "xl-h-px": 250,
        "xl-pt": 150,
        "lg-xl-pt": 150,
        "lg-pt": 150,
      },
      // screens: {
      //     xs: { max: "480px" }, // xs applies below 480px
      //     "xs-sm": { min: "481px", max: "640px" }, // xs-sm applies between 481px and 640px
      //     sm: { min: "641px", max: "768px" }, // sm applies between 641px and 768px
      //     "sm-md": { min: "769px", max: "900px" }, // sm-md applies between 769px and 900px
      //     md: { min: "901px", max: "1024px" }, // md applies between 901px and 1024px
      //     "md-lg": { min: "1025px", max: "1200px" }, // md-lg applies between 1025px and 1200px
      //     lg: { min: "1201px", max: "1400px" }, // lg applies between 1201px and 1400px
      //     "lg-xl": { min: "1401px", max: "1600px" }, // lg-xl applies between 1401px and 1600px
      //     xl: { min: "1601px" }, // xl applies above 1601px
      //   },
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0px)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      scroll: "scroll 30s linear infinite",
    },
    keyframes: {
      flip: {
        "0%": { transform: "rotateY(0deg)" },
        "100%": { transform: "rotateY(360deg)" },
      },
      smoothBounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
    animation: {
      flip: "flip 5s linear infinite",
      smoothBounce: "smoothBounce 2s ease-in-out infinite",
    },

    fontSize: {
      paragraph: "17px",
      midHeading: "20px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
