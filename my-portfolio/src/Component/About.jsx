import { Box, Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import resume from "../docs/Neerav_Khatri_Resume.pdf";
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go";

export default function About() {
    return (
        <div>
            <Box id="about" class="about section" w="80%" m="auto" mt="5%" p="30px">
                <VStack>
                    <Heading textDecoration="underline" color="#EDF5E1" mb="5%">About Me</Heading>
                    <Text id="user-detail-name" fontWeight="bold" fontSize={{ base: "xl", md: "3xl"}}>Hello! I'm Neerav Khatri</Text>
                    <Text id="user-detail-intro" fontSize={{base: "md", md:"2xl"}} w="80%">A full stack developer, with 1200+ hours of coding experience, practice 300+ hours of Data structure and algorithms. High adaptability to learn and collaborate in a rapidly changing environment. Looking forward to working as a web developer with a reputed firm driven by technology. </Text>
                    <Box pt="20px">
                        <Link href={resume} download textAlign="left">
                            <Button bgColor="#05386B" color="#5CDB95" fontSize="1.5em" onClick={() => window.open("https://drive.google.com/file/d/1T6Q5ce2c2tx2dnG1HU_9dU8zif-by3f6/view")}>Resume</Button>
                        </Link>
                        <HStack gap="20px" mt="10px">
                            <Link href="https://github.com/Neerav-Khatri" isExternal><BsGithub size="2em"/></Link>
                            <Link href="https://www.linkedin.com/in/neerav-khatri-05084a233" isExternal><BsLinkedin size="2em"/></Link>
                            <Link href="mailto:khaneerav6337@gmail.com" isExternal><GoMail size="3em"/></Link>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </div>
    )
}