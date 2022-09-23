// View responsável por listar TODAS as reservas de todos os clientes
import React, { useEffect, useState } from "react";
import {
  Box,
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
} from "@chakra-ui/react";

import { FiShoppingCart } from "react-icons/fi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import DrawerMenu from "../../reutilizable/DrawerMenu";
import background from "../../../images/produtos.jpg";

import ReservasService from "../../../services/ReservasService";
import { useNavigate } from "react-router-dom";

function AdminReservas() {
  const [reservas, setReservas] = useState([""]);
  let navigate = useNavigate();

  //fazendo requisição para api para listar todas as reservas
  useEffect(() => {
    let usuario = localStorage.getItem("usuario");
    if (usuario && usuario.roles[0] == "ROLE_ADMIN") {
      ReservasService.findAllReservas().then((response) =>
        setReservas(response.data)
      );
    } else {
      navigate("/login/admin");
    }
  }, []);

  const handleAtualizar = (id) => {
    navigate(`/admin/reservas/${id}`, { state: { id } });
  };

  return (
    <Box
      bgImage={background}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      background="cover"
      align="center"
      justify="center"
      minH="100vh"
    >
      <DrawerMenu />
      <Heading
        display="flex"
        width="80%"
        m="0 auto"
        bgColor="orange.100"
        p="4"
        rounded="md"
        my="4"
        fontSize="30"
      >
        Todos as reservas
        <FiShoppingCart fontSize="40px" />
      </Heading>
      <TableContainer
        width="80%"
        minWidth="60vw"
        rounded="2xl"
        boxShadow="Dark lg"
        m="0 auto"
      >
        <Table variant="striped" colorScheme="orange" size="md">
          <TableCaption bgColor={"whiteAlpha.800"}>
            Lista de reservas
          </TableCaption>
          <Thead bgColor={"whiteAlpha.800"}>
            <Tr>
              <Th>Número da reserva</Th>
              <Th>Data reservada</Th>
              <Th>Hora da reserva</Th>

              <Th>Data de abertura</Th>
              <Th>Nome do cliente</Th>

              <Th>Status da reserva</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservas.length > 0 ? (
              reservas.map((reserva) => {
                return reservas.map((reserva) => {
                  return (
                    <Tr key={reserva.id}>
                      <Td>
                        <b>{reserva.id}</b>
                      </Td>
                      <Td>
                        <b>{reserva.dataReservada}</b>
                      </Td>
                      <Td>
                        <b>{reserva.dataReservada}</b>
                      </Td>
                      <Td>
                        <b>{reserva.dataAbertura}</b>
                      </Td>
                      <Td>
                        <b>{reserva.idClienteReserva?.nome}</b>
                      </Td>
                      <Td>
                        <Button>
                          <b>{reserva.statusReserva?.replace("_", " ")}</b>
                        </Button>
                      </Td>

                      <Td>
                        <Button
                          leftIcon={<TbAdjustmentsHorizontal />}
                          colorScheme="teal"
                          onClick={() => handleAtualizar(reserva.id)}
                        >
                          Alterar
                        </Button>
                      </Td>
                    </Tr>
                  );
                });
              })
            ) : (
              <Tr>
                <Td colSpan="12">
                  <b>Nenhuma reserva encontrada.</b>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdminReservas;
