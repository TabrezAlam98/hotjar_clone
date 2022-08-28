import React from 'react'
import {Box,Flex,Image,Text,Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Spacer} from '@chakra-ui/react'

const RecordingPart1 = () => {
  return (
    <Box  width='90%' height='500px' margin='auto' mt={14}>
        <Flex>
            <Box  width='36%' height='500px'p={5}>
                <Text fontSize={'3xl'} mt={10} textAlign="left">See what your users see</Text>
                <Text fontSize={'xl'} textAlign="left" mt={5}>Recordings are playbacks of users scrolling, moving, u-turning, and rage clicking on your site.</Text>

                {/* Accordition 1*/}
 <Accordion  border={'1px'} color='black'  mt={8} borderRadius='5px'>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}>Map the full user journey</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left" >
    From entry to exit, you can reliably map the user’s full experience. 
    </AccordionPanel >
  </AccordionItem>


                {/* Accordition 2*/}
 
  <AccordionItem mt={1}> 
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}> Watch users in-the-wild</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    Just released a change? Watch recordings to check it’s working as expected. 
    </AccordionPanel>
  </AccordionItem>

                {/* Accordition 3*/}
 
                <AccordionItem mt={1}> 
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}> Compare user cohorts</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    Upload your custom data to filter recordings by churning customers or big spenders. 
    </AccordionPanel>
  </AccordionItem>

                {/* Accordition 4*/}
 
                <AccordionItem mt={1}> 
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}>Spot problems, pain points, bugs</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    Filter down to recordings of users rage clicking and u-turning to troubleshoot, fast.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </Box>
            <Spacer/>
            <Box box-shadow ='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' width='62%' height='480px'>
            <video data-testid="video-container" width="100%" height='100%' controls>
        <source
          src="https://videos.ctfassets.net/lh3zuq09vnm2/EFyFOljkHxHzS5rpMmvOS/f56cdc3fc39d40df443e3a76b980356b/recordings-rage_clicks-u_turns.mp4"
          type="video/mp4"
        />
      </video>
            </Box>
        </Flex>
        
    </Box>
  )
}

export default RecordingPart1