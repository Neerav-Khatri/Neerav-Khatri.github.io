import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function SkillsCard ({ src, name }) {
    return (
        <div>
            <Box className="skills-card" textAlign={"center"} border={"1px solid #86C232"} borderRadius={"20px"} _hover={{boxShadow: "rgba(134,194,50,255) 0px 3px 10px"}}>
                <Flex flexDirection={"column"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h={{base: "15vh", sm: "25vh", md: "25vh", lg: "25vh"}}>
                        <Image className="skills-card-img" w={"50%"} src={src} alt={name} />
                    </Box>
                    <Text className="skills-card-name" fontSize={{base: "1em", sm: "1.5em", md: "1.5em", lg: "1.5em"}}>{name}</Text>
                </Flex>
            </Box>
        </div>
    )
}