import { Box } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./components/pages/Admin";
import AdminProdutos from "./components/pages/AdminProdutos";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import background from './images/background.jpg'

function App() {
  return (

        <Routes>
 
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/produtos" element={<AdminProdutos />} />
          {/*          <Route path="/destaques" element={<Destaques/>} />
          <Route path="/buscaProduto" element={<BuscaProduto/>} />
          <Route path="/admin" element={<Admin/>} />
          
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          <Route path="/admin/tipos" element={<AdminTipos/>} /> */}
        </Routes> 
   
  );
}

export default App;
