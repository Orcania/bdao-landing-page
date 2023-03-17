import { useState } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, Slider } from "@chakra-ui/react";

import { Box, Flex, Center } from "@chakra-ui/react";

//font import
import customTheme from "./theme";
//Files imports
import Header from "../src/component/header/header.jsx";
import SliderSection from "./component/slider-section/slider";
import Treasury from "./component/treasury-section/treasury";
import Governed from "./component/governed-section/governed";
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box mb="10%">
        <Header />
      </Box>

      <div>
        <SliderSection />
      </div>

      <div>
        <Treasury />
      </div>
      <div>
        <Governed />
      </div>
    </ChakraProvider>
  );
}

export default App;
