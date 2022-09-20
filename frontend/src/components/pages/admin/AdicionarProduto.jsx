import react from 'react';
import {useState} from 'react';
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
  Radio,
  Select,
  Stack,
  VStack,
  RadioGroup,
  Textarea,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Drawer,
  Switch
} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from '../../reutilizable/DrawerMenu';
import { useEffect } from 'react';
import TiposService from '../../../services/TiposService';
import UploadService from '../../../services/uploadService';
import ProdutoService from '../../../services/ProdutoService';

export default function AdicionarProduto() {

  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, '')

  const [value, setValue] = useState('1.99')
  const [tipos, setTipos] = useState([]);
  const [tipo, setTipo] = useState('');
  const [destaque, setDestaque] = useState(false);
  const [descricao, setDescricao] = useState(['']);
  const [resumo, setResumo] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [idProduto, setIdProduto] = useState(0);


  useEffect(()=>{
      TiposService.listarTipos().then(response => setTipos(response.data));

    },[])

    const handleImage = (e) => {
      setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(value);
      console.log(tipo);
      console.log(destaque? 'Sim' : 'Não');
      console.log(descricao);
      console.log(resumo);

      let data = {
        "descriProduto": descricao,
        "resumoProduto": resumo,
        "valorProduto": value,
        "destaqueProduto": destaque? 'SIM' : 'NAO',
        "tipoProduto": tipo
      }

      console.log(data);


    ProdutoService.addProduto(data).then(response => uploadFile(response.data.id));


      
    }

    const uploadFile = (idProduto) => {
      let file = new FormData();
      file.append('file', selectedFile);
      //requisição para api para upload de imagem
      UploadService.uploadImage(file, idProduto).then(response => console.log(response.data));
    
    }

    const handleSwitch = () => {
      setDestaque(!destaque);
    }

    const handleSelect = (e) => {
      setTipo(e.target.value);
    }
  return (
    <Box
    h="100vh"
    bg="gray.100"
    >
    
   <DrawerMenu/>
   
    <Flex bg="gray.100" align="center" justify="center">
      
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
            Inserindo produtos
          </Heading>
        </Box>
        <form>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="tipo">Tipo</FormLabel>
              <Select
                variant="filled"
                
                borderColor='orange'
                placeholder='Tipo'
                onChange={(e) => handleSelect(e)}
              >{tipos.map(tipo => {
                return(
                  <option value={tipo.id} onChange={()=>setTipo(tipo.id)}>{tipo.rotuloTipo}</option>
                )
              })}
              </Select>

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="destaque">Destaque</FormLabel>
              <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                
                 <Switch colorScheme="red" size="lg" value={destaque} onChange={handleSwitch}/>
                 
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="descricao">Descrição</FormLabel>
              <Input
              name="descricao"
              placeholder="Insira aqui uma descrição para o novo produto"
              type="text"
              value={descricao}
              onChange={(e)=>setDescricao(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="resumo">Resumo</FormLabel>
              <Textarea
              name="resumo"
              placeholder="Insira aqui um resumo sobre o produto"
              value={resumo}
              onChange={(e)=>setResumo(e.target.value)}
              >
              </Textarea>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="valor">Valor do produto</FormLabel>
              <NumberInput
               value={format(value)}
             onChange={(valueString) => setValue(parse(valueString))}
            
               >
          <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
          </NumberInput>
            </FormControl>
            <FormControl>
              <Input
              type="file"
              onChange={handleImage}
              accept="image/*"
              />
            </FormControl>
            <Button type="submit" colorScheme="orange" width="full" onClick={handleSubmit}>
              Inserir novo produto
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
    </Box>
  );
}