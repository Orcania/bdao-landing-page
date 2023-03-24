//basic imports
import React from "react";

//Images imports
import Wallet from "../../assets/images/wallet.png";
import Voting from "../../assets/images/voting.png";
import Poster from "../../assets/images/poster.png";
//file imports
import StakingCard from "./staking-card";
//Chakra imports
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  Box,
  Image,
  Stack,
  Flex
} from "@chakra-ui/react";
const Staking = () => {
  return (
    <SimpleGrid
      spacing={15}
      columns={[1, null, 3]}
      gap={6}
      justifyItems="center"
      mt="15%"
    >

      <StakingCard imageSrc={Wallet}
    heading="ETH Dividends"
    text="By staking their $BRICKS, holders can become Brick Layers and start earning dividends and exclusive perks after just 30 days.
    "     
    />

    <StakingCard imageSrc={Voting}
    heading="Voting Power"
    text="DAO members can vote to impact DAO governance and asset portfolio strategy"  ml="10%" />

    <StakingCard imageSrc={Poster}
    heading="Brickworks Tapestry"
    text="Members who cement $BRICKS in the Tapestry have the right to upload a 4k image to represent individual member participation and self promotion."  ml="18%" />
      

    </SimpleGrid>
  );
};

export default Staking;
