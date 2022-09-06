import react from 'react';
import {useState} from 'react';
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,

  VStack,

} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from '../../reutilizable/DrawerMenu';

export default function AdicionarTipo() {



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
    <Box
    bg="gray.100"
    >
    
   <DrawerMenu/>
   
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      
      <Box bg="white" p={4} rounded="md" w="50vw">
        <Box
        w="50w"
        rounded="3xl"
        bg="white"
        display='flex'
        mb="10"
        >
        <AiFillLeftCircle
        fontSize={'50px'}
        />
          <Heading
          ml="4"
          >
            Atualizando tipo blablabla vc sabe oq fazer
          </Heading>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl htmlFor="rotulo">
              <FormLabel>Rótulo do tipo</FormLabel>

              <Input
              name="rotulo"
              placeholder="Insira aqui um novo rótulo"
              {...formik.getFieldProps("rotulo")
            }
            type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="sigla">Sigla do tipo</FormLabel>
             <Input
             name="sigla"
             placeholder="Insira apenas 3 caracteres para o tipo"
             {...formik.getFieldProps("tipo")
             
           }
           maxLength={3}
           type="text"
             />
            </FormControl>
           
            <Button type="submit" colorScheme="orange" width="full">
              Atualizar o tipo
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
    </Box>
  );
}