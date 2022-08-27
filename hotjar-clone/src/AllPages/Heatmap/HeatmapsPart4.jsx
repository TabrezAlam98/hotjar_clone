import {Box,Flex,Text,Divider, Spacer,Image,Link, Heading} from '@chakra-ui/react'
import { ChevronDownIcon,ViewIcon,ChatIcon} from '@chakra-ui/icons'
import style from './HeatmapsPart4.module.css'

const HeatmapsPart4 = () => {
  return (
    <Box style={{width:'70%',margin:'auto',marginBottom:'100px',marginTop:'200px'}} >
       <Flex>
      
                    <Box border={'1px'} height='450px' width='31%' color='black' borderRadius='5px'>
                    <Box width='100%' color='black' className={style.firstBox1}>
                        <Image className={style.image} src='https://images.ctfassets.net/lh3zuq09vnm2/6Qv16uzcArgmj23zvPE1Zg/e7861ed2958dda93ffdbf313c8a228c1/Recordings.svg'/>
                        <Text textAlign={'left'} ml={3} fontSize={20} fontWeight={'bold'} mt={4}>Recordings</Text>
                        <Text textAlign={'left'} ml={4} fontSize={18} mt={1}>See what your users see</Text>
                         <Box className={style.overlay}>
                            <Box className={style.text}>
                            <Text textAlign={'left'} ml={20} fontWeight={'bold'} mt={20}>Recordings</Text>
                           <Text textAlign={'left'} ml={20} mt={1}>See what your users see</Text>
                           <Text textAlign={'left'} ml={20} fontSize={16} mt={8}>Get live playbacks of users on your site. Improve your site on-the-fly by watching full recordings of each visit. You can see things like clicks, mouse movements, u-turns, and rage clicks.</Text>
                            </Box>
                         </Box>
                    </Box>
                    <Box className={style.link}>
                    <Link ><u>Learn more</u></Link>
                    </Box>
                    
                    </Box>
            
           
            <Spacer/>
            
               
                    <Box border={'1px'} height='450px' width='31%' color='black' borderRadius='5px'>
                    <Box width='100%' color='black' className={style.firstBox1}>
                        <Image className={style.image} src='https://images.ctfassets.net/lh3zuq09vnm2/4COczjOFD9M9107Fg88Ol6/4a0040ffe4c7ebdd8d13c60b2408699a/Incoming-feedback.svg'/>
                        <Text textAlign={'left'} ml={3} fontSize={20} fontWeight={'bold'} mt={4}>Feedback</Text>
                        <Text textAlign={'left'} ml={4} fontSize={18} mt={1}>Discover how users feel</Text>
                         <Box className={style.overlay}>
                            <Box className={style.text}>
                            <Text textAlign={'left'} ml={20} fontWeight={'bold'} mt={10}>Feedback</Text>
                           <Text textAlign={'left'} ml={20} mt={1}>Discover how users feel</Text>
                           <Text textAlign={'left'} ml={20} fontSize={16} mt={8}>A real-time suggestion box on your site where users express frustration or delight about individual parts of a page. Get direct feedback in-the-wild across your site or product.</Text>
                            </Box>
                         </Box>
                    </Box>
                    <Box className={style.link}>
                    <Link ><u>Learn more</u></Link>
                    </Box>
                    
                    </Box>
                  <Spacer/>

                    <Box border={'1px'} height='450px' width='31%' color='black' borderRadius='5px'>
                    <Box width='100%' color='black' className={style.firstBox1}>
                        <Image className={style.image} src='https://images.ctfassets.net/lh3zuq09vnm2/4FznAGtU4dktOtbIGubStD/e496e6120efcf17cbb4a8b514ecbec43/Surveys.svg'/>
                        <Text textAlign={'left'} ml={3} fontSize={20} fontWeight={'bold'} mt={4}>Surveys</Text>
                        <Text textAlign={'left'} ml={4} fontSize={18} mt={1}>Hear from your users</Text>
                         <Box className={style.overlay}>
                            <Box className={style.text}>
                            <Text textAlign={'left'} ml={20} fontWeight={'bold'} mt={10}>Surveys</Text>
                           <Text textAlign={'left'} ml={20} mt={1}>Hear from your users</Text>
                           <Text textAlign={'left'} ml={20} fontSize={16} mt={8}>Create and use targeted surveys to get a better understanding of your users. Send surveys to users in the moment (not weeks later) to validate your ideas in real time.</Text>
                            </Box>
                         </Box>
                    </Box>
                    <Box className={style.link}>
                    <Link ><u>Learn more</u></Link>
                    </Box>
                    
                    </Box>
                
            </Flex>
     </Box>
  )
}

export default HeatmapsPart4