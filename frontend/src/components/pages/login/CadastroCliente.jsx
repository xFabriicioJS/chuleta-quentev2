import { VStack,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  Text,
  Flex,
  Box,
  Image
} from '@chakra-ui/react'
import React from 'react'
import {Field, Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import logo from '../../../images/logochurrascopequeno.png';
import costelona from '../../../images/costelona.jpg';
import AuthService from "../../../services/AuthService";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertError from '../../reutilizable/AlertError';



function CadastroCliente() {


  const[message, setMessage] = useState(null);

  //Utilizando o hook do formik e iniciando valores como strings vazias.

  let navigate = useNavigate();

  return (

    <Flex bg="gray.100" align="center" justify="center" h="100vh"
    
    backgroundImage={costelona}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    backdropFilter="blur(10px) hue-rotate(90deg)"
    zIndex="unset"
    >

      <Box
      p="10"
      bgColor="whiteAlpha.700"
      rounded="3xl"
      roundedLeft="0"
      >
    <Heading>
      Faça já seu cadastro! É muito simples
    </Heading>
    <Text
    textAlign="center"
    >
      Basta preencher os dados no formulário ao lado.
    </Text>
    <Image
    align="center"
    textAlign="center"
    mx="auto"
    mt="20"
    bgColor="gray.200"
    p="5"
    rounded="2xl"
    src={logo}
    />  
    </Box>

    <Flex bg="gray.100" align="center" justify="center" w="30vw" rounded="2xl" ml="20" h="80vh">
      <Box px={4} h="60vh">
      <Heading>Cadastro de cliente</Heading>
        <br />
   
        <Formik
          initialValues={{
            nome: "",
            cpf: "",
            loginUsuario: "",
            senhaUsuario: ""
          }}
          onSubmit={(values) => {
            AuthService.register(values.nome, values.cpf, values.loginUsuario, values.senhaUsuario).then(
              ()=>{
               navigate("/cliente/login")
              },
              (error) =>{
                console.log(error);
              
              }
            )
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Nome completo</FormLabel>
                  <Field
                    as={Input}
                    id="nome"
                    name="nome"
                    type="nome"
                    variant="outline"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.cpf && touched.cpf}>
                  <FormLabel htmlFor="cpf">CPF</FormLabel>
                  <Field
                    as={Input}
                    id="cpf"
                    name="cpf"
                    variant="outline"
                    validate={(value) => {
                      let error;

                      if (value.length != 11) {
                        error = "O campo CPF conter exatos 11 caracteres, e não deve possuir traços e pontos.";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.cpf}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field
                    as={Input}
                    id="loginUsuario"
                    name="loginUsuario"
                    type="email"
                    variant="outline"
                    placeholder="email@email"
                    
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.senhaUsuario && touched.senhaUsuario}>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <Field
                    as={Input}
                    id="senhaUsuario"
                    name="senhaUsuario"
                    type="password"
                    variant="outline"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "A senha deve conter ao menos 5 caracteres";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.senhaUsuario}</FormErrorMessage>
                </FormControl>
          
                <Button type="submit" colorScheme="orange" width="full">
                  Cadastrar
                </Button>
                <Box w="full">
                    {
                      message && <AlertError message={message}/> 
                    }
                </Box>

              </VStack>
            </form>
          )}
        </Formik>
        
      </Box>
      
    </Flex>
    
    
    </Flex>
    )
}

export default CadastroCliente