export interface Theme {
  palette: Palette;
  fonts: Fonts;
}

// Palette

interface Palette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  success: string;
  warning: string;
  error: string;
  grayscale: string[];
}

// Gradient

interface Gradients {
  primary: string;
  secondary: string;
}

// Fonts

interface Fonts {
  family: FontFamlies;
  sizes: FontHierarchy;
}

interface FontFamlies {
  primary: string;
  pre: string;
  quote: string;
}

interface FontHierarchy {
  heading: FontSizes;
  paragraph: FontSizes;
}

interface FontSizes {
  large: string;
  medium: string;
  small: string;
}
