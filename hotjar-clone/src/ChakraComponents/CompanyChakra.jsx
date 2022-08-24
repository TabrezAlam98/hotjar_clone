
import {Box, Button,Image,Text,Flex,Menu,MenuButton,MenuList,Stack,Divider} from '@chakra-ui/react'
import { ChevronDownIcon,ViewIcon,ChatIcon} from '@chakra-ui/icons'

const CompanyChakra = () => {
  return (
    <>

    <div>
        <Stack >
           <Menu>
            <MenuButton fontSize='18px'  bg='whilte' variant='ghost'  as={Button} rightIcon={<ChevronDownIcon />} >
           Company
             </MenuButton>
              <MenuList >
                <Flex >
                  
                  {/* Box1 */}
                  <Box w='380px' pl={20} > 
                  <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/3qWNbUV9OgVmvQ239eLBB5/fb934659e54eefeb1defb835e01728aa/icon-about-us.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>About us</Text>
                   <Text textAlign={'left'} mt={1}>Get to know us</Text>

                 </Box>

                 {/* Box2 */}
                 <Box w='380px'pl={10} >
                 
                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/2VlR1cp2kOyuAqTevJOVVe/51b73081ac97b801e1a31d40b655ce2d/Careers.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Careers</Text>
                   <Text textAlign={'left'} mt={1}>Join us</Text>

                 </Box>

                 {/* Box3 */}
                 <Box w='380px'h='200px' pl={10} >

                   <Image w={6} mt={10} src='https://images.ctfassets.net/lh3zuq09vnm2/3jLDll20Xgpw6cu2G9HqjC/6e2e55dcec34b9857e96dc9b42b629db/Privacy.svg'/>
                   <Text textAlign={'left'} fontWeight={'bold'} mt={4}>Privacy</Text>
                   <Text textAlign={'left'} mt={1}>Our approach to end-user privacy</Text>

                 </Box>
                 

                 {/* Box4 */}
                 <Box w='380px' pl={10} h="230px" >


                 </Box>
                </Flex>
             </MenuList>
           </Menu>
           </Stack>
    </div>
 
 </> )
}

export default CompanyChakra