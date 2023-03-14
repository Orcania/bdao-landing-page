//basic imports
import React from "react";
import { useState } from "react";
//Chakra imports
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

//image imports
import BalanceImg from "../../assets/images/balance.png";
const Treasury = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(true);
    };
  return (
    <Box display="flex" marginTop="10%">
      <Image src={BalanceImg} alt="Treasury Image" w="40%" h="100%" mr="4" />
      <Box textAlign="left" marginTop="100px" marginLeft="30px">
        <Heading as="h2" fontSize="2xl" mb="2">
          How the treasury works
        </Heading>
        <Text mb="4">
          Bricklayer DAO Treasury is designed to reduce risk and ensure
          long-term sustainability and growth of the project. It does so by
          maintaining a 70% weighting in real estate assets and a 30% weighting
          in digital assets, and by taking profits from the digital asset
          portfolio when it exceeds 40% and investing 70% of those profits into
          a Real Estate Opportunity Fund. 
          {showMore || (
            <Button variant="link" color="black" onClick={handleShowMore} marginLeft="5px">
               Read More
            </Button>
          )}
        </Text>
        {showMore && (
          <Text mb="4">
            Sed porttitor, justo ac facilisis elementum, ex lorem vestibulum
            libero, id varius lectus mauris vitae tellus. In sollicitudin
            pharetra metus a lacinia. Donec ac odio nunc. Integer interdum
            feugiat mi, vitae dapibus enim eleifend sed. Suspendisse in justo
            finibus, rutrum turpis ac, posuere lacus.
          </Text>
        )}
      </Box>
    </Box>
  );
};
export default Treasury;
