import React, { useEffect, useRef, useState } from "react";
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
  Image,
  Flex,
  ButtonGroup,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialog,
} from "@chakra-ui/react";

import { IoIosAddCircle } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import DrawerMenu from "../../reutilizable/DrawerMenu";
import ProdutoService from "../../../services/ProdutoService";
import { useNavigate } from "react-router-dom";
import background from "../../../images/produtos.jpg";
import AuthService from "../../../services/AuthService";

function AdminProdutos() {
  const [produtos, setProdutos] = useState([""]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState(null);
  const cancelRef = useRef();
  let navigate = useNavigate();

  useEffect( () => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
     ProdutoService.listarProdutos().then((response) =>
      setProdutos(response.data.content)
    );
    console.log(currentUser?.roles[0]);
  }, []);

  const deletarProduto = async (idProd) => {
    await ProdutoService.removerProduto(idProd);
    setProdutos(produtos.filter((produto) => produto.id !== idProd));
  };

  const handleAtualizar = (id) => {
    navigate(`/admin/atualizar-produto/${id}`, { state: { id } });
  };

  if (!currentUser || currentUser.roles[0] == "ROLE_USER") {
    return navigate("/login/admin");
  }
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
        bgColor="red.100"
        p="4"
        rounded="md"
        my="4"
        fontSize="30"
      >
        Todos os produtos
        <FiShoppingCart fontSize="40px" />
      </Heading>
      <TableContainer
        width="80%"
        minWidth="60vw"
        rounded="2xl"
        boxShadow="Dark lg"
        m="0 auto"
      >
        <Table variant="striped" colorScheme="red">
          <TableCaption bgColor={"whiteAlpha.800"}>
            Lista de produtos
          </TableCaption>
          <Thead bgColor={"whiteAlpha.800"}>
            <Tr>
              <Th>Tipo</Th>
              <Th>Descrição</Th>
              <Th>Resumo</Th>
              <Th>Valor</Th>
              <Th textAlign="center">Imagem</Th>
              <Th display="flex" justifyContent="center">
                <Button
                  colorScheme="orange"
                  leftIcon={<IoIosAddCircle />}
                  onClick={() => navigate("/admin/adicionar-produto")}
                >
                  Adicionar
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {produtos.map((produto) => {
              return (
                <Tr>
                  <Td>
                    <b>{produto.tipoProduto?.rotuloTipo}</b>
                  </Td>
                  <Td>
                    <b>{produto.descriProduto}</b>
                  </Td>
                  <Td>
                    <b>{produto?.resumoProduto?.length > 15 ? produto?.resumoProduto?.substring(0, 15) + '...' : produto?.resumoProduto}</b>
                  </Td>
                  <Td>
                    <b>R$ {produto.valorProduto}</b>
                  </Td>
                  <Td display="flex" justifyContent="center">
                    <Flex
                      w={180}
                      h={170}
                      rounded="2xl"
                      bgColor="whiteAlpha.400"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={`data:${produto?.imagemProduto?.type};base64,${produto?.imagemProduto?.data}`}
                        width={170}
                        height={150}
                        alt="Imagem do produto"
                        rounded="2xl"
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <ButtonGroup
                      display="flex"
                      alignItems={"center"}
                      justifyContent="center"
                    >
                      <Button
                        leftIcon={<TbAdjustmentsHorizontal />}
                        colorScheme="teal"
                        onClick={() => handleAtualizar(produto.id)}
                      >
                        Alterar
                      </Button>
                      <Button
                        onClick={onOpen}
                        leftIcon={<AiFillDelete />}
                        colorScheme="red"
                      >
                        Excluir
                      </Button>
                      <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                        motionPreset="slideInBottom"
                      >
                        <AlertDialogOverlay></AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Deletar produto
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Você tem certeza? Essa alteração não poderá ser
                            desfeita.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancelar
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={() => deletarProduto(produto.id)}
                              ml={3}
                            >
                              Sim, deletar
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdminProdutos;
