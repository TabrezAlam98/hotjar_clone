import {Box,Flex,Text,Image, Spacer,Button} from '@chakra-ui/react'

const HeatmapsPart6 = () => {
  return (
    <Box style={{marginTop:"50px",marginBottom:'100px',background:'rgb(255,156,126)'}} width='90%' margin='auto'  height='400px'>
        <Flex width='80%' margin='auto' >
            <Box width='55%' margin='auto'  textAlign='left'>
                <Text fontSize="5xl" mt={10}> The complete guide to heatmaps</Text>
                <Text mt={2} fontSize='xl'>A complete guide to website heatmaps with chapters about creating and analyzing heatmaps, case studies, practical examples, and FAQs.</Text>
                
                   
                    <Button mt={10} border={'1px'} color='white' bg={'rgb(50,79,190)'}>See heatmaps guide</Button>
                 
            </Box>
            <Spacer/>
            <Box width='40%' margin='auto' >
              
                <Box mt={10}  ml={10}>
                    <Image width='450px' src='https://images.ctfassets.net/lh3zuq09vnm2/6YXTcXVqY8qNHnBPCq4I3b/eb109e93a3982c2528d92b750c218ed9/Heatmaps.svg'/>
                 </Box>
              
            </Box>
        </Flex>
    </Box>
  )
}

export default HeatmapsPart6