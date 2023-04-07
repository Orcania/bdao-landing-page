import { useState, useRef, useEffect } from "react";
import "./App.css";
import "./style.scss";
// import "./index.js";
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

  const handleButtonHover = (index, event) => {
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
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
  }, []);

  const sec1Ref = useRef('.sec1');
  const sec2Ref = useRef('.sec2');
  const sec3Ref = useRef('.sec3');
  const sec4Ref = useRef('.sec4');
  const sec5Ref = useRef('.sec5');
  const sec6Ref = useRef('.sec6');

  const sections = [sec1Ref, sec2Ref, sec3Ref, sec4Ref, sec5Ref, sec6Ref];

  const [currentSection, setCurrentSection] = useState(sec1Ref.current);

  

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
      if (
        section.offsetTop <= window.pageYOffset &&
        section.offsetTop + section.offsetHeight > window.pageYOffset
      ) {
        setCurrentSection(section);
      }
      console.log(section.offsetTop)
    }
  };

  const handleWheel = (e) => {
    // get direction
    const deltaY = e.deltaY;
    const dir = Math.sign(deltaY);

    // convert to array and find index
    const idx = sections.indexOf(currentSection);

    // using direction find next section
    const nextIdx = idx + dir;

    // check for out of bounds sections
    if (nextIdx < 0 || nextIdx >= sections.length) return;

    // get target dimensions and bounds
    const targetBounds = sections[nextIdx].current.getBoundingClientRect();

    // scroll
    window.scrollTo({
      top: targetBounds.y + window.scrollY ,
      behavior: 'smooth',
    });
    console.log("Wheel");


  };

  useEffect(() => {
    // add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // add event listener for wheel event
    window.addEventListener('wheel', handleWheel);

    // cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

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
          <div>
            <section ref={sec1Ref} className="section sec1">
              <Flex align="center" justify="center" h="100vh">
                <div ref={headerRef} className="section">
                  <Box>
                    <Header />
                  </Box>
                </div>
              </Flex>
            </section>

            <section ref={sec2Ref} className="section sec2">
              <div ref={sliderRef} className="section">
                <Box h="100vh" mb={{ base: "300px", md: 0 }}>
                  <SliderSection />
                </Box>
              </div>
            </section>

            <section ref={sec3Ref} className="section sec3">
              <div ref={treasuryRef} className="section">
                <Box mt={{ base: "auto", md: 0 }}>
                  <Treasury />
                </Box>
              </div>
            </section>

            <section ref={sec4Ref} className="section sec4">
              <div ref={governedRef} className="section">
                <Box mb={10}>
                  <Governed />
                </Box>
              </div>
            </section>
            <section ref={sec5Ref} className="section sec5">
              <Box mb={5}>
                <Staking />
              </Box>
            </section>

            <section ref={sec6Ref} className="section sec6">
              <Box alignItems="center" justify="center">
                <Contact />
              </Box>
            </section>
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
            onMouseEnter={(event) => handleButtonHover(0, event)}
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
            onMouseEnter={(event) => handleButtonHover(1, event)}
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
            onMouseEnter={(event) => handleButtonHover(2, event)}
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
            onMouseEnter={(event) => handleButtonHover(3, event)}
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
      <div className="cursor" display={{ base: "none" }}></div>
      <div className="cursor2" display={{ base: "none" }}></div>
    </ChakraProvider>
  );
}

export default App;
