import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useEffect } from 'react'
import AuthService from '../../services/AuthService'

function DrawerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  


    useEffect(()=>{
      const user = AuthService.getCurrentUser();

      if(user){
        setCurrentUser(user);
        if(user.roles.includes("ROLE_ADMIN")){
          setShowAdminBoard(true);
        }
      }
    
      
    
    },[])


  return (
    <Box 
    padding="4" display="flex" justifyContent="space-between"
    >
    <Button onClick={onOpen}><GiHamburgerMenu style={{fontSize: '30px'}}/></Button>
    <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>
      <Heading my="6" color={'whiteAlpha.900'}>Seja muito bem-vindo</Heading>
      </DrawerHeader>

      <DrawerBody>
        <Box display="flex" flexDirection="column" gap="4">
        <Button mr={3} colorScheme="green" rounded="2xl" size="lg" width="full">
        <Link to={"/"}>
           Página inicial
        </Link>
        </Button>

        <Button mr={3} colorScheme="orange" rounded="2xl" size="lg" width="full">
        <Link to={currentUser?.roles.includes('ROLE_ADMIN') ? '/admin/reservas' : '/cliente/reservas'}>
            Reservas
        </Link>
        </Button>

        {showAdminBoard && (
          <>
            <Button mr={3} colorScheme="linkedin" rounded="2xl" size="lg" width="full">
            <Link to={"/"}>
              Produtos
            </Link>
            </Button>

            <Button mr={3} colorScheme="whatsapp" rounded="2xl" size="lg" width="full">
            <Link to={"/"}>
                Tipos
            </Link>
            </Button>
            <Button mr={3} colorScheme="teal" rounded="2xl" size="lg" width="full">
            <Link to={"/"}>
              Usuários
            </Link>
            </Button>
        </>
)}
          
        </Box>
      </DrawerBody>
        <DrawerFooter display="flex-start">
        <Box display="flex" alignItems="center" gap="3">
        {/* {currentUser && (
        <Avatar name={currentUser.name} src='https://bit.ly/broken-link' />
        )} */}
          <>
        <Link to={"/login"}>
        <Button mr={3} colorScheme="red" rounded="2xl" size="lg" width="full">
          Sair
        </Button>
        </Link>
        </>
        {/* ):(
        <>
        <Link to={"/login"} className="nav-link">
        <a style={{fontSize: '17px', marginLeft: '5px'}}>Login</a>
        </Link>
        <Link to={"/register"}>
        <a style={{fontSize: '17px', color: 'red', marginLeft: '30px'}}>Registrar</a>
        </Link>
        </>
        )} */}
        </Box>
        </DrawerFooter>
      
    </DrawerContent>
  </Drawer>
   
  </Box> 
  )
}

export default DrawerMenu