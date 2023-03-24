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

export default function StakingCard({ imageSrc, heading, text,ml }) {
  return (
    <Card
    border="1px solid gray"
  textAlign="center"
  borderRadius={3}
    ml={{base:"0",md:{ml}}}
  transition="transform 0.2s ease-in-out"
  _hover={{
    transform: "translateY(-15px)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  }}
  w={{ base: "70%", md: "100%" }}
  maxWidth="100%px"
  h={{ base: "auto", md: "auto" }}
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
