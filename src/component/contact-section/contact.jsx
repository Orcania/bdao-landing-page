//react imports
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";

//Chakra imports
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Input,
  Textarea,
  IconButton
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box mt="30%" mb="10%"   w="100%" >
      <Box >
        <Text color="gray">Have any questions ?</Text>
      </Box>
      <br />
      <Box>
        <Heading as="h1">Contact us</Heading>
      </Box>
      <br />
      <br />
      <Box display="flex">
        <Box w="30%">
          <Input
            borderRadius="0"
            focusBorderColor="black"
            borderColor="black"
            borderWidth="2px"
            placeholder="Ex : jacktent@gmail.com"
          ></Input>
        </Box>
        <Box ml="3%" w="30%" borderColor="black">
          <Input
            borderRadius="0"
            focusBorderColor="black"
            borderWidth="2px"
            placeholder="Type Here..."
          ></Input>
        </Box>
      </Box>
      <Box w="63%" borderColor="black" mt="3%">
        <Textarea
          borderRadius="0"
          focusBorderColor="black"
          placeholder="What’s on your mind..."
          size="lg"
          h="20vh"
          borderWidth="2px"
          resize="none"
        ></Textarea>
      </Box>
      <Box display="flex" mt="-5%"  >
        <Box>
          <Button
            mt={4}
            bg="white"
            color="black"
            borderWidth="2px"
            borderRadius="none"
            borderColor="black"
            _hover={{ bg: "black", color: "white" }}
            size="lg"
            maxWidth={["50%", "170px", "170px"]}
            padding={["8px 20px", "12px 40px", "12px 40px"]}
            marginTop={["50px", "100px", "100px"]}
            display="flex"
            justifyContent="center"
          >
            Send
            <Box display="inline-block" position="relative" top="0px">
              <ChevronRightIcon style={{ marginLeft: "8px" }} />
            </Box>
          </Button>
        </Box>
        <Box ml="1%">
          <IconButton
            mt={4}
            bg="white"
            color="black"
            borderWidth="1.5px"
            borderRadius="none"
            borderColor="#CBCBCB"
            _hover={{ bg: "black", color: "white" }}
            size="lg"
            maxWidth={["50%", "170px", "170px"]}
            marginTop={["50px", "100px", "100px"]}
            display="flex"
            justifyContent="center"
            w="0px"
            p="-10px"
            icon={<EmailIcon />}
          >
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
