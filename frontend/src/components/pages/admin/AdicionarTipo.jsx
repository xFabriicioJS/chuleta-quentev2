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
  useToast,
  VStack
} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from '../../reutilizable/DrawerMenu';
import { Link, useNavigate } from 'react-router-dom';
import "./AdicionarTipo.css";
import TiposService from '../../../services/TiposService';
import AlertError from '../../reutilizable/AlertError';
import background from '../../../images/backgroundLogin.jpg';


export default function AdicionarTipo() {

  const [message, setMessage] = useState(null);

  const toast = useToast();

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      rotulo: "",
      sigla: "",    
    },
    onSubmit: (values) => {

      let tipo = {
        "siglaTipo": values.sigla,
        "rotuloTipo": values.rotulo
      }
      TiposService.adicionarTipo(tipo);
      toast({
        title: "Tipo adicionado com sucesso.",
        status: 'success',
        isClosable: true,
      })

      
    }
  });


  return (
    <Box
    h="100vh"
    bgImage={background}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    >
      {message && <AlertError message={message} />}
    
   <DrawerMenu/>
   
    <Flex  align="center" justify="center">
      
      <Box bg="white" p={4} rounded="md" w="40vw">
        <Box
        w="50w"
        rounded="3xl"
        bg="white"
        display='flex'
        mb="10"
        >
          <Link to={"/admin/tipos"}>
               
                <AiFillLeftCircle
                className='iconVoltar'
                fontSize={'50px'}
                />
              
              </Link> 
        
          <Heading
          ml="4"
          >
            Inserindo Tipos
          </Heading>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl htmlFor="rotulo">
              <FormLabel>Rótulo do novo tipo</FormLabel>

              <Input
              name="rotulo"
              placeholder="Insira aqui um novo rótulo"
              {...formik.getFieldProps("rotulo")
            }
            type="text"
            maxLength={15}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="sigla">Sigla do novo tipo</FormLabel>
             <Input
             name="sigla"
             placeholder="Insira apenas 3 caracteres para o tipo"
             {...formik.getFieldProps("sigla")
             
           }
           maxLength={3}
           type="text"
             />
            </FormControl>
           
            <Button type="submit" colorScheme="orange" width="full">
              Inserir novo tipo
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
    </Box>
  );
}