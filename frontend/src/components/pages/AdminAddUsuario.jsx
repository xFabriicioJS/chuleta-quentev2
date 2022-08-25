import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

function AdminAddUsuario() {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

   


const handleSubmit = () => {
    console.log("handling submit")
}





  return (
    <>
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="40%"
        minWidth="400px"
        backgroundColor="teal.100"
        borderRadius="15"
        my="2rem"
        height="70vh"
      >
        <Box textAlign="center">
          <Heading>
          <BsFillArrowLeftCircleFill/>
            Adicionar novo usuário
          </Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit} style={{width: "400px", minWidth: "350px"}}>
            {/* {message && <ErrorMessage message={message} />} */}
            <FormControl isRequired>
              <FormLabel>Login do novo usuário</FormLabel>
              <Input
                type="text"
                placeholder="Insira um login de usuário (username)"
                size="lg"
                variant="filled"
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Senha</FormLabel>
              <Input
                type="text"
                placeholder="Insira uma senha para o novo usuário"
                size="lg"
                variant="filled"
              />
            </FormControl>


            <Button
              colorScheme="green"
              variant="solid"
              type="submit"
              width="full"
              mt={38}
              onClick={()=>{
                // handleSubmit();
                 setOverlay(<OverlayOne />);
                // onOpen();
              }}
            >
              Adicionar
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader display="flex">Chamado enviado <AiFillCheckCircle style={{color: "green", fontSize: "35", marginLeft:"10"}}/></ModalHeader>
          
          <ModalCloseButton />
          <ModalBody>
            <Text>O seu chamado já foi enviado para nossa equipe, e poderá ser acompanhado na dashboard de chamados, por isso, fique ligado!</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={()=>{
              onClose();
            }}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </form>
        </Box>
      </Box>
    </Flex>
    </>
  )
}

export default AdminAddUsuario