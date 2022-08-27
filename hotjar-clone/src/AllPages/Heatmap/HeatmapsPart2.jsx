import React from 'react'
import {Box,Text,Image,Flex, Spacer} from '@chakra-ui/react'
import AutoSlider1 from '../Home/AutoSlider1'

export const HeatmapsPart2 = () => {
  return (
   <Box width='90%' margin='auto' mt={20} mb={10}>
    <Text fontSize='4xl' mb={10}>7.5 million heatmaps created for some of the world's largest sites</Text>
    <AutoSlider1/>
    <Box width='100%' mt={20}>
      <Flex>
        <Box width='32%'   height='250px' background='rgb(255,224,94)' >
          <Image  width={'30px'} mt={7} ml={10} src='https://images.ctfassets.net/lh3zuq09vnm2/13J3vruVEkoo4nmZgAOP4F/fc4b60f2fac2e536a9859192aca900c4/flame-ember-black.svg'/>
          <Text fontSize={'2xl'} textAlign="left" ml={10} mt={3}>Determine if your changes worked</Text>
          <Text fontSize={'md'} textAlign="left" ml={10} mt={3}>Wondering if users are really engaging with your latest update? Heatmaps will show you if it’s capturing attention or getting ignored. </Text>
        </Box>
        <Spacer/>
        <Box width='32%'   height='250px' bg={'rgb(195,240,247)'}>
        <Image  width={'30px'} mt={7} ml={10} src='https://images.ctfassets.net/lh3zuq09vnm2/13J3vruVEkoo4nmZgAOP4F/fc4b60f2fac2e536a9859192aca900c4/flame-ember-black.svg'/>
          <Text fontSize={'2xl'} textAlign="left" ml={10} mt={3}>Determine if your changes worked</Text>
          <Text fontSize={'md'} textAlign="left" ml={10} mt={3}>Wondering if users are really engaging with your latest update? Heatmaps will show you if it’s capturing attention or getting ignored. </Text>
        </Box>
        <Spacer/>
        <Box width='32%'   height='250px' bg={'rgb(255,204,221)'}>
        <Image  width={'30px'} mt={7} ml={10} src='https://images.ctfassets.net/lh3zuq09vnm2/13J3vruVEkoo4nmZgAOP4F/fc4b60f2fac2e536a9859192aca900c4/flame-ember-black.svg'/>
          <Text fontSize={'2xl'} textAlign="left" ml={10} mt={3}>Determine if your changes worked</Text>
          <Text fontSize={'md'} textAlign="left" ml={10} mt={3}>Wondering if users are really engaging with your latest update? Heatmaps will show you if it’s capturing attention or getting ignored. </Text>
        </Box>
      </Flex>

    </Box>
   </Box >
  )
}
