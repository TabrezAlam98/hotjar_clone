import {Box,Text,Image,Flex, Spacer} from '@chakra-ui/react'

const HeatmapsPart5 = () => {
  return (
    <Box>
        <Text fontSize='4xl'>A few more reasons to try Hotjar’s Heatmaps</Text>
        <Flex width='90%' margin='auto' mt={10}>
            <Box width='31%' >
                <Text fontSize='2xl'>Unlimited heatmaps</Text>
                <Text mb={10} mt={2}>Heatmaps for every page on your site.</Text>

                <Text fontSize='2xl'>Combine multiple pages</Text>
                <Text mb={10} mt={2}>Got slightly different versions of a page? Combine them into one heatmap.</Text>
            </Box>
            <Spacer/>
            <Box width='31%' >
            <Text fontSize='2xl'>Click, scroll & move maps</Text>
                <Text mb={10} mt={2}>Three different heatmaps to analyze how users behave.</Text>

                <Text fontSize='2xl'>Easy installation</Text>
                <Text mb={10} mt={2}>Set up heatmaps on every single page using just one script.</Text>
            </Box>
            <Spacer/>
            <Box width='31%' >
            <Text fontSize='2xl'>Compare over time</Text>
                <Text mb={10} mt={2}>Set the date range to compare user behavior from one month to the next.   </Text>

                <Text fontSize='2xl'>Unlimited users</Text>
                <Text mb={10} mt={2}>No limits on the number of Hotjar users. Share heatmaps with anyone on your team. </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default HeatmapsPart5