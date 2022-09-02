import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../reutilizable/Card";
import Header from "../reutilizable/Header";
import Slides from "../reutilizable/Slides";
import background from "../../images/background.jpg";

function Homepage() {
  return (
    
    <Box
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      background="cover"
      backdropFilter="blur(10px) hue-rotate(90deg)"
      zIndex="unset"
      width="100%"
      height="1280px"
    >
      <Header />
      <Box w="900px" h="480px" m="20px auto">
        <Slides />
        <Box w="100%" textAlign="center">
          <Heading
            m="40px auto"
            bgColor="whiteAlpha.500"
            p="2"
            rounded="2xl"
            w="80%"
            textColor="whiteAlpha.900"
            boxShadow="2xl"
          >
            Destaques
          </Heading>
        </Box>
        <Card />
      </Box>
    </Box>
  );
}

export default Homepage;
