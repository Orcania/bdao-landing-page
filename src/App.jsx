import { useState, useRef, useEffect } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, color, Slider } from "@chakra-ui/react";

import { Box, Flex, Center, Container, useMediaQuery } from "@chakra-ui/react";

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
          block:"center"
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
      const treasuryPos =
        treasuryRef.current.offsetTop - window.innerHeight / 2;
      const governedPos =
        governedRef.current.offsetTop - window.innerHeight / 2;

      if (window.scrollY >= headerPos && window.scrollY < sliderPos) {
        setCurrentSlide(0);
      } else if (window.scrollY >= sliderPos && window.scrollY < treasuryPos) {
        setCurrentSlide(1);
      } else if (
        window.scrollY >= treasuryPos &&
        window.scrollY < governedPos
      ) {
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
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent={{ base: "block", md: "center" }}
        flexDirection={{ base: "none", md: "column" }}
      >
        <Box
          display={{ base: "block", md: "flex" }}
          justifyContent={{ base: "block", md: "center" }}
          flexDirection={{ base: "column", md: "none" }}
          width={{ base: "100%", md: "95%" }}
        >
          <Flex align="center" justify="center" h="100vh">
            <div ref={headerRef}>
              <Box>
                <Header />
              </Box>
            </div>
          </Flex>

          <div ref={sliderRef}>
            <Box h="100vh" mb={{ base: "300px", md: 0 }}>
              <SliderSection />
            </Box>
          </div>

          <div ref={treasuryRef}>
            <Box mt={{ base: "auto", md: 0 }}>
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

          <Box alignItems="center" justify="center">
            <Contact />
          </Box>
        </Box>
      </Box>
      <Flex
        direction={{ base: "row", md: "column" }}
        top={{ base: "5%", md: "50%" }}
        left={{ base: "45%", md: "90%" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        textAlign="center"
        width="10%"
        position="fixed"
        transform="translateY(-50%)"
        display="flex"
        alignItems="center"
        mr="20px"
        mb={{base:"10px",md:0}}
      >
        <Button
          size="lg"
          borderRadius="0"
          borderWidth={currentSlide === 0 ? "4px" : "3px"}

          borderColor="black"
          backgroundColor={currentSlide === 0 ? "white" : "transparent"}
          _hover={{
            backgroundColor:
              hoveredButton === 0 ? "transparent" : "transparent",
            
          }}
          _active={{ backgroundColor: "black", transform: "scale(1)" }}
          mb={8}
          onClick={() => handleButtonClick(0)}
          onMouseEnter={() => handleButtonHover(0)}
          onMouseLeave={handleButtonLeave}
          w={`${
            hoveredButton === 0 || currentSlide === 0
              ? activeButtonSize
              : buttonSize
          }rem`}
          h={`${
            hoveredButton === 0 || currentSlide === 0
              ? activeButtonSize
              : buttonSize
          }rem`}
          transition="all 0.2s ease-in-out"
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth={currentSlide === 1 ? "4px" : "3px"}
          borderColor="black"
          ml={{base:"20px",md:0}}

          _hover={{
            backgroundColor:
              hoveredButton === 1 ? "transparent" : "transparent",
              
          }}
          _active={{ backgroundColor: "black", transform: "scale(1)",borderRadius:"10px" }}
          mb={8}
          onClick={() => handleButtonClick(1)}
          onMouseEnter={() => handleButtonHover(1)}
          onMouseLeave={handleButtonLeave}
          backgroundColor={currentSlide === 2 ? "white" : "transparent"}

          w={`${
            hoveredButton === 1 || currentSlide === 1
              ? activeButtonSize
              : buttonSize
          }rem`}
          h={`${
            hoveredButton === 1 || currentSlide === 1
              ? activeButtonSize
              : buttonSize
          }rem`}
          transition="all 0.2s ease-in-out"
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth={currentSlide === 2 ? "4px" : "3px"}
          borderColor="black"
          ml={{base:"20px",md:0}}

          backgroundColor={currentSlide === 2 ? "white" : "transparent"}
          _hover={{
            backgroundColor:
              hoveredButton === 2 ? "transparent" : "transparent",
          }}
          _active={{ backgroundColor: "black", transform: "scale(1)" }}
          mb={8}
          onClick={() => handleButtonClick(2)}
          onMouseEnter={() => handleButtonHover(2)}
          onMouseLeave={handleButtonLeave}
          w={`${
            hoveredButton === 2 || currentSlide === 2
              ? activeButtonSize
              : buttonSize
          }rem`}
          h={`${
            hoveredButton === 2 || currentSlide === 2
              ? activeButtonSize
              : buttonSize
          }rem`}
          transition="all 0.2s ease-in-out"
        />
        <Button
          size="lg"
          borderRadius="0"
          borderWidth={currentSlide === 3 ? "4px" : "3px"}
          borderColor="black"
          ml={{base:"20px",md:0}}
          backgroundColor={currentSlide === 3 ? "white" : "transparent"}

          _hover={{
            backgroundColor:
              hoveredButton === 3 ? "transparent" : "transparent",
          }}
          _active={{ backgroundColor: "black", transform: "scale(1)" }}
          mb={8}
          onClick={() => handleButtonClick(3)}
          onMouseEnter={() => handleButtonHover(3)}
          onMouseLeave={handleButtonLeave}
          w={`${
            hoveredButton === 3 || currentSlide === 3
              ? activeButtonSize
              : buttonSize
          }rem`}
          h={`${
            hoveredButton === 3 || currentSlide === 3
              ? activeButtonSize
              : buttonSize
          }rem`}
          transition="all 0.2s ease-in-out"
        />
      </Flex>{" "}
    </ChakraProvider>
  );
}

export default App;
