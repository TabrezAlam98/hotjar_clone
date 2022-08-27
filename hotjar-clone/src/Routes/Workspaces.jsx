import {Image,Box,Text,Divider,Flex, MenuButton,Menu,Button,Input,MenuList, Spacer, Center} from '@chakra-ui/react'
import { ChevronDownIcon,SearchIcon,SmallAddIcon} from '@chakra-ui/icons'
import {  useNavigate } from 'react-router-dom'

const Workspaces = () => {
    const navigate=useNavigate()

    const handleHomepage=()=>{
        navigate('/')
    }
  return (
   <Box width='92%' margin='auto' >
    <Flex p={3} borderBottom='1px' color='black'>
    <Image onClick={handleHomepage}  cursor='pointer' width='90px' src='https://insights.hotjar.com/static/app/img/logo-hotjar.svg'/>
    <Menu>
        <MenuButton ml={5} as={Button} rightIcon={<ChevronDownIcon />}></MenuButton>
        <MenuList width='300px'  borderRadius='8' boxShadow='2xl' p={5}  bg='white' color='black'> 
            
          <Input placeholder=' Find a site or organization'/> 
          <Button width='100%' bg='white' mt={5}></Button>
          <Button  bg='white' fontSize='20' mt={5} marginLeft='-100px'>{ < SmallAddIcon/>}add new site</Button>
        </MenuList>
        
    </Menu>
    <Spacer/>

    <Image mt={2} mr={5} width='25px' height='25px' borderRadius='50%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti5eizycS9A6Ab1zrnub1_i_NKLnD1T_P_g&usqp=CAU'/>
    <Image mt={2} mr={3} width='25px' height='25px' borderRadius='50%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0esvv1I1UQAY5c048D3LbIjIFVCSb-DjpGtMcC8&s'/>
    <Image width='40px' borderRadius='50%' src='https://insights.hotjar.com/static/app/img/default-avatar.png'/>
    </Flex>

    <Flex width='70%' mt={16}> 
        <Text fontSize='xl'> Workspaces</Text>
        <Spacer/>
        <Button border='1px' color='blue'>Active</Button>
        <Button border='1px' color='blue' ml={6}>Archived</Button>
      
    </Flex>
    <Divider width='70%' mt={5}/>
    <Flex width='40%' mt={5}>
        <Box width='45%' height='250px' border='1px' color='blue' borderRadius='6' bg='rgb(235,238,249)' cursor='pointer'>
            <Text fontSize='6xl' mt={20}>+</Text>
            <Text mt={5} fontSize='md'>Create a new workspace</Text>
        </Box>
        <Spacer/>
        <Box width='45%' height='252px' borderTop='2px' color='tomato' borderRadius='5px'>
        <Box width='100%' height='250px' borderTop='2px' color='tomato' boxShadow='2xl' p={5}  bg='white' cursor='pointer'>
            <Text fontSize='xl' color='black'>Workspaces#1</Text>
        </Box>
        </Box>
    </Flex>
   </Box>
  )
}

export default Workspaces