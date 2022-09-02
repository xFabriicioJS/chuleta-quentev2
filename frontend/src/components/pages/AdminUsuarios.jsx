import React from 'react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Button,
  } from '@chakra-ui/react'

import {IoIosAddCircle} from 'react-icons/io'  
import { FiShoppingCart } from 'react-icons/fi'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import Header from '../reutilizable/Header'
import { AiFillDelete } from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import background from '../../images/background.jpg';

function AdminProdutos() {

    


  return (
    <Box
    backgroundImage={background}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    backdropFilter='blur(10px) hue-rotate(90deg)'
    zIndex="unset"
    height="1800px"
    width="100%"
    >
        <Header/>
        <Box
        display="flex"
        width="80%"
        m="0 auto"
        bgColor="teal.100"
        p="2"
        rounded="md"
        my="4"
        gap=""        
        >
        <Heading        
        >
            Todos os usuários
            
        </Heading>
        <FaUsers m="2" fontSize="50px"/>
        </Box>
        <TableContainer
            bgColor="whiteAlpha.600"        
            width="80%"
            rounded="2xl"
            boxShadow="Dark lg"
            m="0 auto"
        >
            <Table variant="striped" colorScheme="purple" bgColor="white">
                <TableCaption bgColor="white">Lista de usuários</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>
                                Id
                            </Th>
                            <Th>
                                Login de usuário
                            </Th>
                            <Th>
                                Senha de usuário
                            </Th>
                            <Th display="flex" justifyContent="center">
                                <Button colorScheme="purple" leftIcon={<IoIosAddCircle/>}>
                                    Adicionar
                                </Button>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Teste Id</Td>
                            <Td>Teste login de usuário</Td>
                            <Td>Teste senha de usuário</Td>
                            <Td display="flex" justifyContent="center" gap="2">
                                <Button leftIcon={<TbAdjustmentsHorizontal/>} colorScheme="teal">Alterar</Button>
                                <Button leftIcon={<AiFillDelete/>} colorScheme="red">Excluir</Button>
                            </Td>
                        </Tr>
                    </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default AdminProdutos