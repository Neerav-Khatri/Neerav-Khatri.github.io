import { Box, Flex, Image, Text } from "@chakra-ui/react";


export default function SkillCard ({src, name}) {
    return (
        <div>
            <Box class="skills-card" textAlign="center" border="1px solid #05386B" borderRadius="20px" _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
                <Flex flexDirection={"column"}>
                    <Box class="skills-card-img" display="flex" justifyContent="center" alignItems="center" h={{base: "15vh", sm: "25vh", md: "25vh", lg: "25vh"}}>
                        <Image w="50%" src={src} alt={name} />
                    </Box>
                    <Text class="skills-card-name" fontSize={{base: "md", sm: "lg", md: "lg", lg: "2xl"}}>{name}</Text>
                </Flex>
            </Box>
        </div>
    )
}