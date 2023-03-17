//basic imports
import React from "react";
import { useState } from "react";
//Chakra imports
import { Box, Heading, Text, Image, Button,useBreakpointValue  } from "@chakra-ui/react";

//image imports
import GovernedImg from "../../assets/images/governedImg.png";
const Governed = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

    const imageDisplay = useBreakpointValue({ base: "block", md: "flex" });

  return (
    <Box  display={{ md: "flex" }} justifyContent="center" marginTop="10%" p="20">
      <Box textAlign={{ base: "center", md: "left" }} marginTop="100px" display={{ md: "flex" }} justifyContent="center" flexDirection="column">
        <Heading as="h2" fontSize="2xl" mb="2">
        How is BDAO goverened sustained
        </Heading>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "left", md: "space-between" }} alignItems={{ base: "left", md: "center" }}>
        <Text mb="4" >
        Bricklayer DAO is governed by elected active participants (AP) who hold executive and decision-making roles to benefit the BRICK holders’ value.  APs will provide managerial guidance which will be transparent in nature.  
          {showMore || (
            <Button variant="link" textDecor="underline" color="black" onClick={handleShowMore} ml={{ base: "0", md: "0" }} mx="auto" mt={{ base: "30px", md: "0" }} display={{ base: "block", md: "block" }} transition="all 0.2s ease-in-out" _hover={{ color: "gray" }}>
               Read More
            </Button>
          )}
        </Text>
        </Box>
        {showMore && (
          <>
          <Text mb="4">
            Sed porttitor, justo ac facilisis elementum, ex lorem vestibulum
            libero, id varius lectus mauris vitae tellus. In sollicitudin
            pharetra metus a lacinia. Donec ac odio nunc. Integer interdum
            feugiat mi, vitae dapibus enim eleifend sed. Suspendisse in justo
            finibus, rutrum turpis ac, posuere lacus.
          </Text>
          <Button variant="link" color="black" onClick={handleShowMore} display="block" textDecor="underline" transition="all 0.2s ease-in-out" _hover={{ color: "gray" }} ml={{ base: "0", md: "0" }} mx={{ base: "auto", md: "0" }}>
              Read Less
            </Button>
          </>
        )}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Image src={GovernedImg} alt="Treasury Image" w={{ base: "100%", md: "80vw" }} h="100%" ml="30%"  />
      </Box>
    </Box>
  );
};
export default Governed;
