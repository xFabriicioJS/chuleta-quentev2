
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
import AdicionarReserva from './components/pages/cliente/AdicionarReserva';
import AdminTipos from "./components/pages/admin/AdminTipos";
import AdminReservas from "./components/pages/admin/AdminReservas";
import ClienteReservas from './components/pages/cliente/ClienteReservas';
import AlterarTipo from './components/pages/admin/AlterarTipo'
import AlterarProduto from "./components/pages/admin/AlterarProduto";
import VisualizarReserva from './components/pages/cliente/VisualizarReserva';

function App() {




  return (
    <Box
    >
        <Routes>
                  
          <Route path="/" element={<Homepage/>} />
          <Route path="/admin/adicionar-produto" element={<AdicionarProduto/>} />  
          <Route path="/admin/produtos/alterar" element={<AlterarProduto/>} />  
          <Route path="/login/admin" element={<LoginAdmin/>} />
          <Route path="/login/cliente" element={<LoginCliente/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/produtos" element={<AdminProdutos />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          <Route path="/cadastro-cliente" element={<CadastroCliente/>} />
          <Route path="/admin/adicionar-tipo" element={<AdicionarTipo/>} />
          <Route path="/cliente/adicionar-reserva" element={<AdicionarReserva/>} />          
          <Route path="/admin/tipos" element={<AdminTipos/>} />
          <Route path="/admin/reservas" element={<AdminReservas/>} />
          <Route path="/cliente/reservas" element={<ClienteReservas/>} />
          <Route path="/cliente/reservas/:id" element={<VisualizarReserva/>} />
          <Route path="/admin/atualizar-tipo/:id" element={<AlterarTipo/>} />
          {/*          <Route path="/destaques" element={<Destaques/>} />
          <Route path="/buscaProduto" element={<BuscaProduto/>} />
          <Route path="/admin" element={<Admin/>} />
          
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
           */}
        </Routes>
        </Box> 
  );
}

export default App;
