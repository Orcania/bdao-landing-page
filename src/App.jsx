import { useState, useRef, useEffect } from "react";
import "./App.css";

//Chakra imports
import { ChakraProvider, Tooltip } from "@chakra-ui/react";

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

  const [scrollDirection, setScrollDirection] = useState(""); //setting a scroll direction according to user's direction of scroll

  const [hoveredButton, setHoveredButton] = useState(-1);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
    setHoveredButton(index);

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
  
  const handleButtonHover = (index,event) => {
    setHoveredButton(index);
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    if (event.type === "mouseenter") {
      cursor.classList.add("cursor-gray");
      cursor2.classList.add("cursor2-gray");
    } 
  };

  const handleButtonLeave = () => {
    setHoveredButton(-2);
    const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");
  cursor.classList.remove("cursor-gray");
  cursor2.classList.remove("cursor2-gray");
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

  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
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
          <div >
            <Flex align="center" justify="center" h="100vh">
              <div ref={headerRef} className="section">
                <Box>
                  <Header />
                </Box>
              </div>
            </Flex>

            <div ref={sliderRef} className="section">
              <Box h="100vh" mb={{ base: "300px", md: 0 }}>
                <SliderSection />
              </Box>
            </div>

            <div ref={treasuryRef} className="section">
              <Box mt={{ base: "auto", md: 0 }}>
                <Treasury />
              </Box>
            </div>

            <div ref={governedRef} className="section">
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
          </div>
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
        mb={{ base: "10px", md: 0 }}
      >
        <Tooltip label="Brick Section" placement="top">
          <Button
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
            onMouseEnter={(event) => handleButtonHover(0,event)}
            onMouseLeave={handleButtonLeave}
            size={{
              base: `${currentSlide === 0 ? "md" : "sm"}`,
              md: `${currentSlide === 0 ? "lg" : "md"}`,
            }}
            h={{
              md: `${currentSlide === 0 ? 3.5 : 2.5}rem`,
            }}
            transition="all 0.2s ease-in-out"
          />
        </Tooltip>
        <Tooltip label="Slider Section" placement="top">
          <Button
            borderRadius="0"
            borderWidth={currentSlide === 1 ? "4px" : "3px"}
            borderColor="black"
            ml={{ base: "20px", md: 0 }}
            _active={{ backgroundColor: "black", transform: "scale(1)" }}
            mb={8}
            onClick={() => handleButtonClick(1)}
            onMouseEnter={(event) => handleButtonHover(1,event)}
            onMouseLeave={handleButtonLeave}
            backgroundColor={currentSlide === 1 ? "white" : "transparent"}
            size={{
              base: `${currentSlide === 1 ? "md" : "sm"}`,
              md: `${currentSlide === 1 ? "lg" : "md"}`,
            }}
            h={{
              md: `${currentSlide === 1 ? 3.5 : 2.5}rem`,
            }}
            transition="all 0.2s ease-in-out"
          />
        </Tooltip>
        <Tooltip label="Treasury Section" placement="top">
          <Button
            borderRadius="0"
            borderWidth={currentSlide === 2 ? "4px" : "3px"}
            borderColor="black"
            ml={{ base: "20px", md: 0 }}
            backgroundColor={currentSlide === 2 ? "white" : "transparent"}
            _active={{ backgroundColor: "black", transform: "scale(1)" }}
            mb={8}
            onClick={() => handleButtonClick(2)}
            onMouseEnter={(event) => handleButtonHover(2,event)}
            onMouseLeave={handleButtonLeave}
            size={{
              base: `${currentSlide === 2 ? "md" : "sm"}`,
              md: `${currentSlide === 2 ? "lg" : "md"}`,
            }}
            h={{
              md: `${currentSlide === 2 ? 3.5 : 2.5}rem`,
            }}
            transition="all 0.2s ease-in-out"
          />
        </Tooltip>
        <Tooltip label="Governed Section" placement="top">
          <Button
            borderRadius="0"
            borderWidth={currentSlide === 3 ? "4px" : "3px"}
            borderColor="black"
            ml={{ base: "20px", md: 0 }}
            backgroundColor={currentSlide === 3 ? "white" : "transparent"}
            _active={{ backgroundColor: "black", transform: "scale(1)" }}
            mb={8}
            onClick={() => handleButtonClick(3)}
            onMouseEnter={(event) => handleButtonHover(3,event)}
            onMouseLeave={handleButtonLeave}
            size={{
              base: `${currentSlide === 3 ? "md" : "sm"}`,
              md: `${currentSlide === 3 ? "lg" : "md"}`,
            }}
            h={{
              md: `${currentSlide === 3 ? 3.5 : 2.5}rem`,
            }}
            transition="all 0.2s ease-in-out"
          />
        </Tooltip>
      </Flex>{" "}
      <div className="cursor" display={{base:'none'}}></div>
      <div className="cursor2"display={{base:'none'}}></div>
    </ChakraProvider>
  );
}

export default App;
