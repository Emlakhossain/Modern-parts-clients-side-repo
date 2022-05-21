module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

  },
  daisyui: {
    themes: [
      {
        gymtheme: {
          primary: "#f59e0b",
          secondary: "#a16207",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
