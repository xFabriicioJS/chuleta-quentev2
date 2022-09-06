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
import Header from '../../reutilizable/Header'
import { AiFillDelete } from 'react-icons/ai'
import DrawerMenu from '../../reutilizable/DrawerMenu';

function AdminProdutos() {

    


  return (
    <>
        <DrawerMenu/>
        <Heading        
        display="flex"
        width="80%"
        m="0 auto"
        bgColor="orange.100"
        p="2"
        rounded="md"
        my="4"
        fontSize="30"
        >
            Todos os produtos
            <FiShoppingCart fontSize="50px"/>
        </Heading>
        <TableContainer
            width="80%"
            minWidth="60vw"
            rounded="2xl"
            boxShadow="Dark lg"
            m="0 auto"
        >
            <Table variant="striped" colorScheme="orange">
                <TableCaption>Lista de produtos</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>
                                Tipo
                            </Th>
                            <Th>
                                Descrição
                            </Th>
                            <Th>
                                Resumo
                            </Th>
                            <Th>
                                Valor
                            </Th>
                            <Th>
                                Imagem
                            </Th>
                            <Th display="flex" justifyContent="center">
                                <Button colorScheme="orange" leftIcon={<IoIosAddCircle/>}>
                                    Adicionar
                                </Button>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Teste tipo</Td>
                            <Td>Teste descrição</Td>
                            <Td>Teste resumo</Td>
                            <Td>Teste valor</Td>
                            <Td>Teste imagem</Td>
                            <Td display="flex" justifyContent="center" gap="2">
                                <Button leftIcon={<TbAdjustmentsHorizontal/>} colorScheme="teal">Alterar</Button>
                                <Button leftIcon={<AiFillDelete/>} colorScheme="red">Excluir</Button>
                            </Td>
                        </Tr>
                    </Tbody>
            </Table>
        </TableContainer>
    </>
  )
}

export default AdminProdutos