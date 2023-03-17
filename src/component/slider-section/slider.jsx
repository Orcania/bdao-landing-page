import React, { useContext } from "react";
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

function getNextSlideTitle(nextSlideIndex) {
  switch (nextSlideIndex) {
    case 0:
      return "What is REIT?";
    case 1:
      return "How BDAO uses a DAO structure?";
    case 2:
      return "How BDAO uses blockchain tech?";
    default:
      return "";
  }
}

function NextArrow(props) {
  const { className, onClick, currentSlide, slideCount } = props;

  const nextSlideIndex = (currentSlide + 1) % slideCount;
  const nextSlideTitle = getNextSlideTitle(nextSlideIndex);

  return (
    <Box>
      <Text>{nextSlideTitle}</Text>
      <IconButton
        className={className}
        aria-label="Next slide"
        icon={<ChevronRightIcon />}
        onClick={onClick}
        position="absolute"
        top="50%"
        right={useBreakpointValue({ base: -10, md: 0 })}
        transform="translateY(-50%)"
        borderRadius="full"
        borderWidth="1.5px"
        borderStyle="solid"
        borderColor="black"
        bg="white"
        color="black"
        _hover={{ bg: "black", color: "white", borderColor: "white" }}
      />
    </Box>
  );
}
function CustomDot(props) {
  //Customized navigational dots below the slider
  const { onClick, active } = props;
  const activeClass = active ? "active" : "";
  return (
    <button
      onClick={onClick}
      className={`custom-dot ${activeClass}`}
      style={{
        width: "10px",
        height: "10px",
        margin: "0 8px",
        borderRadius: "50%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",

        background: active ? "black" : "none",
        marginTop: "30px",
      }}
    />
  );
}

const SliderSection = () => {
  //Component integration
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showText, setShowText] = React.useState({});

  const handleReadMoreClick = (slideIndex) => {
    //handling read more button
    setShowText((prev) => ({
      ...prev,
      [slideIndex]: !prev[slideIndex],
    }));
  };

  const handleSlideChange = (current, next) => {
    setCurrentSlide(next);
    setShowText((prev) => ({
      ...prev,
      [current]: false,
      [next]: false,
    }));
  };
  const slideCount = 3;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <NextArrow currentSlide={currentSlide} slideCount={3} />,
    customPaging: (i) => (
      <CustomDot
        onClick={() => setCurrentSlide(i)}
        active={currentSlide === i}
      />
    ),
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul
          style={{
            margin: "0px",
            padding: "0px",
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    beforeChange: handleSlideChange,
  };
  const images = [Magnifier, Earth, Phone];
  const getNextSlideTitle = () => {
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
  return (
    <Box display="flex" flexDirection={{ base: "column-reverse", md: "row" }}>
      
      <Box
        width={{ base: "100%", md: "70%" }}
        p={{ base: "4", md: "2" }}
        mt={{ base: "0", md: "100px" }}
        textAlign={{ base: "center", md: "left" }}
        borderWidth={{ base: "0", md: "1px" }}
  borderColor={{ base: "transparent", md: "black" }}
        
      >
        <Slider ref={sliderRef} {...settings}>
          {[0, 1, 2].map((slideIndex) => (
            <Box key={slideIndex} p={{ base: "4", md: "20" }} textAlign="left">
              <Heading as="h6" size={{ base: "md", md: "lg" }} textAlign={{ base: "center", md: "left" }}>
                {slideIndex === 0 && "What is REIT?"}
                {slideIndex === 1 && "How BDAO uses a DAO structure?"}
                {slideIndex === 2 && "How BDAO uses blockchain tech?"}
              </Heading>
              <Text mt={{ base: "2", md: "4" }} textAlign={{ base: "center", md: "left" }}>
                {slideIndex === 0 &&
                  "A REIT, or Real Estate Investment Trust, is a type of investment company that owns and operates income-producing real estate assets. REITs typically own a portfolio of properties that generate rental income and subject to capital appreciation. REITs distribute at least 90% of its taxable income to shareholders in the form of dividends"}
                {slideIndex === 1 &&
                  "Under the DAO governance framework, the members acquire a democratic right to influence the strategic direction of the REIT’s expansion. Members can introduce lucrative real estate opportunities, exercise influence over portfolio development, asset disposal, Active Participant (AP) selection, and diversification proposals via innovative voting systems"}
                {slideIndex === 2 &&
                  "BDAO utilizes blockchain technology and crypto currencies to provide a platform applicable for capital raising via digital assets, dividend distribution, asset management, automated compliance, investor management, custodial systems, and transparency."}
              </Text>
              {!showText[slideIndex] && (
                <Box textAlign={{ base: "center", md: "left" }}>
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
                    Vivamus ultricies augue a mauris imperdiet, quis convallis
                    sapien efficitur. Nam tristique ligula vel urna venenatis
                    malesuada. Nam commodo, arcu quis facilisis laoreet, neque
                    magna pulvinar sapien, id dignissim mauris quam in massa.
                    Sed in tellus commodo, congue velit eu, posuere metus. Fusce
                    bibendum commodo metus non varius. Nam nec leo eget nisl
                    pharetra iaculis vel eu augue. Aenean a lectus eu nisl
                    finibus ultricies. Vestibulum nec nisl vestibulum, egestas
                    turpis sed, rutrum est. Morbi sit amet
                  </Text>
                </>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
      
      <Box textAlign="center" mt={{ base: "2", md: "0" }} >
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
      
      <Box
       width={{ base: "100%", md: "30%" }}
       display="flex"
       flexDirection="row"
       alignItems="flex-end"
       mt={{ base: "2", md: "0" }}
      >
        
          <Button
            onClick={() => {
              const nextSlide = (currentSlide + 1) % slideCount;
              setCurrentSlide(nextSlide);
              sliderRef.current.slickNext();
            }}
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
    </Box>
  );
};

export default SliderSection;
