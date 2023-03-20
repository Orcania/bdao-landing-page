import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text,Button } from "@chakra-ui/react";

export default function StakingCard({ imageSrc, heading, text }) {
  return (
    <Card
      border="1px solid gray"
      textAlign="center"
      borderRadius={0}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        transition: "all .2s ease-in-out",
        
      }}
      w={{base:"70%",md:"100%"}}

    >
      <CardHeader>
        <Box display="flex" justifyContent="center" alignItems="center" h="200px" position="relative">
          <Image src={imageSrc} alt={heading} maxW="100%" maxH="100%" position="absolute" top="0" bottom="0" left="0" right="0" m="auto" />
        </Box>
        <Heading size="md" textAlign="center">{heading}</Heading>
      </CardHeader>
      <CardBody mb="10%">
        <Text>{text}</Text>
      </CardBody>
      
    </Card>
  );
}