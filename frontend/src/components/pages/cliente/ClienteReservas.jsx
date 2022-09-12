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

import {IoIosAddCircle} from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import {TbAdjustmentsHorizontal} from 'react-icons/tb';
import Header from '../../reutilizable/Header';
import { AiFillDelete } from 'react-icons/ai';
import DrawerMenu from '../../reutilizable/DrawerMenu';
import {useState} from 'react';
import { useEffect } from 'react';
import ReservasService from '../../../services/ReservasService';


function ClienteReservas() {

    const [reservas, setReservas] = useState(['']);

    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem('usuario'));

         console.log(usuario.idUsuario);
         ReservasService.findAllReservasByUserId(usuario.idUsuario).then(response => console.log(response.data));

    },[])



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
            <Table variant="striped" colorScheme="orange" size="md">
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
                                Data de abertura
                            </Th>
                            <Th>
                                Número de pessoas
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
                    {reservas.map((reserva)=>{
                        <Tr>
                            <Th>
                                {reserva.id}
                            </Th>
                            <Th>
                                {reserva.dataReservada}
                            </Th>
                            <Th>
                                {reserva.dataReservada
                                //usar o split para pegar a data
                                }
                            </Th>
                            <Th>
                                {reserva.dataAbertura}
                            </Th>
                            <Th>
                                Não tem
                            </Th>
                                <Th>
                                    {reserva.status}      
                                </Th>
                        </Tr>
                    })}
                    </Tbody>
            </Table>
        </TableContainer>
    </>
  )
}

export default ClienteReservas;