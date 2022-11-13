import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack
} from "@chakra-ui/react";
import {MdAdminPanelSettings} from 'react-icons/md/';
import background from '../../../images/backgroundLogin.jpg';
import AuthService from "../../../services/AuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertError from "../../reutilizable/AlertError";

import { useEffect } from "react";


export default function App() {

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('usuario'));
    if(user?.roles[0] === 'ROLE_ADMIN'){
      console.log('teste');
      navigate('/admin');
    }
  },[])


  const [message, setMessage] = useState(null);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      AuthService.login(values.email, values.password).then(
        ()=>{
          console.log("Login efetuado com sucesso!")
         //Lógica para verificar se o usuário é administrador

          let currentUser = AuthService.getCurrentUser();
          console.log(currentUser)
          if(currentUser.roles.includes("ROLE_ADMIN")){
            console.log("usuário com acesso")
            navigate("/admin");
          }else{
            setMessage("Você não tem acesso aos recursos de administrador.")
            // localStorage.removeItem("usuario");
          }
        },
        (error) =>{
          setMessage("Verifique suas credenciais por favor");
        
        }
      )
    }
  });
  return (
    <Flex gap="20"
    bgImage={background}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    align="center" justify="center" h="100vh">
      <Box
      bgColor="gray.100"
      p="8"
      rounded="3xl"
      boxShadow="3xl"
      >
      <Heading
      color="blackAlpha.700"
      >
          Acesso para administradores
      </Heading>
      <Box
      display="flex"
      justifyContent="center"
      bgColor="gray.100"
      rounded="2xl"
      width="30"
      mx="auto"
      >
      <MdAdminPanelSettings
      fontSize={'280px'}
      color="orange"
      />
      </Box>
      </Box>
      <Box bg="white" p={6} rounded="xl" w="25%" border="2px solid orange">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <Heading
            textAlign="center"
            color="blackAlpha.700"
            >
              Faça seu login
            </Heading>
            <FormControl>
              <FormLabel htmlFor="email"
              color="blackAlpha.700"
              >Endereço de email</FormLabel>
              <Input
                id="email"
                name="email"
                color="blackAlpha.700"
                type="email"
                borderWidth={2}
                borderColor="orange"
                variant="outline"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="admin@admin..."
              />
            </FormControl>
            <FormControl>
              <FormLabel color="blackAlpha.700" htmlFor="password">Senha</FormLabel>
              <Input
                id="password"
                name="password"
                borderWidth={2}
                borderColor="orange"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="*******"
                color="blackAlpha.700"
              />
            </FormControl>
            <Button type="submit" colorScheme="orange" width="full">
              Login
            </Button>
            <Box w="full">
              {
                message && <AlertError message={message}/> 
              }
            </Box>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}