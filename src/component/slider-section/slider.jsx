import React, { useContext, useState, useRef } from "react";
import Slider from "react-slick";

//Chakra Imports
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Box,
  Text,
  Heading,
  Button,
  useBreakpointValue,
  Grid,
  GridItem,
  Image,
  HStack,
  Flex,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
//Css imports
import "../slider-section/slick-theme.css";
import "../slider-section/slick.css";

//image imports
import Magnifier from "../../assets/images/magnifier.png";
import Earth from "../../assets/images/earth.png";
import Phone from "../../assets/images/phone.png";

import data from "./slider-data";

const SliderSection = () => {
  //Component integration
  const sliderRef = useRef(null); // Store a reference to the slider component
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = React.useState({});
  const [slider, setSlider] = useState(null); // Store a reference to the slider component

  const handleReadMoreClick = (slideIndex) => {
    //handling read more button
    setShowText((prev) => ({
      ...prev,
      [slideIndex]: !prev[slideIndex],
    }));
  };

  const slideCount = 3;

  //list of images used here
  const images = [Magnifier, Earth, Phone];

  const getNextSlideTitle = () => {
    //getting upcoming title
    const nextSlide = (currentSlide + 1) % slideCount;
    let title = "";
    if (nextSlide === 0) {
      title = "What is REIT?";
    } else if (nextSlide === 1) {
      title = "How BDAO uses a DAO structure?";
    } else if (nextSlide === 2) {
      title = "How BDAO uses blockchain tech?";
    }
    return title;
  };

  const nextSlide = () => {
    sliderRef.current.slickNext(); // Call the slickNext method to go to the next slide
  };

  //react-slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const handleButtonHover = (event) => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    if (event.type === "mouseenter") {
      cursor.classList.add("cursor-gray");
      cursor2.classList.add("cursor2-gray");
    } else {
      cursor.classList.remove("cursor-gray");
      cursor2.classList.remove("cursor2-gray");
    }
  };
  const goToSlide = (id) => {
    sliderRef.current.slickGoTo(id - 1); // Subtract 1 from the id before passing it to the slickGoTo method
    setCurrentSlide(id - 1); // Update the current slide index
  };

  const slides = [
    //slide indexes
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <div>
      <Box
        display="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        w="auto"
      >
        <Box
          width={{ base: "100%", md: "70%" }}
          p={{ base: "4", md: "2" }}
          mt={{ base: "0", md: "100px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box
            border
            borderWidth={{ base: "0", md: 3 }}
            borderColor={{ base: "transparent", md: "#AEAEAE" }}
            borderRadius={4}
            marginTop={{md:"10%"}}
          >
            <Slider ref={sliderRef} {...settings}>
              {data.map((item, slideIndex) => (
                <Box p={{ base: "4", md: "20" }} textAlign="left">
                  <Heading
                    as="h1"
                    size="lg"
                    fontWeight="bold"
                    textAlign={{ base: "center", md: "left" }}
                    mb="5%"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    mt={{ base: "2", md: "4" }}
                    textAlign={{ base: "center", md: "left" }}
                    lineHeight="1.2em"
                    fontWeight="bold"
                  >
                    {item.description}
                  </Text>
                  {!showText[slideIndex] && (
                    <Box
                      display={{ base: "flex", md: "block" }}
                      justifyContent={{ base: "center" }}
                    >
                      <Button
                        onClick={() => handleReadMoreClick(slideIndex)}
                        variant="link"
                        textDecor="underline"
                        textDecorationThickness="2px"
                        textUnderlineOffset="4px"
                        color="black"
                        fontWeight="bold"
                        fontSize={{ base: "md", md: "20px" }}
                        ml={{ base: "0", md: "0" }}
                        mx="auto"
                        mt={{ base: "30px", md: "30" }}
                        display={{ base: "block", md: "block" }}
                        transition="all 0.2s ease-in-out"
                        _hover={{ color: "gray" }}
                      >
                        Read more
                      </Button>
                    </Box>
                  )}
                  {showText[slideIndex] && (
                    <>
                      <Text
                        mt={{ base: "2", md: "4" }}
                        lineHeight="1.2em"
                        fontWeight="bold"
                        textAlign={{ base: "center", md: "left" }}
                      >
                        {item.extraDescription}
                      </Text>
                    </>
                  )}
                </Box>
              ))}
            </Slider>
          </Box>
          <Box mt="10px" display="flex" flexDirection="row">
            
            <Box
              display="flex"
              width={{ base: "100%", md: "50%" }}
              justifyContent={{ base: "center", md: "left" }}
              
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    borderWidth: "2px",
                    borderColor: "gray",
                    borderStyle: "solid", // Add this to make the border visible

                    backgroundColor:
                      currentSlide === slide.id - 1 ? "black" : "transparent",
                    margin: "5px 5px",
                    cursor: "pointer",
                  }}
                  onClick={() => goToSlide(slide.id)}
                />
              ))}
            </Box>
            <Box
              textAlign="right"
              width="50%"
              justifyContent="flex-end"
              float={{ base: "center", md: "right" }}
              display={{ base: "none", md: "block" }}
              
            >
              <Button
                onClick={nextSlide}
                variant="link"
                textDecor="underline"
                color="black"
                transition="all 0.2s ease-in-out"
                _hover={{ color: "gray" }}
                textDecorationThickness="2px"
                textUnderlineOffset="4px"
                fontWeight="bold"
                fontSize={{ base: "md", md: "20px" }}
              >
                <HStack>
                  <span>
                    <Text fontSize="90%">Next: {getNextSlideTitle()}</Text>
                  </span>
                  <ArrowForwardIcon boxSize={5} color="black" />
                </HStack>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          alignItems="center"
          mt={{ base: "2", md: "0 " }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src={
              currentSlide === 2 ? images[currentSlide] : images[currentSlide]
            }
            alt="Example image"
            objectFit="cover"
            order={1}
            ml={{ base: "0", md: 0 }}
            mr={{ base: 0, md: "0" }}
            w={{ base: "30vw", md: "100%" }}
            maxWidth={{base:"65vw",md:"100%"}}
            bg="white"
            mb={{ base: "30px", md: 0 }}
            mt={
              currentSlide === 2
                ? { base: "0", md: "0" }
                : { base: "0", md: "20%" }
            }
            boxSize={
              currentSlide === 2
                ? {  md: "600px" }
                : { md: "380px" }
            }
            backgroundColor="transparent"

          />
        </Box>
      </Box>
    </div>
  );
};

export default SliderSection;
