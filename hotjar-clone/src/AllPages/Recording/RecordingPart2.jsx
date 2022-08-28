import React from 'react'
import {Box,Text,Image,Flex, Spacer} from '@chakra-ui/react'
import AutoSlider1 from '../Home/AutoSlider1'

export const RecordingPart2 = () => {
  return (
   <Box width='90%' margin='auto' mt={20} mb={10}>
    <Text fontSize='4xl' mb={10}>1.7 billion new sessions are recorded in Hotjar every year</Text>
    <AutoSlider1/>
    <Box width='100%' mt={20}>
      <Flex>
        <Box width='32%'   height='250px' background='rgb(255,224,94)' >
          <Image  width={'30px'} mt={7} ml={10} src='https://images.ctfassets.net/lh3zuq09vnm2/1GSSTcrzVV1QgopmbLdREo/b0fa8cd5bae61856b80052362a2aea41/recordings.svg'/>
          <Text fontSize={'2xl'} textAlign="left" ml={10} mt={3}>Discover your next great idea</Text>
          <Text fontSize={'md'} textAlign="left" ml={10} mt={3}>Looking for inspiration? Spend five minutes watching real users in your product and you’ll uncover opportunities to improve.  </Text>
        </Box>
        <Spacer/>
        <Box width='32%'   height='250px' bg={'rgb(195,240,247)'}>
        <Image  width={'30px'} mt={7} ml={10} src='https://images.ctfassets.net/lh3zuq09vnm2/1GSSTcrzVV1QgopmbLdREo/b0fa8cd5bae61856b80052362a2aea41/recordings.svg'/>
          <Text fontSize={'2xl'} textAlign="left" ml={10} mt={3}>Prioritize what to build next</Text>
          <Text fontSize={'md'} textAlign="left" ml={10} mt={3}>Don’t let internal opinions dictate your roadmap. Use recordings to gather reliable evidence of real user experience to determine what to build.  </Text>
        </Box>
        <Spacer/>
        <Box width='32%'   height='250px' bg={'rgb(255,204,221)'}>
        <Image  width={'30px'} mt={7} ml={10} src='https://images.ctfassets.net/lh3zuq09vnm2/1GSSTcrzVV1QgopmbLdREo/b0fa8cd5bae61856b80052362a2aea41/recordings.svg'/>
          <Text fontSize={'2xl'} textAlign="left" ml={10} mt={3}>Get buy-in for your suggestions</Text>
          <Text fontSize={'md'} textAlign="left" ml={10} mt={3}>Numbers are easy to ignore—but recordings aren’t. Kick start your next project with recordings to get everyone—from engineers to execs—on the same page.</Text>
        </Box>
      </Flex>

    </Box>
   </Box >
  )
}
