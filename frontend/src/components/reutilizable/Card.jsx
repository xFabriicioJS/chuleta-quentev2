import React from 'react'
import {Box, Image, Heading, Text, ButtonGroup, Button} from '@chakra-ui/react'
import costela from '../../images/costelona.jpg'



function Card() {
  return (
    <Box w="300px" bgColor="gray.300" h="400px" p="5" rounded="2xl" boxShadow="2xl" >
        <Box rounded="xl">
            <Image rounded="xl" src={costela}/>
        </Box>

        <Box>
            <Box>
                <Heading fontSize="2xl">Costela</Heading>
                <Text>Churrasco</Text>
            </Box>

            <Text mt="5">Descricao blabablalblalalbalal</Text>
            
            <ButtonGroup mt="5">
                <Button>29.90</Button>
                <Button>Saiba mais...</Button>
            </ButtonGroup>
        </Box>
    </Box>
  )
}

export default Card