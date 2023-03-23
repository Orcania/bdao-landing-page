import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body:  "IBM Plex Mono, monospace",
    heading: "IBM Plex Mono, monospace",
  },
  styles: {
    global: {
      body: {
        fontSize: "20px", // set the font size for the body element
        fontWeight: "medium", // set the font weight to medium
      },
      h1: {
        fontSize: "300px", // set the font size for h1 elements
        fontWeight: "405", // set the font weight to bold
      },
      h2: {
        fontSize: "xl", // set the font size for h2 elements
        fontWeight: "semibold", // set the font weight to semibold
      },
    },
     textStyles: {
    bold: {
      fontWeight: "bold", // set the font weight to bold
    },
  },
  
  },
});

export default customTheme;