import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

export default function StakingCard({ imageSrc, heading, text }) {
  return (
    <Card
      border="1px solid gray"
      textAlign="center"
      borderRadius={3}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        transition: "all .2s ease-in-out",
        cursor: "pointer",
      }}
      w={{ base: "70%", md: "100%" }}
      maxWidth="50vw"
      maxHeight={{ base: "auto", md: "70vh" }}
      h={{ base: "auto", md: "55vh" }}
      p={{base:"0", md:"1"}}
    >
      <CardHeader>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="200px"
          position="relative"
        >
          <Image
            src={imageSrc}
            alt={heading}
            maxW="100%"
            maxH="100%"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            m="auto"
            boxSize={{base:"110px",md:"150px"}}
          />
        </Box>
        <Heading as="h2" fontSize="30px" fontWeight="bold" textAlign="center">
          {heading}
        </Heading>
      </CardHeader>
      <CardBody mb="10%">
        <Text lineHeight="1.2em" fontWeight="bold">{text}</Text>
      </CardBody>
    </Card>
  );
}
