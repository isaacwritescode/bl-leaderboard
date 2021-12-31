import { Theme } from "./types";

const theme: Theme  = {
  palette: {
    primary: "#FFFFFF",
    secondary: "#000000",
    accent: "#3d5aff",
    background: "#acb5f5",
    text: "#41506b",
    success: "#4caf50",
    warning: "#FFC043",
    error: "#E14C4C",
    grayscale: [
      "#212121",
      "#414141",
      "#616161",
      "#9e9e9e",
      "#818FA9",
      "#DFE4E9",
      "#eeeeee",
      "#ffffff",
    ],
  },

  fonts: {
    family: {
      primary: "'DM Sans', sans-serif",
      pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
      quote: "Georgia, serif",
    },
    sizes: {
      heading: {
        large: "2.30rem",
        medium: "1.95rem",
        small: "1.56rem",
      },
      paragraph: {
        large: "1.05rem",
        medium: "0.9rem",
        small: "0.8rem",
      },
    },
  },
};

export default theme;
