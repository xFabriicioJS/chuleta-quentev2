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
import {useFormik} from 'formik';
import * as Yup from 'yup';
import logo from '../../../images/logochurrascopequeno.png';
import costelona from '../../../images/costelona.jpg';

function CadastroCliente() {


  //Utilizando o hook do formik e iniciando valores como strings vazias.
  const formik = useFormik({
    initialValues: {
      nomeCompleto: '',
      cpf: '',
      email: '',
      senha: '',
    }
  ,
  //validando os campos recebidos
  validationSchema: Yup.object({
    nomeCompleto: Yup.string().required("Campo de nome completo é requerido").min(6, "O nome é muito curto"),
    cpf: Yup.number().required("Campo de CPF é requerido, e deve ter apenas números").min(14, "Insira um formato válido").max(14, "Insira um formato válido"),
    email: Yup.string().required("Campo email é requerido").min(6, "O email é muito curto"),
    senha: Yup.string().required("Campo senha é requrido").min(3, "A senha é muito curta"),
  }),
  onSubmit: (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  }
  
});

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
    <VStack
    as="form"
    mx="auto"
    my="5rem"
    w="30%"
    bgColor="gray.200"
    p="10"
    h="fit-content"
    minH="550px"
    border="1 px solid teal"
    rounded="3xl"
    justifyContent="center"
    >
      <Heading>Cadastro de cliente</Heading>
      <FormControl isInvalid={formik.errors.senha && formik.touched.email}>
        <FormLabel>Nome completo</FormLabel>
        <Input
        name="nomeCompleto"
        placeholder="Insira aqui seu nome completo"
        {...formik.getFieldProps("nomeCompleto")
      }
      type="text"
      />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.senha && formik.touched.email}>
        <FormLabel>CPF</FormLabel>
        <Input
        name="cpf"
        placeholder="Insira aqui seu CPF (Apenas números)"
        {...formik.getFieldProps("cpf")
      }
      type="text"
      />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.senha && formik.touched.email}>
        <FormLabel>Email do usuário</FormLabel>
        <Input
        name="Email"
        placeholder="Email do usuário"
        {...formik.getFieldProps("email")
      }
      type="email"
      />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.senha && formik.touched.senha}>
        <FormLabel>Senha do usuário</FormLabel>
        <Input
        name="senha"
        type="password"
        placeholder="Insira sua senha"
        {...formik.getFieldProps("senha")}
        />
      <FormErrorMessage>{formik.errors.senha}</FormErrorMessage>

      </FormControl>

      <Button
        type="submit"
        variant="solid"
        colorScheme="orange"
      >
        Criar conta
      </Button>

      <Text
      fontSize="sm"
      >
        Já possui conta? Faça seu login
      </Text>
      <Button
      colorScheme="red"

      >
        Fazer login
      </Button>
    
    </VStack>
    </Flex>
    )
}

export default CadastroCliente