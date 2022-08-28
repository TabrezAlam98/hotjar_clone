import {Box,Text,Image,Flex, Spacer} from '@chakra-ui/react'

const RecordingPart5 = () => {
  return (
    <Box>
        <Text fontSize='4xl'>A few more reasons to try Recordings</Text>
        <Flex width='90%' margin='auto' mt={10}>
            <Box width='31%' >
                <Text fontSize='2xl'>365 days of storage</Text>
                <Text mb={10} mt={2}>We’ll store your recordings for one year so you can compare user behavior over time.</Text>

                <Text fontSize='2xl'>Share, comment, & export</Text>
                <Text mb={10} mt={2}>Send recordings using a public link, tag a teammate in the comments, or export to Slack.</Text>
            </Box>
            <Spacer/>
            <Box width='31%' >
            <Text fontSize='2xl'>Rage clicks & u-turns</Text>
                <Text mb={10} mt={2}>Recordings automatically identify when a user rage clicks or u-turns, helping you spot issues.</Text>

                <Text fontSize='2xl'>Built with privacy in mind</Text>
                <Text mb={10} mt={2}>Our privacy features protect you and the people who visit your site.</Text>
            </Box>
            <Spacer/>
            <Box width='31%' >
            <Text fontSize='2xl'>Compare sources of traffic</Text>
                <Text mb={10} mt={2}>Do visitors from paid ads act differently to direct traffic? Filter recordings by referrer URL to find out.</Text>

                <Text fontSize='2xl'>Unlimited users</Text>
                <Text mb={10} mt={2}>No limits on the number of Hotjar users. Share recordings with anyone on your team.  </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default RecordingPart5