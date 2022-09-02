import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import {FaUserCircle} from 'react-icons/fa';
import background from '../../images/backgroundLogin.jpg';
import Header from "../reutilizable/Header";


export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
      <Heading>
          Acesso para clientes
      </Heading>
      <Box
      display="flex"
      justifyContent="center"
      bgColor="gray.100"
      rounded="2xl"
      width="30"
      mx="auto"
      >
      <FaUserCircle
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
            >
              Faça seu login
            </Heading>
            <FormControl>
              <FormLabel htmlFor="email">Endereço de email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="cliente@cliente..."
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                id="senha"
                name="senha"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="*******"
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="orange"
            >
              Lembrar-me?
            </Checkbox>
            <Button type="submit" colorScheme="orange" width="full">
              Login
            </Button>

            <Text>
              Ainda não possui cadastro? Crie já o seu!
            </Text>
            <Button
            w="full"
            >
              Criar cadastro
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}