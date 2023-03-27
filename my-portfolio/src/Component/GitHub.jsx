import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';

export default function Github() {
    return (
        <div>
            <Box id="github" w="100%" m="auto" mt="5%" p="20px">
                <Box>
                    <Heading textDecoration="underline" color="#86C232" mb="5%">Github Statistics</Heading>
                    <Flex justifyContent={"space-around"} align={"center"} direction={{base: "column", sm: "column", lg:"row", xl: "row"}} gap="10px">
                        <Image id="github-streak-stats" w={{base:'100%',md:"60%",lg:'33%'}} src="https://github-readme-streak-stats.herokuapp.com?user=Neerav-Khatri&theme=vue" alt="Streak" />
                        <Image id="github-stats-card" w={{base:'100%',md:"60%",lg:'33%'}} src="https://github-readme-stats.vercel.app/api?username=Neerav-Khatri&count_private=true&show_icons=true&theme=vue" alt="Stats Card" />
                        <Image id="github-top-langs" w={{base:'100%',md:"60%",lg:'28%'}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Neerav-Khatri&layout=compact&theme=vue" alt="Language Card" />
                    </Flex>
                </Box>
                <Box>
                    <Heading textDecoration="underline" color="#86C232" mb="5%" mt="5%">Github Calendar</Heading>
                    <Box border={"2px solid white"} w={{base: "100%", md: "100%",lg:"65%"}} display={"flex"} justifyContent={"center"} py={"20px"} borderRadius={"20px"} m={"auto"}>
                        <GitHubCalendar username="Neerav-Khatri" color="#86C232" style={{width: "95%"}} />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}