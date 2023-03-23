import {
  Grid,
  GridItem,
  Box,
  Text,
  Button,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Brick from "../../assets/images/brick.png";

const Header = () => {
  const texts = useBreakpointValue({ base: "center", md: "left" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
        <GridItem justifyContent="center" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            h="100%"
          >
            <Heading as="h1" fontWeight="bold" fontSize="50px" textAlign={texts}>
              Bricklayer DAO
            </Heading>
            <Text mt={4} textAlign={texts} lineHeight="1.2em" fontWeight="bold">
              Bricklayer DAO is a REIT that operates on the blockchain and is
              governed by its token/coin holders
            </Text>
            <Flex justify={isMobile ? "center" : "flex-start"}>
              <Button
                mt={4}
                bg="white"
                color="black"
                borderWidth="2px"
                borderColor="black"
                borderRadius="none"
                _hover={{ bg: "black", color: "white" }}
                size="lg"
                width={{md:"2000px"}}
                h="6vh" 
                maxWidth={["50%", "200px", "200px"]}
                padding={["8px 20px", "12px 40px", "12px 40px"]}
                marginTop={["50px", "100px", "100px"]}
              >
                <Text>Launch app</Text>
                <Box display="inline-block" position="relative" top="2px">
                  <FaArrowRight style={{ marginLeft: "8px" }} />
                </Box>
              </Button>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height={isMobile ? "100%" : "100%"}
          >
            <Image
              src={Brick}
              alt="Placeholder"
              width={{ base: "90%", md: "100%" }}
              height="100%"
              objectFit="cover"
              ml="20%"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
