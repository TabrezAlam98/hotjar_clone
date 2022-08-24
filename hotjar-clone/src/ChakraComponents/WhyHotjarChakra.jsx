
import {Box, Button,Image,Text,Flex,Menu,MenuButton,MenuList,Stack,Divider} from '@chakra-ui/react'
import { ChevronDownIcon,ViewIcon,ChatIcon} from '@chakra-ui/icons'

const WhyHotjarChakra = () => {
  return (
    <>

    <div>
        <Stack >
           <Menu>
            <MenuButton fontSize='18px'  bg='whilte' variant='ghost'  as={Button} rightIcon={<ChevronDownIcon />} >
            Why Hotjar 
             </MenuButton>
              <MenuList >
                <Flex >
                  
                  {/* Box1 */}
                  <Box w='380px' pl={20} > 
                  <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/2tNvAdB4QZnKkk8er4q3SY/00972c63148acdd80bba5deb1e3ca20d/Product_teams_.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>For product teams</Text>
                   <Text textAlign={'left'} mt={1}>Collaborate on user insights</Text>

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/7bu3ttUQaMiusVYgmA5W0E/cb5706443bda65ea5dd0dd4c4ee73ca3/icon-case-studies.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Case studies</Text>
                   <Text textAlign={'left'} mt={1}>Learn how others use Hotjar</Text>
                 </Box>

                 {/* Box2 */}
                 <Box w='380px'pl={10} >
                 
                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/rei0bZGIntzeRG0WxjqMU/458bf0957e41b9a5fb0322613df89ebf/icon-product-management.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>For product managers</Text>
                   <Text textAlign={'left'} mt={1}>Build products users love</Text>

                 </Box>

                 {/* Box3 */}
                 <Box w='380px' pl={10} >

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/2zSp0IQk0E9iOi36cn8n4n/eb85b848d9853ec849a934feeca55f4e/icon-product-design.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>For product designers</Text>
                   <Text textAlign={'left'} mt={1}>Create designs that resonate</Text>

                 </Box>
                 

                 {/* Box4 */}
                 <Box w='380px' pl={10} h="350px" >

                <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/7cgrCG4MpaK39UueExbDYI/71315bdec4d36e36cf57a23195cc92a4/icon-research.svg'/>
                <Text textAlign={'left'} fontWeight={'bold'} mt={4}>For researchers</Text>
                <Text textAlign={'left'} mt={1}>Discover insights others miss</Text>

                 </Box>
                </Flex>
             </MenuList>
           </Menu>
           </Stack>
    </div>
 
 </> )
}

export default WhyHotjarChakra