
import { Box } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import AdminProdutos from "./components/pages/admin/AdminProdutos";
import Homepage from "./components/pages/Homepage";
import LoginAdmin from "./components/pages/login/LoginAdmin";
import AdminUsuarios from "./components/pages/admin/AdminUsuarios";
import CadastroCliente from "./components/pages/login/CadastroCliente";
import LoginCliente from "./components/pages/login/LoginCliente";
import "./App.css";
import AdicionarProduto from "./components/pages/admin/AdicionarProduto";
import AdicionarTipo from "./components/pages/admin/AdicionarTipo";
import AdicionarReserva from './components/pages/cliente/AdicionarReserva'

function App() {


  const basicBoxStyles = {
    backgroundImage: 'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat'
  }

  return (


    <Box
    >
        <Routes>
          <Route path="/admin/adicionarProduto" element={<AdicionarProduto/>} />          
          <Route path="/" element={<Homepage/>} />
          <Route path="/login/admin" element={<LoginAdmin/>} />
          <Route path="/login/cliente" element={<LoginCliente/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/produtos" element={<AdminProdutos />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          <Route path="/cadastro-cliente" element={<CadastroCliente/>} />
          <Route path="/admin/adicionar-tipo" element={<AdicionarTipo/>} />
          <Route path="/cliente/adicionar-reserva" element={<AdicionarReserva/>} />          
          {/*          <Route path="/destaques" element={<Destaques/>} />
          <Route path="/buscaProduto" element={<BuscaProduto/>} />
          <Route path="/admin" element={<Admin/>} />
          
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          <Route path="/admin/tipos" element={<AdminTipos/>} /> */}
        </Routes>
        </Box> 
  );
}

export default App;
