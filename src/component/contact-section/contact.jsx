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
        <Text color="#B3B3B3">Have any questions ?</Text>
      </Box>
      <br />
      <Box>
        <Heading as="h1">Contact us</Heading>
      </Box>
      <br />
      <br />
      <Box display="flex"  flexDir={{base:"column", md:"row"}}>
        <Box w={{base:"100%",md:"30%"}}>
          <Input
            borderRadius="3px"
            focusBorderColor="black"
            borderColor="black"
            borderWidth="2px"
            placeholder="Ex : jacktent@gmail.com"
          ></Input>
        </Box>
        <Box ml={{base:0, md:"3%"}} w={{base:"100%",md:"30%"}} mt={{base:"20px",md:0}} borderColor="black">
          <Input
            borderRadius="3px"
            focusBorderColor="black"
            borderWidth="2px"
            placeholder="Type Here..."
          ></Input>
        </Box>
      </Box>
      <Box w={{base:"100%",md:"63%"}} borderColor="black" mt={{base:"20px",md:"3%"}}>
        <Textarea
            borderRadius="3px"
            focusBorderColor="black"
          placeholder="What’s on your mind..."
          size="lg"
          h="20vh"
          borderWidth="2px"
          resize="none"
        ></Textarea>
      </Box>
      <Box display="flex" mt="-5%" flexDirection="row"   >
        
          <Button
            mt={4}
            bg="white"
            color="black"
            borderWidth="2px"
            borderRadius="3px"
            borderColor="black"
            _hover={{ bg: "black", color: "white" }}
            size="lg"
            w={{base:"60vw",md:"100%"}}
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
        
        <Box ml={{base:"10px",md:"10px"}}>
          <IconButton
            mt={4}
            bg="white"
            color="black"
            borderWidth="1.5px"
            borderRadius="3px"
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
