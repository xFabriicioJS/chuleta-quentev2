import { Box } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./components/pages/Admin";
import AdminProdutos from "./components/pages/AdminProdutos";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import AdminUsuarios from "./components/pages/AdminUsuarios";
import AdminAddUsuario from "./components/pages/AdminAddUsuario";
import background from './images/background.jpg';


function App() {


  return (

    <Box
    backgroundImage={background}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    background="cover"
    backdropFilter='blur(10px) hue-rotate(90deg)'
    zIndex="-1"
    height="1800px"
    width="100%"
    >
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/produtos" element={<AdminProdutos />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
          <Route path="/admin/addusuario" element={<AdminAddUsuario/>} />
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
