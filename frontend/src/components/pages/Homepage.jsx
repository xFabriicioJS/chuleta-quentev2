
import { Box, Heading } from "@chakra-ui/react";
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
  
    });
  },[])
 
  return (
    
    <Box
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      background="cover"
      backdropFilter="blur(10px) hue-rotate(90deg)"
      zIndex="unset"
      width="100%"
      height="1280px"
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
        {produtos.map((produto)=> {
          <Card produto={produto}/>
        })}        
      </Box>
    </Box>
  );
}

export default Homepage;
