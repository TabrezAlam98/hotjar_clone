import {Box,Text,Flex,Image,Button, Spacer} from '@chakra-ui/react'

function HomePart6() {
  return (
    <Box>
        <Flex   width='90%' margin='auto'>
            <Box height='500px' width='50%' >
                <Text mt={130} textAlign='left' fontSize='4xl'>Hey product managers </Text>
                <Text width='80%' textAlign='left' fontSize='xl' mt={7}>See how people are experiencing your product, figure out the changes they need most, and get buy-in for your ideas. Fast.</Text>
                <Button style={{marginLeft:'-570px'}} border={'1px'} mt={70} bg='rgb(50,79,190)' color='white'>Learn more</Button>
            </Box>
            <Box height='500px' width='50%' >
                <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/2HTeG4kWdiRcHOivaSsJQB/71e05f8c3878aacf73a184d089c420d0/for-product-managers.png'/>
            </Box>
        </Flex>

        <Flex  width='90%' margin='auto' mt={50}>
        <Box height='500px' width='50%' >
                <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/6ioTYDL5n45nynSHM19c8L/3fcb075f45c84cced4f980463fa429b9/for-product-designers.png'/>
            </Box>
            <Spacer/>
            <Box height='500px' width='45%' >
                <Text mt={100} textAlign='left' fontSize='4xl'>Hi product designers</Text>
                <Text width='80%' textAlign='left' fontSize='xl' mt={7}>Design products that resonate, with Hotjar’s help. Figure out what works, what doesn’t, and why.</Text>
                <Button style={{marginLeft:'-500px'}} border={'1px'} mt={70} bg='rgb(50,79,190)' color='white'>Learn more</Button>
            </Box>
        </Flex>

        <Flex   width='90%' margin='auto' mt={50} mb={50}>
            <Box height='500px' width='50%' >
                <Text mt={130} textAlign='left' fontSize='4xl'>Hello researchers </Text>
                <Text width='80%' textAlign='left' fontSize='xl' mt={7}>Map the user journey to spot patterns and trends. Develop a deeper understanding of your users with Hotjar.</Text>
                <Button style={{marginLeft:'-570px'}} border={'1px'} mt={70} bg='rgb(50,79,190)' color='white'>Learn more</Button>
            </Box>
            <Box height='500px' width='50%' >
                <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/3Cia2mWk2TU13p9HZizWYu/80091dc0941557d025f9af856ad7cf57/for-researchers.png'/>
            </Box>
        </Flex>
    </Box>
  )
}

export default HomePart6