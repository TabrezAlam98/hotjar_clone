import {Box,Flex ,Image,Text,Link} from '@chakra-ui/react'

const HomePart4 = () => {
  return (
    
    <Box  width='90%' margin={'auto'}>
     <Flex>
       <Box  height='500px' width='50%'>
        <Text width='80%' as='h1' mb={10} textAlign="left" fontSize={30}>Learn how we keep end-user privacy at the heart of everything we do.</Text>
        <Image height='70%' src='https://images.ctfassets.net/lh3zuq09vnm2/Kd9G2nzabNFE0cjLdWIpY/a435cf14a4377f665a851a62256e3e16/Hotjar-Logo-Visual.svg'/>
       </Box>
       <Box  width='50%'>
        <Flex>
            <Box  width='50%'>
                <Image mt={6}  w={6} src='https://images.ctfassets.net/lh3zuq09vnm2/5B8CskghnpgzwFXtm8Ugma/80bebef0f59d2b56882429ff1ab72942/Legal.svg'/>
                <Text fontWeight='bold' fontSize='xl' textAlign='left' mt={2}>GDPR commitment</Text>
                <Text textAlign='left' color='blue' cursor='pointer' mt={4} fontSize='lg'><u>Learn more</u></Text>
                
                <Image mt={14}  w={6} src='https://images.ctfassets.net/lh3zuq09vnm2/5B8CskghnpgzwFXtm8Ugma/80bebef0f59d2b56882429ff1ab72942/Legal.svg'/>
                <Text fontWeight='bold' fontSize='xl' textAlign='left' mt={2}>PCI compliance</Text>
                <Text textAlign='left' color='blue' cursor='pointer' mt={4} fontSize='lg'><u>Learn more</u></Text>
            </Box>
            <Box  width='50%'>
            <Image mt={6}  w={6} src='https://images.ctfassets.net/lh3zuq09vnm2/5B8CskghnpgzwFXtm8Ugma/80bebef0f59d2b56882429ff1ab72942/Legal.svg'/>
                <Text fontWeight='bold' fontSize='xl' textAlign='left' mt={2}>CCPA commitment</Text>
                <Text textAlign='left' color='blue' cursor='pointer' mt={4} fontSize='lg'><u>Learn more</u></Text>
                
                <Image mt={14}  w={6} src='https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg'/>
                <Text fontWeight='bold' fontSize='xl' textAlign='left' mt={2}>Our approach to privacy</Text>
                <Text textAlign='left' color='blue' cursor='pointer' mt={4} fontSize='lg'><u>Learn more</u></Text>
            </Box>
        </Flex>
       </Box>
     </Flex>
    </Box>
    
  )
}

export default HomePart4