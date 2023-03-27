import { Box, Button, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import {BsGithub} from "react-icons/bs"
import {SiNetlify} from "react-icons/si";


export default function ProjectCard({data}) {
    return (
        <div>
            <Box border="1px solid #86C232" borderRadius="20px" p="20px" mt="20px">
                <div className="project-card"> 
                    <Flex direction={{base: "column", sm: "column", lg: "row"}} gap="20px">
                        <Box w={{sm: "100%" , lg: "50%"}} display="flex" justifyContent="center" alignItems="center">
                            <Image w="100%" borderRadius="20px" src={data.src} alt="Web Application Image" />
                        </Box>
                        <Box w={{sm: "100%" , lg: "50%"}}>
                            <VStack w="100%" m="auto">
                                <Heading className="project-title" fontWeight="bold" mb="30px" fontSize={{ base: "1.5em",sm: "1.5em", md:"2em"}} >{data.name}</Heading>
                                <Text className="project-description" fontSize={{base: "1em",sm: "1.2em", md:"1.3em"}} >{data.desc}</Text>
                                <Box mb="20px">
                                    <Text fontWeight="bold" fontSize={{base: "1.2em",sm: "1.3em", md: "1.3em"}}>Tech Stack:</Text>
                                    <Text className="project-tech-stack" fontSize={{base: "1em",sm: "1.1em", md: "1.3em"}}>{data.stack}</Text>
                                </Box>
                            </VStack>
                            <Box m="auto" mt="20px" display={"flex"} justifyContent={"center"} flexDirection={{base: "column", sm: "row"}} gap={"10px"}>
                                <Link href={data.github} isExternal><Button className="project-github-link" bgColor="#86C232" color="whiteAlpha.900" gap="10px" mr="20px" _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>Github<BsGithub /></Button></Link>
                                <Link href={data.deploy} isExternal><Button className="project-deployed-link" bgColor="#86C232" color="whiteAlpha.900" gap="10px" _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>Deployed<SiNetlify /></Button></Link>
                            </Box>
                        </Box>
                    </Flex>
                </div>
            </Box>
        </div>
    )
} 