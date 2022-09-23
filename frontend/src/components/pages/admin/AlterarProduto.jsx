import { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
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
  Switch,
  useToast,
} from "@chakra-ui/react";
import { AiFillLeftCircle } from "react-icons/ai";
import DrawerMenu from "../../reutilizable/DrawerMenu";
import { useEffect } from "react";
import TiposService from "../../../services/TiposService";
import UploadService from "../../../services/uploadService";
import ProdutoService from "../../../services/ProdutoService";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import AuthService from "../../../services/AuthService";

export default function AdicionarProduto() {
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  const [value, setValue] = useState("1.99");
  const [tipos, setTipos] = useState([]);
  const [tipo, setTipo] = useState("");
  const [destaque, setDestaque] = useState(false);
  const [descricao, setDescricao] = useState([""]);
  const [resumo, setResumo] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);
  const toast = useToast();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    if (currentUser) {
      actualProduct(location.state.id).then((res) => {
        console.log(res.data);
        //buscando todos os tipos
        buscandoTipos();

        setTipo(res.data.tipoProduto.id);
        console.log(tipo);
        setDestaque(res.data.destaqueProduto == "SIM" ? true : false);
        setDescricao(res.data.descriProduto);
        setResumo(res.data.resumoProduto);
        setValue(res.data.valorProduto);
        setSelectedFile(res.data.imagemProduto);
      });
    }

    //Buscando informações do atual produto
  }, []);

  const handleImage = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const actualProduct = async () => {
    return await ProdutoService.buscarProduto(location.state.id);
  };

  const buscandoTipos = async () => {
    const response = await TiposService.listarTipos();
    setTipos(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      descriProduto: descricao,
      resumoProduto: resumo,
      valorProduto: value,
      destaqueProduto: destaque ? "SIM" : "NAO",
      tipoProduto: tipo,
    };
    ProdutoService.atualizarProduto(data, location.state.id).then((response) =>
      uploadFile(location.state.id)
    );
    navigate("/admin/produtos");
    toast({
      title: "Produto atualizado com sucesso.",
      status: "success",
      isClosable: true,
    });
  };

  const uploadFile = (idProduto) => {
    let file = new FormData();
    file.append("file", selectedFile);
    //requisição para api para upload de imagem
    UploadService.updateImage(file, idProduto).then((response) =>
      console.log(response.data)
    );
  };

  const handleSwitch = () => {
    setDestaque(!destaque);
  };

  const handleSelect = (e) => {
    setTipo(e.target.value);
  };

  if (!currentUser || currentUser.roles[0] == "ROLE_USER") {
    return navigate("/login/admin");
  }
  return (
    <Box h="100vh" bg="gray.100">
      <DrawerMenu />

      <Flex bg="gray.100" align="center" justify="center">
        <Box bg="white" p={4} rounded="md" w="50vw">
          <Box w="50w" rounded="3xl" bg="white" display="flex" mb="10">
            <AiFillLeftCircle fontSize={"50px"} />
            <Heading ml="4">Atualizando produtos</Heading>
          </Box>
          <form>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="tipo">Tipo</FormLabel>
                <Select
                  variant="filled"
                  value={tipo.id}
                  borderColor="orange"
                  onChange={(e) => handleSelect(e)}
                >
                  {tipos.map((tipo) => {
                    return (
                      <option value={tipo.id} onChange={() => setTipo(tipo.id)}>
                        {tipo.rotuloTipo}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="destaque">Destaque</FormLabel>
                <RadioGroup defaultValue="2">
                  <Stack spacing={5} direction="row">
                    <Switch
                      colorScheme="red"
                      size="lg"
                      value={destaque}
                      onChange={handleSwitch}
                    />
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
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="resumo">Resumo</FormLabel>
                <Textarea
                  name="resumo"
                  placeholder="Insira aqui um resumo sobre o produto"
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                ></Textarea>
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
              <FormControl display="flex">
                <Input
                  mt="10"
                  p="1"
                  w="70%"
                  type="file"
                  onChange={handleImage}
                  accept="image/*"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="orange"
                width="full"
                onClick={handleSubmit}
              >
                Atualizar produto
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
