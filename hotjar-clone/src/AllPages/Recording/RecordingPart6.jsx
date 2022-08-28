import {Box,Flex,Text,Image, Spacer,Button} from '@chakra-ui/react'

const RecordingPart6 = () => {
  return (
    <Box style={{marginTop:"50px",marginBottom:'100px',background:'rgb(255,156,126)'}} width='90%' margin='auto'  height='400px'>
        <Flex width='80%' margin='auto' >
            <Box width='55%' margin='auto'  textAlign='left'>
                <Text fontSize="5xl" mt={10}> The beginner's guide to recordings</Text>
                <Text mt={2} fontSize='xl'>A complete guide to website recordings with chapters about getting started, case studies, practical examples, and FAQs.</Text>
                
                   
                    <Button mt={10} border={'1px'} color='white' bg={'rgb(50,79,190)'}>See Recording guide</Button>
                 
            </Box>
            <Spacer/>
            <Box width='40%' margin='auto' >
              
                <Box mt={10}  ml={10}>
                    <Image width='450px' src='https://images.ctfassets.net/lh3zuq09vnm2/6Uz2UTvWb2wj4igjbrLv5k/bdeb0d67e601f8ea96d4d2977a4e6a40/google-analytics-guide-hero.svg'/>
                 </Box>
              
            </Box>
        </Flex>
    </Box>
  )
}

export default RecordingPart6