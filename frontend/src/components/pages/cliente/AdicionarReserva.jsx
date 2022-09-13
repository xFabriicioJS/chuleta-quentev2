import React from 'react';
import {useState} from 'react';

import {
  Box,
  Button,

  Flex,
  FormControl,
  FormLabel,
  Heading,

  VStack,

  Textarea,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,

  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Text,
  ModalOverlay
} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from '../../reutilizable/DrawerMenu';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthService from '../../../services/AuthService';
import ReservasService from '../../../services/ReservasService';


export default function AdicionarProduto() {


  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />)
  const [date, setDate] = useState(new Date());
  const [nDePessoasReserva, setNDePessoasReserva] = useState(0);
  const [motivoReserva, setMotivoReserva] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    setOverlay(<OverlayOne />);
    onOpen();


    let dataFormatada = (('0' + (date.getDate())).slice(-2) + '/' + ('0' + (date.getMonth()+1)).slice(-2) + '/' + 
    date.getFullYear() + ' ' + ('0' + (date.getHours())).slice(-2) + ':' + ('0' + (date.getMinutes())).slice(-2));


    console.log(dataFormatada);
    console.log(nDePessoasReserva);
    console.log(motivoReserva);

    // {
    //   "idClienteReserva": {
    //     "idUsuario": "1" 
    //   },
    //   "motivoReserva": "Teste aniversário",
    //   "dataReservada": "12/09/2022 17:00",
    //   "nomeClienteReserva": "Fabricio",
    //   "ndePessoasReserva": "8"
    // }


    const usuario = JSON.parse(localStorage.getItem('usuario'));


    let reserva = {
      "idClienteReserva": {
        "idUsuario": usuario.idUsuario
      },
      "motivoReserva": motivoReserva,
      "dataReservada": dataFormatada,
      "nomeClienteReserva": "Teste",
      "ndePessoasReserva": nDePessoasReserva
    }

     ReservasService.addReserva(reserva);
  }

  


  

 

  return (
    <Box
    bg="gray.100"
    h="100vh"
    >
    
   <DrawerMenu/>
   
    <Flex bg="gray.100" align="center" justify="center" h="80vh">
      
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
        
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="tipo">Data e hora pretendida da reserva</FormLabel>
              <DatePicker
                timeInputLabel="Horário:"
                dateFormat="dd/MM/yyyy h:mm"        
                showTimeSelect
                required 
                autoFocus="true"
                disabledKeyboardNavigation
                selected={date}
                onChange={(date) => setDate(date)}
                />

            </FormControl>
          
            <FormControl>
              <FormLabel htmlFor="descricao">Número de pessoas</FormLabel>
              <NumberInput
              defaultValue={nDePessoasReserva} min={1} max={10}
              onChange={(event)=>setNDePessoasReserva(event)}
              value={nDePessoasReserva}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
             </NumberInput>

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="resumo">Motivo da reserva</FormLabel>
              <Textarea
              id="motivoReserva"
              name="motivoReserva"
              type="text"
              onChange={(e)=>setMotivoReserva(e.target.value)}
              value={motivoReserva}
              >
              </Textarea>
            </FormControl>
          
            <Button type="submit" colorScheme="orange" width="full" onClick={(e) => {
              handleSubmit(e);
        }}>
              Adicionar solicitação de reserva
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>A sua solicitação foi encaminhada!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Acompanhe pelo site ou pelo seu e-mail para verificar o andamento da sua solicitação, em breve enviaremos um retorno.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" onClick={onClose}>Voltar as minhas reservas</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </VStack>
    
      </Box>
    </Flex>
    </Box>
  );
}