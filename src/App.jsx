import { useState } from 'react'
import './App.css'

//Chakra imports 
import { ChakraProvider, Slider } from "@chakra-ui/react";
import customTheme from "./theme";
import { Grid, GridItem,Image } from "@chakra-ui/react";

//Files imports
import Header from "../src/component/header/header.jsx";
import SliderSection from './component/slider-section/slider';

//Image imports
import Magnifier from "../src/assets/images/magnifier.png";
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Grid templateColumns="70% 30%" gap={4} >
      <GridItem>
        <SliderSection />
      </GridItem>
      <GridItem>
      <Image src={Magnifier} alt="Placeholder" maxWidth={["100%", "300px", "300px"]} margin={["50px 0 0 0", "50px 0 0 0", "50px 0 0 100px"]} />

      </GridItem>
    </Grid>
      </ChakraProvider>
  )
}

export default App
