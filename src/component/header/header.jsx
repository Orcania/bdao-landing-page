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

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import BannerScene from "../banner-scene";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useBreakpointValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React, { useRef } from "react";


import Brick from "../../assets/images/brick.png";

// extend({ OrbitControls });

// function Controls() {
//   const controls = useRef();
//   const { camera, gl } = useThree();
//   useFrame(() => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, gl.domElement]}
//       enableDamping
//       dampingFactor={0.1}
//       rotateSpeed={0.5}
//     />
//   );
// }

function Scene() {
  return (
    <Canvas>
      {/* <gridHelper args={[20, 20, 0xff0000, "teal"]} /> */}
      {/* <color attach="background" args={["#282c34"]} /> */}
      <ambientLight intensity={0.5} color={0xad645e} />
      {/* <Controls /> */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[10, 10, -10]} intensity={1} />
      <BannerScene />
      <OrbitControls
        enableZoom={false} // Disable zooming
        enablePan={false} // Disable panning
        enableRotate={true} // Enable rotation
        // Limit the rotation angle (optional)
         // Limit the rotation angle (optional)
      />
    </Canvas>
  );
}

const Header = (content) => {
  const texts = useBreakpointValue({ base: "justify", md: "left" });
  const isMobile = useBreakpointValue({ base: true, md: false });
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
  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column-reverse" : "row"}
      justifyContent="center"
      alignItems="center"
    >
      <Box width={isMobile ? "100%" : "50%"}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          h="100%"
          textAlign={isMobile ? "center" : "left"}
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
              className={content}
              mt={4}
              bg="transparent"
              color="black"
              borderWidth={3}
              borderColor="black"
              borderRadius="none"
              _hover={{ bg: "black", color: "white" }}
              size="lg"
              width={{ md: "2000px" }}
              h="6vh"
              maxWidth={["50%", "200px", "200px"]}
              padding={["8px 20px", "12px 40px", "25px 40px"]}
              marginTop={["50px", "100px", "100px"]}
            >
              Launch app
              <Box display="inline-block" position="relative" top="2px">
                <FaArrowRight style={{ marginLeft: "8px" }} />
              </Box>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box width={isMobile ? "100%" : "50%"}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={{ base: "90%", md: "100%" }}
          height={{ base: "400px", md: "600px" }}
          
        >
          <Scene />
          {/* <Image
            src={Brick}
            alt="Placeholder"
            width="100%"
            height="100%"
            objectFit="cover"
            ml={isMobile ? "0" : "20%"}
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
