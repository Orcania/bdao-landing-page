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
      <Box display="flex" flexDirection={{ base: "column-reverse", md: "row" }}>
        <Box
          width={{ base: "100%", md: "70%" }}
          p={{ base: "4", md: "2" }}
          mt={{ base: "0", md: "100px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box
            borderWidth={{ base: "0", md: "1px" }}
            borderColor={{ base: "transparent", md: "black" }}
            borderRadius={4}
          >
            <Slider ref={sliderRef} {...settings}>
              {data.map((item, slideIndex) => (
                <Box p={{ base: "4", md: "20" }} textAlign="left">
                  <Heading
                    as="h6"
                    size={{ base: "md", md: "lg" }}
                    textAlign={{ base: "center", md: "left" }}
                    mb="5%"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    mt={{ base: "2", md: "4" }}
                    textAlign={{ base: "center", md: "left" }}
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
                        mt={{ base: "2", md: "4" }}
                        variant="link"
                        textDecor="underline"
                        color="black"
                        transition="all 0.2s ease-in-out"
                        _hover={{ color: "gray" }}
                      >
                        Read more
                      </Button>
                    </Box>
                  )}
                  {showText[slideIndex] && (
                    <>
                      <Text mt={{ base: "2", md: "4" }}>
                        {item.extraDescription}
                      </Text>
                    </>
                  )}
                </Box>
              ))}
            </Slider>
          </Box>
          <Box mt="10px">
            <Box textAlign="right" width="50%" float={{base:"center", md:"right"}} display={{base:"none",md:"block"}} >
              <Button
                onClick={nextSlide}
                variant="link"
                textDecor="underline"
                color="black"
                transition="all 0.2s ease-in-out"
                _hover={{ color: "gray" }}
              >
                <HStack>
                  <span>Next: {getNextSlideTitle()}</span>
                  <ArrowForwardIcon boxSize={5} color="black" />
                </HStack>
              </Button>
            </Box>
            <Box display="flex" width={{base:"100%", md:"50%"}}   justifyContent={{base:"center",md:"left"}}>
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    borderWidth: "1px",
                    borderColor: "black",

                    backgroundColor:
                      currentSlide === slide.id - 1 ? "black" : "white",
                    margin: "5px 5px",
                    cursor: "pointer",
                  }}
                  onClick={() => goToSlide(slide.id)}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box textAlign="center" mt={{ base: "2", md: "0" }}>
          <Image
            src={images[currentSlide]}
            alt="Example image"
            objectFit="cover"
            order={1}
            ml={{ base: "20%", md: 0 }}
            mr={{ base: 0, md: "50%" }}
            w={{ base: "60%", md: "100%" }}
            bg="white"
            mb={{ base: "30px", md: 0 }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default SliderSection;
