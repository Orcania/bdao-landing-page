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

  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);

  const sections = [sec1Ref, sec2Ref, sec3Ref, sec4Ref, sec5Ref, sec6Ref];

  const [currentSection, setCurrentSection] = useState(sec1Ref);

  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPos = scrollY + winHeight / 2;
    for (const s of sections) {
      const bounds = s.current.getBoundingClientRect();
      const margin = parseInt(getComputedStyle(s.current).marginTop);
      const top = bounds.top + scrollY - margin;
      const bottom = bounds.bottom + scrollY - margin;
      if (scrollPos >= top && scrollPos < bottom) {
        setCurrentSection(s);
        setCurrentSlide(sections.indexOf(s));
        break;
      }
    }
  };
  const handleWheel = (e) => {
    e.preventDefault();
    const dir = Math.sign(e.deltaY);

    let nextIdx = sections.indexOf(currentSection) + dir;
    console.log("This is the CURRENT SECTION:", currentSection);
    if (nextIdx < 0) nextIdx = 0;
    if (nextIdx >= sections.length) nextIdx = sections.length;

    sections[nextIdx].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  const buttonStyle = (index) => {
    if (currentSlide === index) {
      return {
        borderWidth: "4px",
        backgroundColor: "white",
        size: { base: "md", md: "lg" },
        h: { md: "3.5rem" },
      };
    } else if (hoveredButton === index) {
      return {
        borderWidth: "3px",
        backgroundColor: "transparent",
        _hover: { backgroundColor: "transparent" },
        size: { base: "sm", md: "md" },
        h: { md: "2.5rem" },
        transition: "all 0.2s ease-in-out",
      };
    } else {
      return {
        borderWidth: "3px",
        backgroundColor: "transparent",
        size: { base: "sm", md: "md" },
        h: { md: "2.5rem" },
        transition: "all 0.2s ease-in-out",
      };
    }
  };
  return (
    <ChakraProvider theme={customTheme}>
      <Box mt={{base:"-20vh"}}>
        <section ref={sec1Ref} className="section sec1">
          <Box className="sec_container">
            <Box className="asd">
              <Box className="asdf">
                <div ref={headerRef}>
                  <Header />
                </div>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      <Box>
        <section
          ref={sec2Ref}
          className="section sec2"
          data-scroll-distance="100%"
        >
          <div ref={sliderRef} className="section">
            <Box h="100vh" mb={{ base: "300px", md: 0 }}>
              <SliderSection />
            </Box>
          </div>
        </section>
      </Box>
      <Box marginTop={{ base: "80%", md: 0 }}>
        <section
          ref={sec3Ref}
          className="section sec3"
          data-scroll-distance="150%"
        >
          <Box className="sec_container">
            <Box className="asd">
              <Box ref={treasuryRef} className="asdf">
                <Treasury />
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      <Box>
        <section
          ref={sec4Ref}
          className="section sec4"
          data-scroll-distance="200%"
        >
          <div ref={governedRef} className="section">
            <Box className="sec_container">
              <Box className="asd">
                <Box className="asdf">
                  <Governed />
                </Box>
              </Box>
            </Box>
          </div>
        </section>
      </Box>
      <Box>
        <section ref={sec5Ref} className="section sec5">
          <Box className="sec_container" height={{base:"150%",md:"100%"}}>
            <Box className="asd">
              <Box className="asdf">
                <Staking />
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      <Box>
        <section ref={sec6Ref} className="section sec6">
          <Box className="sec_container">
            <Box className="asd">
              <Box className="asdf">
                <Contact />
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      <Flex
        direction={{ base: "row", md: "column" }}
        bottom={{ base: 0, md: "50%" }}
        left={{ base: "50%", md: "95%" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        textAlign="center"
        width="10%"
        position="fixed"
        transform="translate(-50%, 50%)"
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
            backgroundColor={{base: currentSlide === 0 ? "white" : "white",md: currentSlide === 0 ? "transparent" : "transparent"}}
            _hover={{
              backgroundColor:
                hoveredButton === 0 ? "transparent" : "transparent",
            }}
            _active={{ backgroundColor: "black", transform: "scale(1)" }}
            mb={8}
            onClick={() => handleButtonClick(0)}
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
            backgroundColor={{base: currentSlide === 1 ? "white" : "white",md: currentSlide === 1 ? "transparent" : "transparent"}}
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
            backgroundColor={{base: currentSlide === 2 ? "white" : "white",md: currentSlide === 2 ? "transparent" : "transparent"}}
            _active={{ backgroundColor: "black", transform: "scale(1)" }}
            mb={8}
            onClick={() => handleButtonClick(2)}
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
            backgroundColor={{base: currentSlide === 3 ? "white" : "white",md: currentSlide === 3 ? "transparent" : "transparent"}}
            _active={{ backgroundColor: "black", transform: "scale(1)" }}
            mb={8}
            onClick={() => handleButtonClick(3)}
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
    </ChakraProvider>
  );
}

export default App;
