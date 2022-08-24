
import {Box, Button,Image,Text,Flex,Menu,MenuButton,MenuList,Stack,Divider} from '@chakra-ui/react'
import { ChevronDownIcon,ViewIcon,ChatIcon} from '@chakra-ui/icons'

const LearnChakra = () => {
  return (
    <>

    <div>
        <Stack >
           <Menu>
            <MenuButton fontSize='18px'  bg='whilte' variant='ghost'  as={Button} rightIcon={<ChevronDownIcon />} >
            Learn 
             </MenuButton>
              <MenuList >
                <Flex >
                  
                  {/* Box1 */}
                  <Box w='380px' pl={20} > 
                  <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/29cHXX50MaQFbFbNuuEobF/ef757d222544a89e87e2c23642a499eb/icon-guides.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Guides</Text>
                   <Text textAlign={'left'} mt={1}>Get the most out of Hotjar</Text>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/77BtJYrFoyCLErPB8o2dnA/4621264b773c3f9625ce987ece5bb4b6/Support.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Support</Text>
                   <Text textAlign={'left'} mt={1}>Learn how to set up and use Hotjar</Text>
                 </Box>

                 {/* Box2 */}
                 <Box w='380px'pl={10} >
                 
                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/6E1bW5je6USepU41R2psoP/025fc489632d42f5455f7253653477a9/Blog.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Blog</Text>
                   <Text textAlign={'left'} mt={1}>News, analysis, tips, and tutorials</Text>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/01sD7ikwsm8A9PzqXxeovt/d718ae8df27d248c66166bddf71aac42/Vector.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Hotjar learning</Text>
                   <Text textAlign={'left'} mt={1}>Courses to help you flourish</Text>

                 </Box>

                 {/* Box3 */}
                 <Box w='380px' pl={10} >

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/69OiEBqKuuE9y84cHDYFYD/8fb8702f45048de7342abacc186e7f78/Product-forge.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Product forge</Text>
                   <Text textAlign={'left'} mt={1}>Cutting-edge product insights</Text>

                 </Box>
                 

                 {/* Box4 */}
                 <Box w='380px' pl={10} h="350px" >
                  

                <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/6WkKq86kztFCChLxHqxJ53/63ffc9f2001da8b5ad7292d53808278c/updates.svg'/>
                <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Product updates</Text>
                <Text textAlign={'left'} mt={1}>What’s new</Text>

                 </Box>
                </Flex>
             </MenuList>
           </Menu>
           </Stack>
    </div>
 
 </> )
}

export default LearnChakra