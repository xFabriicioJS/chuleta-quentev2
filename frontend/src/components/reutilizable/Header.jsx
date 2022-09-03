<<<<<<< HEAD
import React from 'react';
import {Box, Stack, Image, Input, InputGroup, InputLeftElement, Heading, Text} from '@chakra-ui/react';
import logo from '../../images/logochurrascopequeno.png';
import './Header.css'
import {FaSearch} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {RiAdminFill, RiUser2Fill} from 'react-icons/ri'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <Box w="full" backgroundColor="gray.100" h="70px" boxShadow={'dark-lg'} roundedBottom="xl">
        <Stack spacing={20} direction="row">
            <Box mt={4} p={2}>
                <Image
                src={logo}
                fontSize={'4xl'}
                />
            </Box>

            <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      mt={4}
                      children={<FaSearch color='gray' fontSize={'20px'}/>}
                    />
                    <Input w="55%" focusBorderColor='red.400'rounded="2xl" boxShadow={'lg'} mt={4} type='text' placeholder='Pesquise aqui...' />
            </InputGroup>
            <Stack direction="row">
              <Box mt={4} mr={5} display="flex" gap="20px">

             
              <MdOutlineEmail color='black' fontSize={'25px'} className="icon"/>
              <FiShoppingCart color='black' fontSize={'25px'} className="icon"/>
              <BsFillBookmarkStarFill color='black' fontSize={'25px'} className="icon"/>
              
              <Link to={"/login/admin"}>
                <Box w="20" display="flex" bgColor="black" h="8" p="1" rounded="xl" _hover={{background: "red"}} transition="1.0s">
                <Text textColor="white">
                  Admin
                </Text>
                <RiAdminFill color='white' fontSize={'25px'} />
                </Box>
              </Link>
               
              <Link to={"/login/cliente"}>
                <Box w="20" display="flex" bgColor="black" h="8" p="1" rounded="xl" _hover={{background: "red"}} transition="1.0s">
                <Text textColor="white">
                  Cliente
                </Text>
                <RiUser2Fill color='white' fontSize={'25px'} />
                </Box>
              </Link>    
              </Box>
            
            </Stack>
          
        </Stack>
       
    </Box>
  )
}

export default Header

=======
import React from 'react';
import {Box, Stack, Image, Input, InputGroup, InputLeftElement, Heading, Text} from '@chakra-ui/react';
import logo from '../../images/logochurrascopequeno.png';
import './Header.css'
import {FaSearch} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {RiAdminFill} from 'react-icons/ri'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <Box w="full" backgroundColor="gray.100" h="70px" boxShadow={'dark-lg'} roundedBottom="xl">
        <Stack spacing={20} direction="row">
            <Box mt={4} p={2}>
                <Image
                src={logo}
                fontSize={'4xl'}
                />
            </Box>

            <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      mt={4}
                      children={<FaSearch color='gray' fontSize={'20px'}/>}
                    />
                    <Input w="55%" focusBorderColor='red.400'rounded="2xl" boxShadow={'lg'} mt={4} type='text' placeholder='Pesquise aqui...' />
            </InputGroup>
            <Stack direction="row">
              <Box mt={4} mr={5} display="flex" gap="20px">

             
              <MdOutlineEmail color='black' fontSize={'25px'} className="icon"/>
              <FiShoppingCart color='black' fontSize={'25px'} className="icon"/>
              <BsFillBookmarkStarFill color='black' fontSize={'25px'} className="icon"/>
              
              <Link to={"/login"}>
                <Box w="20" display="flex" bgColor="black" h="8" p="1" rounded="xl" _hover={{background: "red"}} transition="1.0s">
                <Text textColor="white">
                  Admin
                </Text>
                <RiAdminFill color='white' fontSize={'25px'} />
                </Box>
              </Link>  
              </Box>
            
            </Stack>
          
        </Stack>
    </Box>
  )
}

export default Header

>>>>>>> 30e6c3d7c087a8a804f054876a57788c2e534afa
