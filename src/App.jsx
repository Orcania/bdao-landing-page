import { useState, useRef, useEffect } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, color, Slider } from "@chakra-ui/react";

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
import { Button } from "@chakra-ui/react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);
  const treasuryRef = useRef(null);
  const governedRef = useRef(null);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);

    switch (index) {
      case 0:
        headerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case 1:
        sliderRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case 2:
        treasuryRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case 3:
        governedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerPos = headerRef.current.offsetTop - window.innerHeight / 2;
      const sliderPos = sliderRef.current.offsetTop - window.innerHeight / 2;
      const treasuryPos = treasuryRef.current.offsetTop - window.innerHeight / 2;
      const governedPos = governedRef.current.offsetTop - window.innerHeight / 2;

      if (window.scrollY >= headerPos && window.scrollY < sliderPos) {
        setCurrentSlide(0);
      } else if (window.scrollY >= sliderPos && window.scrollY < treasuryPos) {
        setCurrentSlide(1);
      } else if (window.scrollY >= treasuryPos && window.scrollY < governedPos) {
        setCurrentSlide(2);
      } else if (window.scrollY >= governedPos) {
        setCurrentSlide(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <div ref={headerRef}>
        <Box mb={40} >
          <Header />
        </Box>
      </div>

      <div ref={sliderRef}>
        <Box mb="40%">
          <SliderSection />
        </Box>
      </div>

      <div ref={treasuryRef}>
        <Box mb="30%">
          <Treasury />
        </Box>
      </div>

      <div ref={governedRef}>
        <Box mb={10}>
          <Governed />
        </Box>
      </div>

      <Box mb={5}>
        <Staking />
      </Box>

      <Box >
        <Contact />
      </Box>

      <Box
        position="fixed"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        display="flex"
        flexDirection="column"
      >
        <Button
          size="lg"
          borderRadius="0"
          borderWidth="2px"
          borderColor="black"
          backgroundColor={currentSlide === 0 ? "black" : "white"}
          _hover={{backgroundColor:"#CDCDCD"}}
          mb={2}
          onClick={() => handleButtonClick(0)}
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth="2px"
          borderColor="black"
          _hover={{backgroundColor:"#CDCDCD"}}
          backgroundColor={currentSlide === 1 ? "black" : "white"}
          mb={2}
          onClick={() => handleButtonClick(1)}
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth="2px"
          borderColor="black"
          _hover={{backgroundColor:"#CDCDCD"}}
          backgroundColor={currentSlide === 2 ? "black" : "white"}
          mb={2}
          onClick={() => handleButtonClick(2)}
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth="2px"
          borderColor="black"
          _hover={{backgroundColor:"#CDCDCD"}}
          backgroundColor={currentSlide === 3 ? "black" : "white"}
          mb={2}
          onClick={() => handleButtonClick(3)}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
