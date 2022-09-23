import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import DrawerMenu from "../../reutilizable/DrawerMenu";
import AuthService from "../../../services/AuthService";
import ReservasService from "../../../services/ReservasService";
import { Link, useLocation, useNavigate } from "react-router-dom";
import background from "../../../images/background.jpg";
import { useToast } from "@chakra-ui/react";

const AlterarReserva = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [novoStatus, setNovoStatus] = useState("");
  const toast = useToast();
  const [currentUser, setCurrentUser] = useState(undefined);
  let location = useLocation();
  let navigate = useNavigate();

  const requestReserva = () => {
    ReservasService.getReservaById(location.state.id).then((response) => {
      setData(response.data);
      setLoading(false);
      console.log(data);
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

  const handleTrocaStatus = async () => {
    //Montando objeto com a troca do status da reserva
    const reserva = {
      idClienteReserva: data.idClienteReserva,
      nomeClienteReserva: data.nomeClienteReserva,
      motivoReserva: data.motivoReserva,
      dataReservada: data.dataReservada,
      dataAbertura: data.dataAbertura,
      statusReserva: novoStatus,
      ndePessoasReserva: data.ndePessoasReserva,
    };
    console.log(reserva);
    await ReservasService.updateReserva(location.state.id, reserva);
    onClose();
    toast({
      title: "Reserva atualizada.",
      description: "A reserva já foi atualizada.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/admin/reservas");
  };

  const verificaMotivo = (e) => {
    if (e.target.value == "NEGADO") {
      document.getElementById("textarea").style.display = "block";
    } else {
      document.getElementById("textarea").style.display = "none";
    }
    setNovoStatus(e.target.value);
  };

  if (currentUser && currentUser.roles[0] == "ROLE_ADMIN") {
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
                      <Text>{data.ndePessoasReserva}</Text>
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

                  <br />
                  <Button colorScheme="linkedin" onClick={onOpen}>
                    Alterar status dessa reserva
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Alterar o status dessa reserva</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text>
                          Selecione abaixo o que você deseja fazer com essa
                          reserva
                        </Text>
                        <Select
                          mt="4"
                          placeholder="Selecione um novo status"
                          value={novoStatus}
                          onChange={(e) => verificaMotivo(e)}
                        >
                          <option value="APROVADO">Aprovado</option>
                          <option value="CANCELADO">Cancelado</option>
                          <option
                            onClick={() => console.log("negado")}
                            value="NEGADO"
                          >
                            Negado
                          </option>
                        </Select>
                        <Textarea
                          mt="8"
                          display="none"
                          placeholder="Insira o motivo pelo qual a reserva foi negada."
                          id="textarea"
                        ></Textarea>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                          Fechar
                        </Button>
                        <Button
                          colorScheme="whatsapp"
                          onClick={handleTrocaStatus}
                        >
                          Confirmar novo status
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>

                  <Box
                    display="flex"
                    align="center"
                    justifyContent="center"
                    mt="4"
                  >
                    <Link to="/admin/reservas">
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
  } else {
    navigate("/login/admin");
  }
};

export default AlterarReserva;
