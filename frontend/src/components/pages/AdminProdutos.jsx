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
import { FiShoppingCart } from 'react-icons/fi'
import Header from '../reutilizable/Header'

function AdminProdutos() {
  return (
    <>
        <Header/>
        <Heading        
        display="flex"
        width="80%"
        m="0 auto"
        bgColor="teal.100"
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
            rounded="2xl"
            boxShadow="xl"
            m="0 auto"
        >
            <Table variant="striped" colorScheme="purple">
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
                                <Button colorScheme="green">
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
                                <Button colorScheme="teal">Alterar</Button>
                                <Button colorScheme="red">Excluir</Button>
                            </Td>
                        </Tr>
                    </Tbody>
            </Table>
        </TableContainer>
    </>
  )
}

export default AdminProdutos