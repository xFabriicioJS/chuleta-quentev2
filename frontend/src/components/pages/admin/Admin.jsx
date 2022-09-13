import React from 'react'

import {Box, Flex, Button, Heading, Text, ButtonGroup} from '@chakra-ui/react'
import DrawerMenu from '../../reutilizable/DrawerMenu';
import background from '../../../images/backgroundLogin.jpg';
import { useNavigate } from 'react-router-dom';


function Admin() {

    let navigate = useNavigate();

  return (
    <Box
    bgImage={background}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    height="100vh"

    >
    <DrawerMenu/>
        <Box w="100%" textAlign="center">
            <Heading m="40px auto" bgColor="blackAlpha.800" p="2" rounded="2xl" w="80%" textColor="whiteAlpha.900">Área administrativa</Heading>  
        </Box>

        <Flex w="100%" justifyContent="center" gap="15px">
            <Box textAlign={'center'} w="25%" bgColor="red.100" p="8" rounded="2xl" >
                <Text fontSize="2xl">Produtos</Text>
                <ButtonGroup mt="2">
                    <Button colorScheme="teal" onClick={()=>navigate("/admin/produtos")}>Listar</Button>
                    <Button colorScheme="green" onClick={()=>navigate("/admin/adicionar-produto")}>Inserir</Button>
                </ButtonGroup>
            </Box>
            
            <Box textAlign={'center'} w="25%" bgColor="green.100" p="8" rounded="2xl" >
                <Text fontSize="2xl">Tipos</Text>
                <ButtonGroup mt="2">
                    <Button colorScheme="teal" onClick={()=>navigate("/admin/tipos")}>Listar</Button>
                    <Button colorScheme="green" onClick={()=>navigate("/admin/adicionar-tipo")}>Inserir</Button>
                </ButtonGroup>
            </Box>
            
            <Box textAlign={'center'} w="25%" bgColor="yellow.100" p="8" rounded="2xl" >
                <Text fontSize="2xl">Reservas</Text>
                <ButtonGroup mt="2">
                    <Button colorScheme="teal">Listar</Button>
                    <Button colorScheme="green">Inserir</Button>
                </ButtonGroup>
            </Box>
        </Flex>
    </Box>

  )
}

export default Admin