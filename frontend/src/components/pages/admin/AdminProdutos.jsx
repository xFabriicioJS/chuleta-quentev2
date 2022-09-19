import React, { useEffect, useState } from 'react'
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
    Image,
    Flex,
    ButtonGroup,
  } from '@chakra-ui/react'

import {IoIosAddCircle} from 'react-icons/io'  
import { FiShoppingCart } from 'react-icons/fi'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import Header from '../../reutilizable/Header'
import { AiFillDelete } from 'react-icons/ai'
import DrawerMenu from '../../reutilizable/DrawerMenu';
import ProdutoService from '../../../services/ProdutoService'
import { useNavigate } from 'react-router-dom'
import background from '../../../images/produtos.jpg'

function AdminProdutos() {

    const [produtos, setProdutos] = useState(['']);
    let navigate = useNavigate();

    useEffect(() => {
        ProdutoService.listarProdutos().then((response)=>setProdutos(response.data.content));
        console.log(produtos);
    }, [])


    


  return (
    <Box
    bgImage={background}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    align="center"
    justify="center"
    minH="100vh">
    

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
            Todos os produtos
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
                <TableCaption bgColor={'whiteAlpha.800'}>Lista de produtos</TableCaption>
                    <Thead bgColor={'whiteAlpha.800'}>
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
                                <Button colorScheme="orange" leftIcon={<IoIosAddCircle/>} onClick={()=>navigate('/admin/adicionar-produto')}>
                                    Adicionar
                                </Button>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                      {produtos.map((produto)=>{
                        return(
                        <Tr>
                            <Td><b>{produto.tipoProduto?.rotuloTipo}</b></Td>
                            <Td><b>{produto.descriProduto}</b></Td>
                            <Td><b>{produto.resumoProduto}</b></Td>
                            <Td><b>R$ {produto.valorProduto}</b></Td>
                            <Td>
                            <Flex w={180} h={170} rounded='2xl' bgColor='whiteAlpha.400' justifyContent='center' alignItems="center">
                            <Image
                              src={`data:${produto.imagemProduto?.type};base64,${produto.imagemProduto?.data}`}
                              width={170}
                              height={150}
                              alt="Imagem do produto"
                              rounded='2xl'
                            />
                            </Flex>
                            </Td>                            
                            <Td>
                                <ButtonGroup display="flex" alignItems={'center'} justifyContent="center">
                                    <Button>Alterar</Button>
                                    <Button>Excluir</Button>
                                </ButtonGroup>
                            </Td>                            
                         
                        </Tr>
                        )
                      })}
                    </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default AdminProdutos