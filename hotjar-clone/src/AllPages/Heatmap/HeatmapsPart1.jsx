import React from 'react'
import {Box,Flex,Image,Text,Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Spacer} from '@chakra-ui/react'

const HeatmapPart1 = () => {
  return (
    <Box  width='90%' height='500px' margin='auto' mt={14}>
        <Flex>
            <Box  width='36%' height='500px'p={5}>
                <Text fontSize={'3xl'} mt={10} textAlign="left">Visualize user behavior</Text>
                <Text fontSize={'xl'} textAlign="left" mt={5}>Heatmaps visually represent where users click, move, and scroll on your site.</Text>

                {/* Accordition 1*/}
 <Accordion  border={'1px'} color='black'  mt={8} borderRadius='5px'>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}> Discover what attracts attention</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left" >
    See what elements users are drawn towards, and the parts they completely miss.
    </AccordionPanel >
  </AccordionItem>


                {/* Accordition 2*/}
 
  <AccordionItem mt={1}> 
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}> Learn what gets ignored</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
   Learn exactly where users stop scrolling and leave with scroll maps.
    </AccordionPanel>
  </AccordionItem>

                {/* Accordition 3*/}
 
                <AccordionItem mt={1}> 
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}> Analyze behavior pre- & post-launch</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    See where users move, click, and scroll before and after you release a change.
    </AccordionPanel>
  </AccordionItem>

                {/* Accordition 4*/}
 
                <AccordionItem mt={1}> 
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex>
                <Image w={25} mt={1} mr={3} src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg'/>
                <Text fontSize={"xl"}>Compare desktop, tablet, and mobile</Text>
            </Flex>
    
        </Box>
        <AccordionIcon/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    Learn how behavior changes depending on the device your user is on.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </Box>
            <Spacer/>
            <Box box-shadow ='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' width='62%' height='480px'>
            <video data-testid="video-container" width="100%" height='100%' controls>
        <source
          src="https://videos.ctfassets.net/lh3zuq09vnm2/6mjv7lOeah0QexjSdvVFY5/5b9529d1003ffbdbbacfa899a822155b/heatmaps-inspecting_clicks.mp4"
          type="video/mp4"
        />
      </video>
            </Box>
        </Flex>
        
    </Box>
  )
}

export default HeatmapPart1