//basic imports
import React from "react";
import { useState } from "react";
//Chakra imports
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

//image imports
import BalanceImg from "../../assets/images/balance.png";
const Treasury = () => {
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
    <Box display={{ md: "flex" }}  >
      <Box  justifyContent="center" alignItems="center" marginTop={{md:"10%"}}>
        <Image
          src={BalanceImg}
          alt="Treasury Image"
          w={{ base: "60vw", md: "200vw" }}
          h="auto"
          mr={{ md: "4" }}
          ml={{ base: "0", md: "0" }}
          display={imageDisplay}
          mb={{ base: "30px", md: "0" }}
          mt={{ base: "30%", md: "0" }}
        />
      </Box>{" "}
      <Box textAlign={{ base: "center", md: "left" }} ml={{md:"10%"}}  marginTop={{md:"20%"}}
             >
        <Heading as="h1" fontWeight="bold" mb="2" >
          How the treasury works
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "left", md: "space-between" }}
          alignItems={{ base: "left", md: "center" }}
          
        >
          <Text mb="4" lineHeight="1.2em" fontWeight="bold" >
            Bricklayer DAO Treasury is designed to reduce risk and ensure
            long-term sustainability and growth of the project. It does so by
            maintaining a 70% weighting in real estate assets and a 30%
            weighting in digital assets, and by taking profits from the digital
            asset portfolio when it exceeds 40% and investing 70% of those
            profits into a Real Estate Opportunity Fund.
            {showMore || (
              <Button  variant="link" textDecor="underline" textDecorationThickness="2px" textUnderlineOffset="4px" color="black" fontWeight="bold" fontSize={{ base: "md", md: "20px" }} onClick={handleShowMore} ml={{ base: "0", md: "0" }} mx="auto" mt={{ base: "30px", md: "30" }} display={{ base: "block", md: "block" }} transition="all 0.2s ease-in-out" _hover={{ color: "gray" }}>
              Read More
           </Button>
            )}
          </Text>
        </Box>
        {showMore && (
          <Box mb={{base:"100vh",md:0}}>
            <Text  lineHeight="1.2em" fontWeight="bold">
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
    </Box>
  );
};
export default Treasury;
