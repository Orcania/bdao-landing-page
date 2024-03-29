//react imports
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";

import { useFormik } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";

//Chakra imports
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Input,
  Textarea,
  IconButton,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const handleButtonHover = (event) => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    if (event.type === "mouseenter") {
      cursor.classList.add("cursor-gray");
      cursor2.classList.add("cursor2-gray");
    } else {
      cursor.classList.remove("cursor-gray");
      cursor2.classList.remove("cursor2-gray");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      const { email, subject, message } = values;

      axios({
        method: "POST",
        url: `https://bdao.orcania.io/home/contactus?email=${email}&about=${subject}&description=${message}`,
      })
        .then((res) => {
          toast.success("message sent");
        })
        .catch((err) => {
          toast.error("something went wrong, please try again later");
        });
    },
  });

  return (
    <Box
      mt={{ base: "250vh", md: 0 }}
      mb={{ base: "50%", md: "10%" }}
      alignItems="center"
      w="100%"
    >
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Text color="#B3B3B3">Have any questions ?</Text>
        </Box>
        <br />
        <Box>
          <Heading as="h1">Contact us</Heading>
        </Box>
        <br />
        <br />
        <Box display="flex" flexDir={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "30%" }}>
            <Text fontSize="17px" fontWeight="bold">
              Email
            </Text>
            <Input
              borderRadius="3px"
              focusBorderColor="black"
              borderColor="black"
              borderWidth={3}
              height="50px"
              placeholder="example@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            ></Input>
          </Box>
          <Box
            ml={{ base: 0, md: "3%" }}
            w={{ base: "100%", md: "30%" }}
            mt={{ base: "20px", md: 0 }}
            borderColor="black"
          >
            <Text fontSize="17px" fontWeight="bold">
              Subject
            </Text>
            <Input
              borderRadius="3px"
              focusBorderColor="black"
              borderWidth={3}
              height="50px"
              placeholder="Type here..."
              value={formik.values.subject}
              onChange={formik.handleChange}
              name="subject"
            ></Input>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "63%" }}
          borderColor="black"
          mt={{ base: "20px", md: "3%" }}
        >
          <Text fontSize="17px" fontWeight="bold">
            Message
          </Text>
          <Textarea
            borderRadius="3px"
            focusBorderColor="black"
            placeholder="What’s on your mind..."
            size="lg"
            h="20vh"
            borderWidth={3}
            resize="none"
            value={formik.values.message}
            onChange={formik.handleChange}
            name="message"
          ></Textarea>
        </Box>
        <Box display="flex" mt="-5%" flexDirection="row">
          <Button
            mt={4}
            bg="white"
            color="black"
            borderWidth={3}
            borderRadius="3px"
            borderColor="black"
            backgroundColor="transparent"
            _hover={{ bg: "black", color: "white" }}
            size="lg"
            w={{ base: "60vw", md: "100%" }}
            maxWidth={["50%", "170px", "170px"]}
            padding={["8px 20px", "12px 40px", "12px 40px"]}
            marginTop={["50px", "100px", "100px"]}
            display="flex"
            justifyContent="center"
            type="submit"
          >
            Send
            <Box display="inline-block" position="relative" top="0px">
              <ChevronRightIcon style={{ marginLeft: "8px" }} />
            </Box>
          </Button>

          <Box ml={{ base: "10px", md: "10px" }}>
            <IconButton
              mt={4}
              bg="white"
              color="black"
              borderWidth={3}
              borderRadius="3px"
              borderColor="#B5B6C7"
              backgroundColor="transparent"
              _hover={{ bg: "black", color: "white" }}
              size="lg"
              maxWidth={["50%", "170px", "170px"]}
              marginTop={["50px", "100px", "100px"]}
              display="flex"
              justifyContent="center"
              w="0px"
              p="-10px"
              icon={<EmailIcon />}
            ></IconButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default Contact;
