import {Box,Flex,Text,Image, Spacer,Button} from '@chakra-ui/react'

const HomePart5 = () => {
  return (
    <Box style={{marginTop:"100px",marginBottom:'100px',background:'rgb(188,212,238)'}} width='90%' margin='auto'  height='300px'>
        <Flex width='80%' margin='auto' >
            <Box width='55%' margin='auto' height='300px' textAlign='left'>
                <Text fontSize="5xl" mt={5}> Get started with Hotjar</Text>
                <Text mt={2} fontSize='xl'>It only takes a few minutes to get started with Hotjar. Understand your users—start free, today.</Text>
                <Flex mt={10}>
                    <Button border={'1px'} color='rgb(50,79,190)'>Tour the product</Button>
                    <Button ml={5} border={'1px'} color='white' bg={'rgb(50,79,190)'}>Get started free</Button>
                    
                </Flex>
                <Text fontSize='md' mt={5}>No credit card required</Text>
            </Box>
            <Spacer/>
            <Box width='40%' margin='auto'  height='300px'>
              
                <Box>
                    <Flex mt={20} >
                        <Image src='https://images.ctfassets.net/lh3zuq09vnm2/3bfJrCwdekysmEeIxLraIu/085e9e50144c68cf4b4aafe4b00072ea/No-card.svg'/>
                        <Text ml={5} fontSize='xl'>No credit card required</Text>
                     </Flex>
                    <Flex mt={7} >
                        <Image src='https://images.ctfassets.net/lh3zuq09vnm2/4zSu6L7p7Py0u7Bj0gHnZf/48fe73c51f6f33412e4ad73a93598917/Sign.svg'/>
                        <Text ml={5} fontSize='xl'>56,549 users signed up last month</Text>
                     </Flex>
                    <Flex mt={7} >
                        <Image src='https://images.ctfassets.net/lh3zuq09vnm2/2iq5dA7MNtpSxc5eYuWi4n/99753fbe18bdb2193c49f87419439a7e/Privacy.svg'/>
                        <Text ml={5} fontSize='xl'>GDPR- & CCPA-ready</Text>
                     </Flex>
                 </Box>
              
            </Box>
        </Flex>
    </Box>
  )
}

export default HomePart5