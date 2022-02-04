import { extendTheme } from "@chakra-ui/react";
import { ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

export const colors = {
  purple: {
    "50": "#E9E7FE",
    "100": "#C2BBFC",
    "200": "#9A8FFA",
    "300": "#7363F8",
    "400": "#4B37F5",
    "500": "#240CF3",
    "600": "#1D09C3",
    "700": "#160792",
    "800": "#0E0561",
    "900": "#070231",
  },
  blue: {
    "50": "#E5EFFF",
    "100": "#B8D2FF",
    "200": "#8AB5FF",
    "300": "#5C98FF",
    "400": "#2E7BFF",
    "500": "#005EFF",
    "600": "#004BCC",
    "700": "#003899",
    "800": "#002666",
    "900": "#001333",
  },
  red: {
    "50": "#FDE8E8",
    "100": "#F9BFBD",
    "200": "#F59693",
    "300": "#F26D69",
    "400": "#EE443F",
    "500": "#EA1B15",
    "600": "#BB1611",
    "700": "#8C100D",
    "800": "#5E0B08",
    "900": "#2F0504",
  },
  pink: {
    "50": "#FEE6EF",
    "100": "#FDBAD2",
    "200": "#FB8DB5",
    "300": "#FA6198",
    "400": "#F8357B",
    "500": "#F7085E",
    "600": "#C5074B",
    "700": "#940538",
    "800": "#630326",
    "900": "#310213",
  },
  green: {
    "50": "#EBFAF2",
    "100": "#C7F0DA",
    "200": "#A2E6C2",
    "300": "#7EDDAA",
    "400": "#5AD392",
    "500": "#35CA7A",
    "600": "#2BA161",
    "700": "#207949",
    "800": "#155131",
    "900": "#0B2818",
  },
  social: {
    telegram: "#0088CC",
    twitter: "#1DA1F2",
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: "ManropeVariable,-apple-system,system-ui,sans-serif",
    body: "ManropeVariable,-apple-system,system-ui,sans-serif",
  },
});

export { theme };
