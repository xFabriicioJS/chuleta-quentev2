import React from 'react'
import {Box, Image, Heading, Text, ButtonGroup, Button} from '@chakra-ui/react'




function Card(props) {
        

  return (
    <Box w="300px" bgColor="gray.300" h="400px" p="5" rounded="2xl" boxShadow="2xl" >
        <Box rounded="xl">
            <Image rounded="xl" src={`data:${props.produto.imagemProduto?.type};base64,${props.produto.imagemProduto?.data}`}/>
        </Box>

        <Box>
            <Box>
                <Heading fontSize="2xl">{props.descriProduto}</Heading>
                <Text>Churrasco</Text>
            </Box>

            <Text mt="5">{props.resumoProduto}</Text>
            
            <ButtonGroup mt="5">
                <Button>R$ {props.valorProduto}</Button>
                <Button>Saiba mais...</Button>
            </ButtonGroup>
        </Box>
    </Box>
  )
}

export default Card