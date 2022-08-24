import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import Card from '../reutilizable/Card';
import Header from '../reutilizable/Header';
import Slides from '../reutilizable/Slides';


function Homepage() {
  return (
  <div>
    <Header/>
    <Box w="900px" h="480px" m="20px auto">
    
        <Slides/>
        <Box w="100%" textAlign="center">
            <Heading m="40px auto" bgColor="red.400" p="2" rounded="2xl" w="80%" textColor="whiteAlpha.900">Destaques</Heading>  
        </Box>
        <Card/>
    </Box>
  </div>
    
  )
}

export default Homepage