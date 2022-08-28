
import {Box, Button,Image,Text,Flex,Menu,MenuButton,MenuList,Stack,Divider} from '@chakra-ui/react'
import { ChevronDownIcon,ViewIcon,ChatIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const ProductChakra = () => {
  const navigate=useNavigate()

  const handleNextPage=()=>{
    navigate('/heatmap')
  }
  const handleNextPage1=()=>{
    navigate('/recording')
  }
  return (
    <>

    <div>
        <Stack >
           <Menu>
            <MenuButton fontSize='18px'  bg='whilte' variant='ghost'   as={Button} rightIcon={<ChevronDownIcon />} >
              Product 
             </MenuButton>
              <MenuList >
                <Flex >
                  
                  {/* Box1 */}
                  <Box w='380px' > 
                    <Image style={{margin:"50px 0 10px 85px",width:"25px"}} src='https://images.ctfassets.net/lh3zuq09vnm2/1mcY2mB8771rpkc01WpaAC/c0803cf3d2f110c3251d6095400b2f7d/Rocket-ember.svg'/>
                    <Text style={{marginLeft:"-100px",marginBottom:"20px",fontWeight:"bold"}}>Product tour</Text>
                    <Text>See all Hotjar has to offer</Text>
                 </Box>

                 {/* Box2 */}
                 <Box w='380px'pl={10} >
                 
                   <Box mt={39} bg={'rgb(249,245,202)'} style={{width:'36%'}}>
                   <Flex>
                   <Text fontSize={25} ml={2}>{<ViewIcon/>}</Text>
                   <Text mt={2} ml={1}>Observe</Text>
                   </Flex>
                   </Box>
                   <Divider mt={5}/>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/3fvft31gR35Q9BjAxVk4Zw/9f93e529be4989f97d5743844699cf2a/icon-heatmaps.svg'/>
                   <Text cursor={'pointer'} onClick={handleNextPage} textAlign={'left'} fontWeight={'bold'} mt={4}>Heatmaps</Text>
                   <Text textAlign={'left'} mt={1}>Visualize user behaviour</Text>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/76fQfkmWFtHn8xYHEbbzA0/f17539a8253616c98a87062824619972/icon-recordings.svg'/>
                   <Text  cursor={'pointer'} onClick={handleNextPage1} textAlign={'left'} fontWeight={'bold'} mt={4}>Recoridngs</Text>
                   <Text textAlign={'left'} mt={1}>See what your use see</Text>
                 </Box>

                 {/* Box3 */}
                 <Box w='380px' pl={10} >
                 <Box mt={39} bg={'rgb(230,225,245)'} style={{width:'25%'}}>
                   <Flex>
                   <Text fontSize={25} ml={2}>{<ChatIcon/>}</Text>
                   <Text mt={2} ml={1}>Ask</Text>
                   </Flex>
                   </Box>
                   <Divider mt={5}/>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/6hX51iaEPtQHWldsN5Fy3Y/3a66ea3c6ba95bad60f90d9c31113980/icon-incoming-feedback.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>feedback</Text>
                   <Text textAlign={'left'} mt={1}>Discover how your users feel</Text>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/5sO4egYUhUh5eBDtoPB4RS/3102e823999e1e700e876eef2fcb83af/icon-surveys.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Surveys</Text>
                   <Text textAlign={'left'} mt={1}>Hear from your users</Text>
                 </Box>
                 

                 {/* Box4 */}
                 <Box w='380px' pl={10} h="400px" >
                 <Divider mt={95}/>

                <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/2OXb4DK3kqPZI9XZwKDmBR/aa08742d712d15824a5605c8fa8a86b2/icon-integrations.svg'/>
                <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Integrations</Text>
                <Text textAlign={'left'} mt={1}>Discover dozens of integrations</Text>

               <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/5kcQPD6YgY51U3d4ifrkii/5e412e881ace5932492c58c86030d41d/icon-survey-templates.svg'/>
                 <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Survey templates</Text>
                <Text textAlign={'left'} mt={1}>Launch successful serveys faster</Text>
                 </Box>
                </Flex>
             </MenuList>
           </Menu>
           </Stack>
    </div>
 
 </> )
}

export default ProductChakra