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
  Drawer
} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from '../../reutilizable/DrawerMenu';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function AdicionarProduto() {



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
  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, '')

  const [value, setValue] = useState('1.99');
  const [date, setDate] = useState(new Date());


 

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
            Agendando nova reserva
          </Heading>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="tipo">Data pretendida da reserva</FormLabel>
              <DatePicker
                timeInputLabel="Horário:"
                dateFormat="dd/MM/yyyy h:mm aa"        
                showTimeSelect
                required 
                selected={date}
                onChange={(date) => setDate(date)}
                />

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="destaque">Destaque</FormLabel>
              <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                  <Radio colorScheme='green' value='Sim'>
                    Sim
                  </Radio>
                  <Radio colorScheme='red' value='Nao'>
                    Não
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="descricao">Descrição</FormLabel>
              <Input
              name="descricao"
              placeholder="Insira aqui uma descrição para o novo produto"
              {...formik.getFieldProps("produto")
            }
            type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="resumo">Resumo</FormLabel>

              <Textarea
              name="resumo"
              placeholder="Insira aqui um resumo sobre o produto"
              {...formik.getFieldProps("resumo")}
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
            <Button type="submit" colorScheme="orange" width="full">
              Inserir novo produto
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
    </Box>
  );
}