import { useState, useRef, useEffect } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, color, Slider } from "@chakra-ui/react";

import { Box, Flex, Center, Container,useMediaQuery  } from "@chakra-ui/react";

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

  const [hoveredButton, setHoveredButton] = useState(-1);

  
  const handleButtonClick = (index) => {
    setCurrentSlide(index);
    setHoveredButton(index);


    switch (index) {
      case 0:
        headerRef.current.scrollIntoView({
          behavior: "smooth",
          
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
  const handleButtonHover = (index) => {
    setHoveredButton(index);
  };

  const handleButtonLeave = () => {
    setHoveredButton(-2);
  };

  const buttonSize = 3; // Define the base size of the buttons
  const activeButtonSize = 4; // Define the size of the active button

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
      <Box display="flex" justifyContent="center" flexDirection="column" >
      <div ref={headerRef} >
        <Box mb={40} mt="10%" h="100vh" >
          <Header />
        </Box>
      </div>

      <div ref={sliderRef}>
        <Box h="100vh">
          <SliderSection />
        </Box>
      </div>

      <div ref={treasuryRef}>
        <Box mb="30%" mt={{base:"70%",md:0}}>
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
        w="100px"
alignItems="center"      >
        <Button
           size="lg"
           borderRadius="0"
           borderWidth="2px"
           borderColor="black"
           backgroundColor={currentSlide === 0 ? "white" : "white"}
           _hover={{ backgroundColor: hoveredButton === 0 ? "transparent" : "transparent", transform: "scale(1.1)" }}
           _active={{ backgroundColor: "black", transform: "scale(1)" }}
           mb={2}
           onClick={() => handleButtonClick(0)}
           onMouseEnter={() => handleButtonHover(0)}
           onMouseLeave={handleButtonLeave}
           w={`${hoveredButton === 0 || currentSlide === 0 ? activeButtonSize : buttonSize}rem`}
           h={`${hoveredButton === 0 || currentSlide === 0 ? activeButtonSize : buttonSize}rem`}
           transition="all 0.2s ease-in-out"
        />
        <Button
           size="lg"
           borderRadius="0"
           borderWidth="2px"
           borderColor="black"
           backgroundColor={currentSlide === 1 ? "white" : "white"}
           _hover={{ backgroundColor: hoveredButton === 1 ? "transparent" : "transparent", transform: "scale(1.1)" }}
           _active={{ backgroundColor: "black", transform: "scale(1)" }}
           mb={2}
           onClick={() => handleButtonClick(1)}
           onMouseEnter={() => handleButtonHover(1)}
           onMouseLeave={handleButtonLeave}
           w={`${hoveredButton === 1 || currentSlide === 1 ? activeButtonSize : buttonSize}rem`}
           h={`${hoveredButton === 1 || currentSlide === 1 ? activeButtonSize : buttonSize}rem`}
           transition="all 0.2s ease-in-out"
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth="2px"
          borderColor="black"
          backgroundColor={currentSlide === 2 ? "white" : "transparent"}
          _hover={{ backgroundColor: hoveredButton === 2 ? "transparent" : "transparent", transform: "scale(1.1)" }}
          _active={{ backgroundColor: "black", transform: "scale(1)" }}
          mb={2}
          onClick={() => handleButtonClick(2)}
          onMouseEnter={() => handleButtonHover(2)}
          onMouseLeave={handleButtonLeave}
          w={`${hoveredButton === 2 || currentSlide === 2 ? activeButtonSize : buttonSize}rem`}
          h={`${hoveredButton === 2 || currentSlide === 2 ? activeButtonSize : buttonSize}rem`}
          transition="all 0.2s ease-in-out"
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth="2px"
          borderColor="black"
          _hover={{ backgroundColor: hoveredButton === 3 ? "transparent" : "transparent", transform: "scale(1.1)" }}
          _active={{ backgroundColor: "black", transform: "scale(1)" }}
          mb={2}
          onClick={() => handleButtonClick(3)}
          onMouseEnter={() => handleButtonHover(3)}
          onMouseLeave={handleButtonLeave}
          w={`${hoveredButton === 3 || currentSlide === 3 ? activeButtonSize : buttonSize}rem`}
          h={`${hoveredButton === 3 || currentSlide === 3 ? activeButtonSize : buttonSize}rem`}
          transition="all 0.2s ease-in-out"
        />
      </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
