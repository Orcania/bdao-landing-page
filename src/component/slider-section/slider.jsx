import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { IconButton, Box, Text,Heading } from "@chakra-ui/react";
import "../slider-section/slick-theme.css";
import "../slider-section/slick.css";


function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <IconButton
      className={className}
      aria-label="Previous slide"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      top="50%"
      left="0"
      transform="translateY(-50%)"
      borderRadius="full"
      borderStyle="solid"
      borderColor="black"
      borderWidth="1.5px"
      bg="white"
      color="black"
      _hover={{ bg: "black", color: "white", borderColor: "white" }}
    />
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <IconButton
      className={className}
      aria-label="Next slide"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      top="50%"
      right="0"
      transform="translateY(-50%)"
      borderRadius="full"
      borderWidth="1.5px"
      borderStyle="solid"
      borderColor="black"
      bg="white"
      color="black"
      _hover={{ bg: "black", color: "white", borderColor: "white" }}
    />
  );
}
function CustomDot(props) {
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
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Box borderWidth="1px" borderColor="gray" p="4" marginTop="100px" >
      
        <Slider {...settings}>
        <Box p="20" textAlign="left">
            <Heading as="h6" size="lg">What is REIT ?</Heading>
            <Text marginTop="20px">
              A REIT, or Real Estate Investment Trust, is a type of investment
              company that owns and operates income-producing real estate
              assets. REITs typically own a portfolio of properties that
              generate rental income and subject to capital appreciation. REITs
              distribute at least 90% of its taxable income to shareholders in
              the form of dividends...
            </Text>
          </Box>
          <Box p="20" textAlign="left">
            <Heading as="h6" size="lg">How BDAO uses a DAO structure ?</Heading>
            <Text marginTop="20px">
            Under the DAO governance framework, the members acquire a democratic right to influence the strategic direction of the REIT’s expansion. Members can introduce lucrative real estate opportunities, exercise influence over portfolio development, asset disposal, Active Participant (AP) selection, and diversification proposals via innovative voting systems...
            </Text>
          </Box>
          <Box p="20" textAlign="left">
            <Heading as="h6" size="lg">How BDAO uses blockchain tech ?</Heading>
            <Text marginTop="20px">
            BDAO utilizes blockchain technology and crypto currencies to provide a platform applicable for capital raising via digital assets, dividend distribution, asset management, automated compliance, investor management, custodial systems, and transparency.
            </Text>
          </Box>
        </Slider>
      </Box>
    
  );
};

export default SliderSection;
