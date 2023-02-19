import { Box, Button, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import {BsGithub} from "react-icons/bs"
import {SiNetlify} from "react-icons/si";


export default function ProjectCard({data}) {
    return (
        <div>
            <Box border="1px solid #05386B" borderRadius="20px" p="20px" mt="20px">
                <Flex direction={{sm: "column", lg: "row"}}>
                    <Box w={{sm: "100%" , lg: "50%"}} display="flex" justifyContent="center" alignItems="center">
                        <Image w="90%" borderRadius="20px" src={data.src} alt="Optimizely" />
                    </Box>
                    <Box w={{sm: "100%" , lg: "50%"}}>
                        <VStack w="80%" m="auto">
                            <Heading fontWeight="bold" mb="30px" fontSize="5xl" >{data.name}</Heading>
                            <Text fontSize="lg">{data.desc}</Text>
                            <Box mb="20px">
                                <Text fontWeight="bold" fontSize="1.5em">Tech Stack:</Text>
                                <Text fontSize="lg">{data.stack}</Text>
                            </Box>
                        </VStack>
                        <Box m="auto" mt="20px">
                            <Link href={data.github} isExternal><Button bgColor="#05386B" color="#EDF5E1" gap="10px" mr="20px">Github<BsGithub /></Button></Link>
                            <Link href={data.deploy} isExternal><Button bgColor="#05386B" color="#EDF5E1" gap="10px">Deployed<SiNetlify /></Button></Link>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
} 