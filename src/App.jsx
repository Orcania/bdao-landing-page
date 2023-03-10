import { useState } from 'react'
import './App.css'

//Chakra imports 
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";

//Files imports
import Header from "../src/component/header/header.jsx";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      </ChakraProvider>
  )
}

export default App
