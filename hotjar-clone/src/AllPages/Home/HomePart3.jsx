import {Box,Flex,Text,Divider, Spacer,Image,Link} from '@chakra-ui/react'
import { ChevronDownIcon,ViewIcon,ChatIcon} from '@chakra-ui/icons'
import style from './HomePart3.module.css'

const HomePart3 = () => {
  return (
    <Box style={{width:'90%',margin:'auto'}}>
        <Text fontSize='4xl'>How it works</Text>
        <Text fontSize='xl'>Understand how users really experience your site.</Text>
        <Flex >
            {/* First Box */}
            <Box style={{width:'49%',border:"1px solid red"}}>
            <Box mt={39} bg={'rgb(249,245,202)'} style={{width:'17%'}}>
                   <Flex>
                   <Text fontSize={25} ml={2}>{<ViewIcon/>}</Text>
                   <Text mt={2} ml={1}>Observe</Text>
                   </Flex>
                   </Box>
                <Divider mt={5}/>

                <Flex mt={5}>
                    {/* First Box1 */}
                    <Box border={'1px'} height='400px' width='48%' color='black'>
                    <Box width='100%' color='black' className={style.firstBox1}>
                        <Image className={style.image} src='https://images.ctfassets.net/lh3zuq09vnm2/5khXOtcSPp0ttREXhZirXR/bf41bc4a997d0ea49359482c4c36d257/Heatmaps.svg'/>
                         <Text>Heatmaps</Text>
                         <Text>Visualize user behavior</Text>
                         <Box className={style.overlay}>
                            <Box className={style.text}>
                                tabrez
                            </Box>
                         </Box>
                    </Box>
                    <Box className={style.link}>
                    <Link ><u>Learn more</u></Link>
                    </Box>
                    
                    </Box>
                    <Spacer/>

                    {/* First Box2 */}
                    <Box style={{width:'48%',border:"1px solid red"}}>hihih</Box>
                </Flex>
             
            </Box>
            <Spacer/>

            {/* Second box */}
            <Box style={{width:'49%',border:"1px solid red"}}>
                    second div
            </Box>

        </Flex>
    </Box>
  )
}

export default HomePart3