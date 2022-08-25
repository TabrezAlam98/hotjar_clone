import {Box,Divider,Flex,Spacer,Text,Image} from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
    <Box border={'1px solid black'} bg={'rgb(32,38,65)'} color={'gray'} mt={20}>
        <Flex >
            <Box width={'800px'}> 
                <Flex>
                <Box  fontSize={17} textAlign={'left'} pl={20}>
                    <Text mt={8} color={'white'} fontWeight={'bold'}>Product</Text>
                    <Text mt={2}>Product tour</Text>
                    <Text mt={2}>Heatmaps</Text>
                    <Text mt={2}>Session recordings</Text>
                    <Text mt={2}>Feedback</Text>
                    <Text mt={2}>Surveys</Text>
                    <Divider mt={3} mb={3}/>
                    <Text mt={2}>Integrations</Text>
                    <Text mt={2}>Survey templates</Text>
                    <Text mt={2}>Highlights</Text>
                    <Text mt={2}>Workspaces</Text>
                    <Text mt={2}> Dashboard</Text>
                    <Text mt={2}>rends</Text>
                </Box>
                <Box fontSize={17} textAlign={'left'} pl={20}>
                    <Text mt={8} color={'white'}  fontWeight={'bold'}>Why Hotjar</Text>
                    <Text mt={2}>For product teams</Text>
                    <Text mt={2}>For product managers</Text>
                    <Text mt={2}>For product designers</Text>
                    <Text mt={2}>For researchers</Text>
                    <Text mt={2}>Case studies</Text>
                </Box>
                <Box fontSize={17} textAlign={'left'} width={'250px'} pl={20}>
                    <Text mt={8} color={'white'}  fontWeight={'bold'}>Learn</Text>
                    <Text mt={2}>Guides</Text>
                    <Text mt={2}>Blog</Text>
                    <Text mt={2}>Product forge</Text>
                    <Text mt={2}>Product updates</Text>
                    <Text mt={2}>Support</Text>
                    <Text mt={2}>Product management 101</Text>
                    <Text mt={2}>Product management glossary</Text>
                    <Text mt={2}>UX design</Text>
                    <Text mt={2}>Product experience insights</Text>
                    <Text mt={2}>Website tracking</Text>
                   
                </Box>
                </Flex>
            </Box>
            <Box width={'768px'} > 
                <Flex>
                <Box fontSize={17} textAlign={'left'} width={'250px'} pl={20}>
                    <Text mt={8} color={'white'}  fontWeight={'bold'}>Company</Text>
                    <Text mt={2}>About us</Text>
                    <Text mt={2}>Careers</Text>
                    <Text mt={2}>Privacy</Text>
                    <Text mt={2}>Press</Text>
                 
                </Box>
                <Spacer/>
                <Box fontSize={17} textAlign={'left'} width={'250px'} >
                <Text mt={8} color={'white'}  fontWeight={'bold'}>Compliance</Text>
                    <Text mt={2}>Legal overview</Text>
                    <Text mt={2}>Compliance & security</Text>
                    <Text mt={2}>Terms of Service</Text>
                    <Text mt={2}>Privacy Policy</Text>
                    <Text mt={2}>Acceptable Use Policy</Text>
                </Box>
                </Flex>
               
            </Box>
          
        </Flex>
       
      <Divider  style={{background:"white",width:'90%',margin:'auto',marginTop:'50px',marginBottom:'15px'}} />
      <Box color={'white'} ml={1300}>
      <Flex >
        <Image  ml={3} src='https://images.ctfassets.net/lh3zuq09vnm2/2xYBSWqzEcgQBCSZvzi2Ba/4900f94996692c866f7bc6e8d270156d/Facebook.svg'/>
        <Image ml={3}  src='https://images.ctfassets.net/lh3zuq09vnm2/2gmz7xiNP3FbVtmkrX0yOk/22c37a7312bb87516b445506a15bd4ab/Twitter.svg'/>
        <Image ml={3}  src='https://images.ctfassets.net/lh3zuq09vnm2/1aJwui56wNjZwTTH9ZTGkk/4a8f3d1a644fb2614a86fce9582e8e09/LinkedIn.svg'/>
        <Image ml={3} src='https://images.ctfassets.net/lh3zuq09vnm2/2nncGYpZv80x0X0bG857Cz/8d256f52107275c5437b8b826345fc9c/Youtube.svg'/>
        </Flex>
      </Box>

      <Box border={1} pt={10} pb={10} w={'90%'} style={{margin:'auto'}} fontSiz={'19px'}>
        <Flex>
        <Box>
            <Flex>
            <Image style={{margin:'5px 10px 0 0 '}} src='https://www.hotjar.com/images/hotjar-logo-small.svg'/>
            <Text>Copyright © 2014 - 2022 Hotjar Ltd. All rights reserved.</Text>
            </Flex>
        </Box>
        <Spacer/>
        <Box>
        <Flex > 
            <Box>English (United States)</Box>
            <Box ml={6}>Cookie info</Box>
            <Box ml={6}>Cookie settings</Box>
            <Box ml={6}>Do not track</Box>
        </Flex>
        </Box>
        </Flex>
      </Box>
      
    </Box>
    </>
  )
}

export default Footer