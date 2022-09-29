import React from 'react'
import {Box, Image, Heading, Text, ButtonGroup, Button} from '@chakra-ui/react'
import { useEffect } from 'react'




function Card(props) {
        
    useEffect(() => {
        console.log(props)
    },[])


  return (
    <Box w="300px" bgColor="gray.300" h="500px" px="5" py="10" rounded="2xl" boxShadow="2xl" >
        <Box rounded="xl">
        <Image rounded="xl" width = {300} height={150} src={`data:${props.produto.imagemProduto?.type};base64,${props.produto.imagemProduto?.data}`}/>
        </Box>
        <Box>
            <Box>
                <Heading fontSize="2xl">{props.produto.descriProduto}</Heading>
                <Text>Churrasco</Text>
            </Box>

            <Text mt="5">{props.produto?.resumoProduto?.length > 80? props.produto?.resumoProduto?.substring(0, 80) + '...' : props.produto?.resumoProduto}</Text>
            
            <ButtonGroup mt="20" position="relative" top="10px" display="flex" justifyContent="center">
                <Button>R$ {props.produto.valorProduto}</Button>
                <Button colorScheme="whatsapp">Saiba mais...</Button>
            </ButtonGroup>
        </Box>
    </Box>
  )
}

export default Card