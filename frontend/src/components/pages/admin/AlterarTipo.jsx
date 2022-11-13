import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from "../../reutilizable/DrawerMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TiposService from "../../../services/TiposService";
import { useEffect } from "react";
import AuthService from "../../../services/AuthService";

export default function AdicionarTipo() {
  const [loading, setLoading] = useState(true);
  const [tipo, setTipo] = useState(null);
  const [rotulo, setRotulo] = useState("");
  const [sigla, setSigla] = useState("");
  const toast = useToast();

  //Hook responsável por armazenar id que virá
  let location = useLocation();
  let navigate = useNavigate();


  const retrieveTipoData = () => {
    TiposService.getTipoById(location.state.id).then((response) =>
    setTipo(response.data)
    );
    setLoading(false);
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user.roles[0] === "ROLE_ADMIN"){
      retrieveTipoData();
    }else{
      navigate("/login/admin");
    }
  }, []);


  const atualizarTipo = (e) => {
    e.preventDefault();
    let tipo = {
      siglaTipo: sigla,
      rotuloTipo: rotulo,
    };
    TiposService.atualizarTipo(location.state.id, tipo);
    toast({
      title: "Tipo atualizado com sucesso.",
      status: "success",
      isClosable: true,
    });
    navigate("/admin/tipos");
  };
  if(loading){
    return (
      <Flex justifyContent="center" align="center" h="100vh">
        <Box>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        </Box>
      </Flex>
    );
  }
  return (
    <Box h="100vh" bg="gray.100">
      <DrawerMenu />

      <Flex bg="gray.100" align="center" justify="center">
        <Box bg="white" p={4} rounded="md" w="50vw">
          <Box w="50w" rounded="3xl" bg="white" display="flex" mb="10">
            <Link to={"/admin/tipos"}>
              <AiFillLeftCircle className="iconVoltar" fontSize={"50px"} />
            </Link>
            <Heading ml="4">Atualizando tipo</Heading>
          </Box>
          <form onSubmit={atualizarTipo}>
            <VStack spacing={4} align="flex-start">
              <FormControl htmlFor="rotulo">
                <FormLabel>Novo rótulo do tipo</FormLabel>

                <Input
                  name="rotulo"
                  placeholder="teste"
                  defaultValue={tipo?.rotuloTipo}
                  onChange={(e) => setRotulo(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="sigla">Nova sigla do tipo</FormLabel>
                <Input
                  name="sigla"
                  placeholder="teste"
                  defaultValue={tipo?.siglaTipo}
                  onChange={(e) => setSigla(e.target.value)}
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
