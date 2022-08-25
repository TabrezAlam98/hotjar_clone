import {Box,Flex,Text,Button,Image} from "@chakra-ui/react"
import AutoSlider1 from "./AutoSlider1"

const HomePart2 = () => {
  return (
    <Box style={{width:'90%',margin:'auto',marginTop:'40px'}}>
        <Flex>
            <Box style={{width:"55%"}} h={430} >
              <Image width='100%' height='100%' src="https://embed-ssl.wistia.com/deliveries/3950c660be3ee9e53448e483b5248003.jpg?image_crop_resized=640x360"/>
            </Box>
            <Box style={{width:"45%"}} h={430} >
                <Text as='h1' fontSize={24} style={{width:'60%',margin:"auto",textAlign:'left',marginTop:'50px'}}>The slow, manual days of collating data and feedback are over.</Text>
                <Text fontSize={18} style={{width:'60%',margin:"auto",textAlign:'left',marginTop:'20px'}}>The slow, manual days of collating data and feedback are over.</Text>
                <Box width={'65%'} style={{margin:'auto',marginTop:'50px'}}  >
                    <Flex>
                    <Button ml={3} bg={'white'} border={'1px solid rgb(52,110,241)'}>Start free with email</Button>
                    <Button ml={3} bg={'rgb(50,79,190)'}  color={'white'}>Start free with google</Button>
                    </Flex>
                    <Text fontSize={16} style={{width:'90%',margin:"auto",textAlign:'left',marginTop:'20px'}}>Hotjar is free forever - upgrade anytime</Text>
                </Box>
            </Box>

        </Flex>
         <Text fontSize={35} mt={20} mb={10} >Trusted by 900,000 websites in 180+ countries</Text>
         <AutoSlider1/>
         <Box width='70%' style={{margin:'auto',marginTop:"30px",marginBottom:'20px'}} >
          <Flex>
          <Box ml={10}>
            <Flex>
            <Image  w={5}src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg"/>
            <Text fontSize={18} ml={3}>No credit card required</Text>
            </Flex>
          </Box>
          <Box ml={20}>
            <Flex>
            <Image  w={5}src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg"/>
            <Text fontSize={18} ml={3}>No credit card required</Text>
            </Flex>
          </Box>
          <Box ml={20}>
            <Flex>
            <Image  w={5}src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg"/>
            <Text fontSize={18} ml={3}>No credit card required</Text>
            </Flex>
          </Box>
          </Flex>
         </Box>
        

    </Box>
  )
}

export default HomePart2