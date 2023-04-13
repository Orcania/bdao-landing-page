//basic imports
import React from "react";
import { useState } from "react";
//Chakra imports
import { Box, Heading, Text, Image, Button,useBreakpointValue,Flex  } from "@chakra-ui/react";

//image imports
import GovernedImg from "../../assets/images/governedImg.png";
const Governed = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

    const imageDisplay = useBreakpointValue({ base: "block", md: "flex" });
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
  return (
    <Box  display={{base:"flex", md: "flex" }} justifyContent="center" mt={{base:"30%",md:"10%"}}>
      <Flex
    flexDirection={{ base: "column-reverse", md: "row" }} // Set the flexDirection
    width="100%"
    justifyContent="center"
  >
      <Box   textAlign={{ base: "center", md: "left" }}
    display={{ md: "flex" }}
    justifyContent="center"
    flexDirection="column"
    w={{base:"100%"}}
    mx={{ md: "auto" }}
   >
        <Heading as="h1" fontWeight="bold" mb="8">
        How is BDAO goverened sustained
        </Heading>
        <Box display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "left", md: "space-between" }}
          alignItems={{ base: "left", md: "center" }}
          >
        <Text mb={{ base: "4", md: "0" }} lineHeight="1.2em" fontWeight="bold">
        Bricklayer DAO is governed by elected active participants (AP) who hold executive and decision-making roles to benefit the BRICK holders’ value.  APs will provide managerial guidance which will be transparent in nature.  
          {showMore || (
           <Button variant="link" textDecor="underline" textDecorationThickness="2px" textUnderlineOffset="4px" color="black" fontWeight="bold" fontSize={{ base: "md", md: "20px" }} onClick={handleShowMore} ml={{ base: "0", md: "0" }} mx="auto" mt={{ base: "30px", md: "30" }} display={{ base: "block", md: "block" }} transition="all 0.2s ease-in-out" _hover={{ color: "gray" }}>
           Read More
        </Button>
          )}
        </Text>
        </Box>
        {showMore && (
          <Box>
          <Text mb="4" lineHeight="1.2em" fontWeight="bold">
            Sed porttitor, justo ac facilisis elementum, ex lorem vestibulum
            libero, id varius lectus mauris vitae tellus. In sollicitudin
            pharetra metus a lacinia. Donec ac odio nunc. Integer interdum
            feugiat mi, vitae dapibus enim eleifend sed. Suspendisse in justo
            finibus, rutrum turpis ac, posuere lacus.
          </Text>
          <Button variant="link" textDecor="underline" textDecorationThickness="2px" textUnderlineOffset="4px" color="black" fontWeight="bold" fontSize={{ base: "md", md: "20px" }} onClick={handleShowMore} ml={{ base: "0", md: "0" }} mx="auto" mt={{ base: "30px", md: "30" }} display={{ base: "block", md: "block" }} transition="all 0.2s ease-in-out" _hover={{ color: "gray" }}>
           Read Less
        </Button>
          </Box>
        )}
      </Box>
      <Box justifyContent="center"
      alignItems="center"
      mt={{ base: "2rem", md: "0" }}
      ml={{base:"25%",md:"5%"}}
      w={{ base: "70vw", md: "80vw" }}>
      <Image  src={GovernedImg} alt="Treasury Image" w="100%" h="auto"  />
      </Box>
      </Flex>
    </Box>

  );
};
export default Governed;
