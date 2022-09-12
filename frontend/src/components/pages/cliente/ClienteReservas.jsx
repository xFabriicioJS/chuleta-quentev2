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
import { Link, useNavigate } from 'react-router-dom';


function ClienteReservas() {

    let navigate = useNavigate();
    const [reservas, setReservas] = useState([]);

    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem('usuario'));

         console.log(usuario.idUsuario);
         ReservasService.findAllReservasByUserId(usuario.idUsuario).then(response => setReservas(response.data));

    },[])

    const handleView = (id) => {
        navigate(`${id}`, {state : {id}})
    }



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

                                <Link to="/cliente/adicionar-reserva">
                                <Button colorScheme="orange" leftIcon={<IoIosAddCircle/>}>
                                    Adicionar
                                </Button>
                                </Link>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {reservas.map((reserva)=>{
                        console.log(reserva.id);

                        return(
                            <Tr>
                            <Td>
                                {reserva.id}
                            </Td>
                            <Td>
                                {reserva.dataReservada}
                            </Td>
                            <Td >
                                {reserva.dataReservada.substring(11)
                                //usar o split para pegar o
                                }
                            </Td>
                            <Td>
                                {reserva.dataAbertura}
                            </Td>
                            <Td>
                                Não tem
                            </Td>
                                <Td>
                                    {reserva.statusReserva.includes("APROVADO") ? <Button colorScheme="green" rounded="2xl">APROVADO</Button> : <Button>
                                        {reserva.statusReserva.replace("_", " ")}
                                    </Button>}
                                </Td>
                                <Td display="flex" justifyContent="center">
                                    <Button onClick={()=>handleView(reserva.id)} colorScheme="green">
                                        Visualizar
                                    </Button>
                                </Td>
                        </Tr>
                        )
                    })}
                    </Tbody>
            </Table>
        </TableContainer>
    </>
  )
}

export default ClienteReservas;