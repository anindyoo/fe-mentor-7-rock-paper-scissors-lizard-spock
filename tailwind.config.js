/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        // BUTTONS GRADIENTS
        scissorsGradient: 'linear-gradient(0deg, hsla(39, 89%, 49%, 1) 0%, hsla(40, 84%, 53%, 1) 100%)',
        paperGradient: 'linear-gradient(0deg, hsla(230, 89%, 62%, 1) 0%, hsla(230, 89%, 65%, 1) 100%)',
        rockGradient: 'linear-gradient(0deg, hsla(349, 71%, 52%, 1) 0%, hsla(349, 70%, 56%, 1) 100%)',
        lizardGradient: 'linear-gradient(0deg, hsla(261, 73%, 60%, 1) 0%, hsla(261, 72%, 63%, 1) 100%)',
        spockGradient: 'linear-gradient(0deg, hsla(189, 59%, 53%, 1) 0%, hsla(189, 58%, 57%, 1) 100%)',

        // APP BACKGROUND
        mainBg: 'radial-gradient(circle at 50% -80%, hsla(214, 47%, 23%, 1) 0%, hsla(237, 49%, 15%, 1) 100%)',
      },
      backgroundColor: {
        scoreBgColor: 'hsla(0, 0%, 97%, 1)',
      },
      colors: {
        // BUTTON NEUTRAL
        innerButton: 'hsla(0, 0%, 89%, 1)',

        // BUTTONS SHADOWS
        scissorsShadow: 'hsla(28, 75%, 45%, 1)',
        paperShadow: 'hsla(229, 65%, 46%, 1)',
        rockShadow: 'hsla(347, 77%, 35%, 1)',
        lizardShadow: 'hsla(261, 51%, 45%, 1)',
        spockShadow: 'hsla(194, 58%, 43%, 1)',
        innerShadow: 'hsla(228, 21%, 78%, 1)',

        // TEXT
        darkText: 'hsla(229, 25%, 31%, 1)',
        scoreText: 'hsla(229, 64%, 46%, 1)',
        scoreNumberText: 'hsla(250, 8%, 47%, 1)',

        // OUTLINE
        headerOutline: 'hsla(217, 16%, 45%, 1)',
      },
    },
  },
  plugins: [],
};
