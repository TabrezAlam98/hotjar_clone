import {Box,Flex,Image,Text,Button, Center,Link, Spacer, Divider,Input,Checkbox} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import React,{useState,useContext} from 'react'
import { AppContext } from '../Context/AppContextProvider';
import axios from 'axios'
const Login = () => {
  const [email,setEmail]=useState("eve.holt@reqres.in");
  const [password,setPassword]=useState("cityslicka")
  const navigate=useNavigate()
  const {handleLogin} = useContext(AppContext)

  const handleLoginClick=()=>{
    const payload={
      email,password
    };
    axios.post("https://reqres.in/api/register",payload)
    .then((res)=>{
      console.log(res.data)
      handleLogin(res.data.token)
      navigate('/workspaces')
    })
    .catch((err)=>{
      console.log(err)
    })

    
  }
  

  
  return (
    <Box >
        <Center>
        <Image mt={3} width='80px' height='60px' src='https://insights.hotjar.com/static/dd3f3da381ecbb6aa239.svg'/>
        </Center>
        <Flex >
            <Box width='32%'   >
              <Text fontSize='2xl' textAlign='left' ml={20}>Sign In</Text>
              <Text fontSize='md' mt={5} textAlign='left' ml={20}>Need a Hotjar account? <Link color='blue'><u>Sign Up</u></Link></Text>

             
                <Box width='70%' height='50px' border='1px' margin='auto'mt={10} color='blue' borderRadius={5}>
                   <Flex>
                     <Image height='50px' width='16%' src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png'/>
                     <Button height='49px' color='white' width='85%' bg='rgb(66,133,244)'>Sign in with Google</Button>
                   </Flex>
                 
                  </Box>
                  <Box width='70%' height='50px' border='1px' margin='auto'mt={6} color='rgb(105,109,127)' borderRadius={5}>
                   <Flex>
                     <Image height='35px' width='12%' mt={1} ml={1} src='https://e7.pngegg.com/pngimages/1024/909/png-clipart-computer-icons-lock-padlock-technic-computer-icons.png'/>
                     <Spacer/>
                     <Button height='49px' color='white' width='85%' bg='rgb(105,109,127)'>Sign in with Google</Button>
                   </Flex>
                 
                  </Box>
                  <Flex width='70%' margin='auto' paddingTop='20px' mt={7} >
                  <Divider style={{background:'black'}} width='30%'/>
                  <Text fontSize='12px'  mt='-2.5' width='40%'>Or, sign in with email</Text>
                  <Divider bg='black' width='30%'/>

                  </Flex>
                  
             <Box width='70%'   margin='auto' mt={10} >
              <Text textAlign='left' fontSize='md'>Email address</Text>
              <Input type="text" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
               placeholder='e.g. mary.jackson@nasa.com'  p={7} mt={3}/>

              <Text textAlign='left' fontSize='md' mt={6}>Password</Text>
              <Input 
               value={password}
               onChange={(e)=>setPassword(e.target.ariaValueNow)}
              placeholder='Enter your password' type='password'  p={7} mt={3}/>
              <Box style={{marginLeft:'-200px'}} mt={2}>
              <Link  color='blue'><u>Forgot password?</u></Link>
              </Box>
            
             </Box>
             <Checkbox style={{marginLeft:'-180px'}} mt={7} defaultChecked>Keep me signed in</Checkbox>
             <Box>
              
              <Button onClick={handleLoginClick} width='70%' bg='rgb(50,79,190)' color='white' p={6} mt={5} mb={10} >Sign in</Button>
           
             
             </Box>
            
             
            </Box>
            <Box width='68%' height='750px' bg={'rgb(235,238,249)'} pt={10}>
                <Text textAlign='left' ml={40}>HOTJAR GUIDES</Text>
                <Image width='60%' height='370px' ml={40} mt={2} src='https://insights.hotjar.com/static/37d85d9a61db85c93d7f.png'/>
                <Text fontSize='xl' textAlign='left' ml={40} mt={3}>Guides to learn more about Hotjar</Text>
                <Text width='40%' fontSize='md' textAlign='left' ml={40} mt={3}>Check out our guides to better understand user behavior, make the right changes, improve UX, and increase conversions on your website and product.</Text>
                <Button border={'1px '} mt={30} color='rgb(50,79,190)'  style={{marginLeft:'-600px'}}>Explore Guides</Button>
            </Box>
        </Flex>
    </Box>
  )
}

export default Login