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

  return (
    <Box display={{ md: "flex" }} marginTop="20%">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={BalanceImg}
          alt="Treasury Image"
          w={{ base: "60vw", md: "100vw" }}
          h="100%"
          mr={{ md: "4" }}
          ml={{ base: "0", md: "0" }}
          display={imageDisplay}
          mb={{ base: "-60px", md: "0" }}
          mt={{ base: "30%", md: "0" }}
        />
      </Box>{" "}
      <Box textAlign={{ base: "center", md: "left" }} marginTop="100px" ml={{md:"10%"}}>
        <Heading as="h2" fontSize="2xl" mb="2">
          How the treasury works
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "left", md: "space-between" }}
          alignItems={{ base: "left", md: "center" }}
        >
          <Text mb="4">
            Bricklayer DAO Treasury is designed to reduce risk and ensure
            long-term sustainability and growth of the project. It does so by
            maintaining a 70% weighting in real estate assets and a 30%
            weighting in digital assets, and by taking profits from the digital
            asset portfolio when it exceeds 40% and investing 70% of those
            profits into a Real Estate Opportunity Fund.
            {showMore || (
              <Button
                variant="link"
                textDecor="underline"
                color="black"
                onClick={handleShowMore}
                ml={{ base: "0", md: "0" }}
                mx="auto"
                mt={{ base: "30px", md: "0" }}
                display={{ base: "block", md: "block" }}
                transition="all 0.2s ease-in-out"
                _hover={{ color: "gray" }}
              >
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
            <Button
              variant="link"
              color="black"
              onClick={handleShowMore}
              display="block"
              textDecor="underline"
              transition="all 0.2s ease-in-out"
              _hover={{ color: "gray" }}
              ml={{ base: "0", md: "0" }}
              mx={{ base: "auto", md: "0" }}
            >
              Read Less
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
export default Treasury;
