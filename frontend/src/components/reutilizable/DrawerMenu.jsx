import { Box, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DrawerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  


  return (
    <Box padding="8" display="flex" justifyContent="space-between">
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
      <Heading my="6">Seja muito bem-vindo!</Heading>
      </DrawerHeader>

      <DrawerBody>
        <Box display="flex" flexDirection="column" gap="4">
        <Button mr={3} colorScheme="green" rounded="2xl" size="lg" width="full">
        <Link to={"/"}>
           Página inicial
        </Link>
        </Button>
        
        {currentUser && (<Link to={"/user"} className="nav-link">
          <Button mr={3} colorScheme="teal" rounded="2xl" size="lg" width="full">
          
            Meus chamados
          
          </Button>
          </Link>
      )}
        
        
        {showAdminBoard && (
          <Button variant="outline" mr={3} colorScheme="green" rounded="2xl" size="lg">
          <Link to={"/admin"}>
            Admin Board
          </Link>
          </Button>
      )}
       
        </Box>
      </DrawerBody>
        <DrawerFooter display="flex-start">
        <Box display="flex" alignItems="center" gap="3">
        {currentUser && (
        <Avatar name={currentUser.name} src='https://bit.ly/broken-link' />
        )}
          <>
        <Link to={"/profile"} className="nav-link">
        <a style={{fontSize: '17px', marginLeft: '5px'}}>Minha Conta</a>
        </Link>
        <Link to={"/login"}>
        <a onClick={logOut} style={{fontSize: '17px', color: 'red', marginLeft: '30px'}}>Sair</a>
        </Link>
        </>
        ):(
        <>
        <Link to={"/login"} className="nav-link">
        <a style={{fontSize: '17px', marginLeft: '5px'}}>Login</a>
        </Link>
        <Link to={"/register"}>
        <a style={{fontSize: '17px', color: 'red', marginLeft: '30px'}}>Registrar</a>
        </Link>
        </>
        )}
        </Box>
        </DrawerFooter>
      
    </DrawerContent>
  </Drawer>
   
  </Box> 
  )
}

export default DrawerMenu