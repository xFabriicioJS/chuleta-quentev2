import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spinner,
  Text,
  Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import DrawerMenu from "../../reutilizable/DrawerMenu";
import AuthService from "../../../services/AuthService";
import ReservasService from "../../../services/ReservasService";
import { Link, useLocation } from "react-router-dom";
import background from "../../../images/background.jpg";

const VisualizarReserva = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);
  let location = useLocation();

  const requestReserva = () => {
    ReservasService.getReservaById(location.state.id).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    //Simulando uma requisição mais demorada
    setTimeout(() => {
      requestReserva();
    }, 800);
  }, []);

  if (currentUser) {
    if (loading) {
      return (
        <Flex justifyContent="center" align="center" h="100vh">
          <Box>
            <Spinner
              thickness="5px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange.500"
              size="xl"
            />
          </Box>
        </Flex>
      );
    } else {
      return (
        <Box
          bgImage={background}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          background="cover"
          align="center"
          justify="center"
          h="100vh"
        >
          <DrawerMenu />
          <Flex align="center" justify="center" w="full">
            <Box background="gray.200" w="50%" p="8" rounded="3xl">
              <Box>
                <Heading>Detalhes da reserva</Heading>
              </Box>
              <Divider orientation="horizontal" colorScheme="teal" />
              <Box mt={"10"} display="flex">
                <Box
                  w="90%"
                  backgroundColor="whiteAlpha.600"
                  rounded="3xl"
                  p="4"
                  m="0 auto"
                >
                  <Box mt="2">
                    <Text color="gray.600" fontWeight="bold">
                      Dia reservado
                    </Text>

                    <Box rounded="md" p="1" backgroundColor="whiteAlpha.900">
                      <Text>{data.dataReservada.substring(0, 11)}</Text>
                    </Box>
                  </Box>

                  <Box mt="2">
                    <Text color="gray.600" fontWeight="bold">
                      Horário reservado
                    </Text>

                    <Box rounded="md" p="1" backgroundColor="whiteAlpha.900">
                      <Text>{data.dataReservada.substring(11)}</Text>
                    </Box>
                  </Box>

                  <Box mt="2">
                    <Text color="gray.600" fontWeight="bold">
                      Motivo da reserva
                    </Text>

                    <Box rounded="md" p="1" backgroundColor="whiteAlpha.900">
                      <Textarea disabled="true" value={data.motivoReserva}>
                        {data.motivoReserva}
                      </Textarea>
                    </Box>
                  </Box>

                  <Box mt="2">
                    <Text color="gray.600" fontWeight="bold">
                      Data de abertura
                    </Text>

                    <Box rounded="md" p="1" backgroundColor="whiteAlpha.900">
                      <Text>{data.dataAbertura}</Text>
                    </Box>
                  </Box>

                  <Box mt="2">
                    <Text color="gray.600" fontWeight="bold">
                      Número de pessoas para a reserva
                    </Text>

                    <Box rounded="md" p="1" backgroundColor="whiteAlpha.900">
                      <Text>{data.nDePessoasReserva}</Text>
                    </Box>
                  </Box>

                  <Box mt="2">
                    <Text color="gray.600" fontWeight="bold">
                      Status da reserva
                    </Text>

                    <Box rounded="md" p="1" backgroundColor="whiteAlpha.900">
                      <Button colorScheme="red" size="sm" rounded="2xl">
                        {data.statusReserva?.replace("_", " ")}
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    display="flex"
                    align="center"
                    justifyContent="center"
                    mt="4"
                  >
                    <Link to="/cliente/reservas">
                      <Button colorScheme="green">
                        Voltar para as minhas reservas
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      );
    }
  }
};

export default VisualizarReserva;
