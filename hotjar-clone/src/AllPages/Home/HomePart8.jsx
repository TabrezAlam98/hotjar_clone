import {Box,Flex,Text,Image, Spacer,Button} from '@chakra-ui/react'

const HomePart8 = () => {
  return (
    <Box style={{marginTop:"100px",marginBottom:'100px',background:'rgb(255,218,166)'}} width='90%' margin='auto'  height='550px'>
        <Flex width='80%' margin='auto' >
            <Box width='55%' margin='auto'  textAlign='left'>
                <Text fontSize="5xl" mt={40}> Get started with Hotjar</Text>
                <Text mt={2} fontSize='xl'>It only takes a few minutes to get started with Hotjar. Understand your users—start free, today.</Text>
                <Flex mt={10}>
                    <Button border={'1px'} color='rgb(50,79,190)'>Tour the product</Button>
                    <Button ml={5} border={'1px'} color='white' bg={'rgb(50,79,190)'}>Get started free</Button>
                    
                </Flex>
                <Text fontSize='md' mt={5}>No credit card required</Text>
            </Box>
            <Spacer/>
            <Box width='40%' margin='auto'  height='300px'>
              
                <Box  height='420px' >
                    <Image src='https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2FyBDals8aU8RWtb0xLnPkI%2F19b391bda8f43e16e64d40b55561e5cd%2FHow_tracking_user_behavior_on_your_website_can_improve_customer_experience.png&w=1920&q=75'/>
                 </Box>
              
            </Box>
        </Flex>
    </Box>
  )
}

export default HomePart8