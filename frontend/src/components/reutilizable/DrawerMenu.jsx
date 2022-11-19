import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import AuthService from "../../services/AuthService";

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      if (user.roles.includes("ROLE_ADMIN")) {
        setShowAdminBoard(true);
      }
    }
  }, []);

  return (
    <Box
      padding="4"
      display="flex"
      justifyContent="space-between"
      background={"none"}
    >
      <Button onClick={onOpen}>
        <GiHamburgerMenu style={{ fontSize: "30px" }} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading my="6">Seja muito bem-vindo</Heading>
          </DrawerHeader>

          <DrawerBody>
            <Box display="flex" flexDirection="column" gap="4">
              <Link to={"/"}>
                <Button
                  mr={3}
                  colorScheme="green"
                  rounded="2xl"
                  size="lg"
                  width="full"
                >
                  Página inicial
                </Button>
              </Link>

              <Link
                to={
                  currentUser?.roles.includes("ROLE_ADMIN")
                    ? "/admin/reservas"
                    : "/cliente/reservas"
                }
              >
                <Button
                  mr={3}
                  colorScheme="orange"
                  rounded="2xl"
                  size="lg"
                  width="full"
                >
                  Reservas
                </Button>
              </Link>

              {showAdminBoard && (
                <>
                  <Link to={"/admin/produtos"}>
                    <Button
                      mr={3}
                      colorScheme="linkedin"
                      rounded="2xl"
                      size="lg"
                      width="full"
                    >
                      Produtos
                    </Button>
                  </Link>

                  <Link to={"/admin/tipos"}>
                    <Button
                      mr={3}
                      colorScheme="whatsapp"
                      rounded="2xl"
                      size="lg"
                      width="full"
                    >
                      Tipos
                    </Button>
                  </Link>
                  <Link to={"/admin/usuarios"}>
                    <Button
                      mr={3}
                      colorScheme="teal"
                      rounded="2xl"
                      size="lg"
                      width="full"
                    >
                      Usuários
                    </Button>
                  </Link>
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
                <Link to={"/login/admin"}>
                  <Button
                    mr={3}
                    colorScheme="red"
                    rounded="2xl"
                    size="lg"
                    width="full"
                  >
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
  );
}

export default DrawerMenu;
