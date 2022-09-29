
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../reutilizable/Card";
import Header from "../reutilizable/Header";
import Slides from "../reutilizable/Slides";
import background from "../../images/background.jpg";
import ProdutoService from "../../services/ProdutoService";
import { useEffect } from "react";


function Homepage() {
  const [produtos, setProdutos] = React.useState([""]);	

  useEffect(()=>{
    //Requisição para pegar todos os produtos
    ProdutoService.listarProdutos().then((response)=>{
        setProdutos(response.data.content);
        console.log(produtos);
    });
  },[])
 
  return (
    
    <Box
      // backgroundImage={background}
      // backgroundRepeat="no-repeat"
      // backgroundPosition="center"
      // background="cover"
      // backdropFilter="blur(10px) hue-rotate(90deg)"
      // zIndex="unset"
      // width="100%"
      // minH="300vh"
      // height="100%"
    >
      <Header />
      <Box w="900px" h="480px" m="20px auto">
        <Slides />
        <Box w="100%" textAlign="center">
          <Heading
            m="40px auto"
            bgColor="whiteAlpha.700"
            p="2"
            rounded="2xl"
            w="80%"
            textColor="gray.900"
            boxShadow="2xl"
          >
            Destaques
          </Heading>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {produtos.map((produto)=> {
            return(
            <Card produto={produto}/>
            )
          })}
       </Grid>
      </Box>
    </Box>
  );
}

export default Homepage;
