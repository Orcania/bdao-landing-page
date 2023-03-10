import { Grid, GridItem, Box, Text, Button, Image, Heading } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Brick from "../../assets/images/brick.png"

const Header =()=> {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
        <GridItem justifyContent="center" alignItems="center">
          <Box textAlign="left" display="flex" flexDirection="column" justifyContent="center" h="100%" marginLeft="50px">
            <Heading as="h1" size="2xl" >Bricklayer DAO</Heading>
            <Text mt={4} >
              Bricklayer DAO is a REIT that operates on the blockchain and is governed by its token/coin holders
            </Text>
            <Button mt={4}
              bg="white"
              color="black"
              borderWidth="2px"
              borderRadius="none"
              _hover={{ bg: "black", color: "white" }}
              size="lg"
              maxWidth={["50%", "170px", "170px"]}
              padding={["8px 20px", "12px 40px", "12px 40px"]}
              marginTop={["50px", "100px", "100px"]}
            >
              Launch App
              <Box display="inline-block" position="relative" top="2px" >
                <FaArrowRight style={{ marginLeft: "8px" }} />
              </Box>
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Image src={Brick} alt="Placeholder" maxWidth={["100%", "450px", "450px"]} margin={["50px 0 0 0", "50px 0 0 0", "50px 0 0 100px"]} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Header;