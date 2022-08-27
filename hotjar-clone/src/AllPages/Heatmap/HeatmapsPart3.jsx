import {Box,Flex,Text,Image, Spacer,Button} from '@chakra-ui/react'

const HeatmapsPart3= () => {
  return (
    <Box style={{marginTop:"100px",marginBottom:'100px',background:'rgb(255,167,139)'}} width='90%' margin='auto'  height='300px'>
        <Flex width='80%' margin='auto' >
            <Box width='55%' margin='auto' height='300px' textAlign='left'>
                <Text fontSize="5xl" mt={5}>Get started with Heatmaps</Text>
                <Text mt={2} fontSize='xl'>The world's most popular heatmap feature. Trusted by over 900,000 websites across 180+ countries.</Text>
                <Flex mt={10}>
                    <Button border={'1px'} color='rgb(50,79,190)'>Get started free</Button>
                    <Button ml={5} border={'1px'} color='white' bg={'rgb(50,79,190)'}>Sign up width Google</Button>
                    
                </Flex>
                <Text fontSize='md' mt={5}>No credit card required</Text>
            </Box>
            <Spacer/>
            <Box width='40%' margin='auto'  height='300px'>
              
                <Box>
                    <Flex mt={20} >
                        <Image width='5' src='https://images.ctfassets.net/lh3zuq09vnm2/5ZsuWCZFZopY4RuxPOmNGf/a6f45d79c5f9f930da1e5e91e8c912dc/Product-forge-black.svg'/>
                        <Text ml={5} fontSize='xl'>Store heatmaps for 365 days</Text>
                     </Flex>
                    <Flex mt={7} >
                        <Image width='5' src='https://images.ctfassets.net/lh3zuq09vnm2/13J3vruVEkoo4nmZgAOP4F/fc4b60f2fac2e536a9859192aca900c4/flame-ember-black.svg'/>
                        <Text ml={5} fontSize='xl'>Unlimited heatmaps on all plans</Text>
                     </Flex>
                    <Flex mt={7} >
                        <Image w={5} src='https://images.ctfassets.net/lh3zuq09vnm2/2iq5dA7MNtpSxc5eYuWi4n/99753fbe18bdb2193c49f87419439a7e/Privacy.svg'/>
                        <Text ml={5} fontSize='xl'>GDPR- & CCPA-ready</Text>
                     </Flex>
                 </Box>
              
            </Box>
        </Flex>
    </Box>
  )
}

export default HeatmapsPart3