// View responsável por listar TODAS as reservas de todos os clientes


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

function AdminReservas() {


  return (
    <>
        <Header/>
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
            Todos as reservas
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
                <TableCaption>Lista de reservas</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>
                                Número da reserva
                            </Th>
                            <Th>
                                Data reservada
                            </Th>
                            <Th>
                                Hora da reserva
                            </Th>
                            <Th>
                                Número de pessoas 
                            </Th>
                            <Th>
                                Motivo
                            </Th>
                            <Th>
                                Data de abertura
                            </Th>
                            <Th>
                                Nome do cliente
                            </Th>
                            <Th>
                                Data de abertura
                            </Th>
                            <Th>
                                Status da reserva
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
                            <Td>Teste número</Td>
                            <Td>Teste data</Td>
                            <Td>Teste hora</Td>
                            <Td>Teste númeroPessoas</Td>
                            <Td>Teste Motivo</Td>
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

export default AdminReservas;