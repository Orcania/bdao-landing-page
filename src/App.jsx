import { useState } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, Slider } from "@chakra-ui/react";

import { Box, Flex, Center, Container } from "@chakra-ui/react";

//font import
import customTheme from "./theme";
//Files imports
import Header from "../src/component/header/header.jsx";
import SliderSection from "./component/slider-section/slider";
import Treasury from "./component/treasury-section/treasury";
import Governed from "./component/governed-section/governed";
import Staking from "./component/staking-section/staking";
import Contact from "./component/contact-section/contact";
function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <Header />

   
      <Box mb={10}>
        <SliderSection />
      </Box>

      <Box mb={20}>
        <Treasury />
      </Box>

      <Box mb={10}>
        <Governed />
      </Box>

      <Box mb={10}>
        <Staking />
      </Box>

      <Box mb={10}>
        <Contact />
      </Box>
   
  </ChakraProvider>
  );
}

export default App;
