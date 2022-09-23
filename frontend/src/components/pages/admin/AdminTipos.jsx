import React, { useRef, useState } from 'react'
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
    useDisclosure,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialog,
    useToast,
  } from '@chakra-ui/react'

import {IoIosAddCircle} from 'react-icons/io'  
import { FiShoppingCart } from 'react-icons/fi'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import { AiFillDelete } from 'react-icons/ai'
import DrawerMenu from '../../reutilizable/DrawerMenu'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import TiposService from '../../../services/TiposService'

function AdminTipos() {

    let navigate = useNavigate();    
    const [tipos, setTipos] = useState(['']);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const toast = useToast();

    useEffect(()=>{
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if(usuario && usuario.roles[0] == 'ROLE_ADMIN'){
        TiposService.listarTipos().then((response)=>setTipos(response.data));
        console.log(tipos);
      }else{
        navigate('/login/admin');
      }

        //Lógica para buscar os tipos de produtos
    },[])

    const editarTipo = (id) => {
        navigate(`/admin/atualizar-tipo/${id}`, {state : {id}})
    }

    const deletarTipo = (id) => {
        TiposService.deletarTipo(id);
        setTipos(tipos.filter((tipo)=>tipo.id !== id));
        console.log(tipos);
        toast({
            title: "Tipo deletado com sucesso.",
            status: 'error',
            isClosable: true,
          })
        onClose();
    }

  return (
    <>
        <DrawerMenu/>
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
            Todos os tipos
            <FiShoppingCart fontSize="40px"/>
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
                                <Button onClick={()=>navigate("/admin/adicionar-tipo")}colorScheme="orange" leftIcon={<IoIosAddCircle/>}>
                                    Adicionar
                                </Button>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tipos.map((tipo)=>{
                            return(
                                <Tr key={tipo.id}>
                                    <Td>{tipo.id}</Td>
                                    <Td>{tipo.rotuloTipo}</Td>
                                    <Td>{tipo.siglaTipo}</Td>
                                    <Td display="flex" justifyContent="center" gap="2">
                                        <Button leftIcon={<TbAdjustmentsHorizontal/>} colorScheme="teal" onClick={()=>editarTipo(tipo.id)}>Alterar</Button>
                                        <Button onClick={onOpen} leftIcon={<AiFillDelete/>} colorScheme="red">Excluir</Button>
                                        <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                      motionPreset="slideInBottom"
                    >
                      <AlertDialogOverlay></AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Deletar tipo
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Você tem certeza? Essa alteração não poderá ser desfeita.
                        </AlertDialogBody>z

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancelar
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => deletarTipo(tipo.id)}
                            ml={3}
                          >
                            Sim, deletar
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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

export default AdminTipos