import { Box } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./components/pages/Admin";
import AdminProdutos from "./components/pages/AdminProdutos";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import AdminUsuarios from "./components/pages/AdminUsuarios";

function App() {


  const basicBoxStyles = {
    backgroundImage: 'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat'
  }

  return (


        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/produtos" element={<AdminProdutos />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          {/*          <Route path="/destaques" element={<Destaques/>} />
          <Route path="/buscaProduto" element={<BuscaProduto/>} />
          <Route path="/admin" element={<Admin/>} />
          
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          <Route path="/admin/tipos" element={<AdminTipos/>} /> */}
        </Routes> 
  );
}

export default App;
