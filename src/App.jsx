import { useState } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, Slider } from "@chakra-ui/react";
import customTheme from "./theme";
import { Grid, GridItem, Image, Box } from "@chakra-ui/react";

//Files imports
import Header from "../src/component/header/header.jsx";
import SliderSection from "./component/slider-section/slider";
import Treasury from "./component/treasury-section/treasury";
//Image imports
import Magnifier from "../src/assets/images/magnifier.png";
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />

      <SliderSection />

      <Treasury />
    </ChakraProvider>
  );
}

export default App;
