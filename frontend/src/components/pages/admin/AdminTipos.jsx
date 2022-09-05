import React from 'react'
import {    
    Table,
    Thead,
    Tbody,
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

function AdminTipos() {

    


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
            Todos os tipos
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
                <TableCaption>Lista dos tipos atuais</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>
                                Número do tipo
                            </Th>
                            <Th>
                                Rótulo do tipo
                            </Th>
                            <Th>
                                Sigla
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
                            <Td>Número tipo</Td>
                            <Td>Rótulo</Td>
                            <Td>Sigla</Td>
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

export default AdminTipos