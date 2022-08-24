import { Box ,Text,Flex,Image} from '@chakra-ui/react'
import React from 'react'

const HomePart1 = () => {
  return (
    <Box width={'90%'} style={{margin:'auto',marginTop:'30px'}}>
        <Text as='h1' fontSize='5xl' width={'80%'}  textAlign={'left'}>
        Understand<span style={{color:'tomato'}}>how users behave</span>  on your site, what they need, and how they feel, fast.
        </Text>
        <Box mt={7}>
            <Flex>
                <Box >
                    <Flex>
                    <Image w={5} src='https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/32b9315a40b4f1363fb448bd0cab5534/icon-no-card.svg'/>
                    <Text ontSize={18} ml={3}f>No credit card required</Text>
                    </Flex>
                </Box>
                <Box ml={10}>
                <Flex>
                    <Image w={5} src='https://images.ctfassets.net/lh3zuq09vnm2/o8L9i7vSjKytR7aYfef7C/ead95db8958fa7ef66750e9ba4fea91e/icon-sign.svg'/>
                    <Text fontSize={18} ml={3}>56,549 users signed up last month</Text>
                    </Flex>
                </Box>
                <Box ml={10}>
                <Flex>
                    <Image w={5} src='https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg'/>
                    <Text fontSize={18} ml={3}>GDPR- & CCPA-ready</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default HomePart1