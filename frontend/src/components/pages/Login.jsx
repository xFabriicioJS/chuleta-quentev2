import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
// import AuthService from "../services/auth.service";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text
} from '@chakra-ui/react';
import ErrorMessage from "../reutilizable/ErrorMessage";
import {AiOutlineUser, AiOutlineKey} from 'react-icons/ai';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


const Login = () => {
    // let navigate =  useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [message, setMessage] = useState("");

    //Funções de evento no input
    // const onChangeUsername = (e) => {
    //     const username = e.target.value;
    //     setUsername(username);
    //   };
    //   const onChangePassword = (e) => {
    //     const password = e.target.value;
    //     setPassword(password);
    //   };

    //   const handleLogin = (e) => {
    //     console.log(username, password);
    //     setMessage("");
                
    //             AuthService.login(username, password).then(
    //                 ()=>{
    //                     navigate("/profile");
    //                     window.location.reload();
    //                 },
    //                 (error) => {
    //                     setMessage('Verifique a senha por favor.');    
    //                 }
    //             );
            
    //   }

      return(
        
<>
        <Flex mt="10" width="full" align="center" justifyContent="center"  b>
      <Box p={20} display="flex" flexDirection="column"  alignItems="center"width= "30%" backgroundColor="teal.100" borderRadius="15">
        <Box textAlign="center">
          <Heading>Faça seu Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
                
                {message && <ErrorMessage message={message} />}
          <FormControl isRequired>
            <FormLabel>Usuário</FormLabel>
            <Box display="flex">
              <Input
                type="username"
                placeholder="Usuário"
                size="lg"
                onChange={event => setUsername(event.currentTarget.value)}
                variant="filled"
                
              />
              <AiOutlineUser style={{ backgroundColor:"#EBEBEB", borderRadius:"100%" , fontSize: "30", marginTop:"8", width: "35px", marginLeft:"10"}}/>
            </Box>
          </FormControl>
          <FormControl isRequired mt={6}>
            <FormLabel>Senha</FormLabel>
            <Box display="flex">
            <Input
              type="password"
              placeholder="*******"
              size="lg"
              onChange={event => setPassword(event.currentTarget.value)}
              variant="filled"
            />
            <AiOutlineKey style={{ backgroundColor:"#EBEBEB", borderRadius:"100%" , fontSize: "30", marginTop:"8", width: "35px", marginLeft:"10"}}/>
            </Box>
          </FormControl>
          <Button
            colorScheme="green"
            variant="solid"
            type="submit"
            width="full"
            mt={10}
            // onClick={handleLogin}
          >
            Entrar
          </Button>
          
        </Box>
      </Box>
    </Flex>
</>
    );
      }

export default Login;