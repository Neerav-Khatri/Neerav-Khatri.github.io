import { Box, Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import resume from "../docs/fw20_0088-Neerav-Khatri-Resume.pdf";
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go";
import Download from "./Download";

export default function About() {
    return (
        <div>
            <Box id="about" className="about section" w={{ base:"100%", sm: "90%",  lg: "80%"}} m="auto" mt="5%" p="20px">
                <VStack>
                    <Heading textDecoration="underline" color="#86C232" mb="5%">About</Heading>
                    <Text id="user-detail-name" fontWeight="bold" fontSize={{ base: "1.5em",sm: "1.5em", md:"2em"}}>Hello! I'm Neerav Khatri</Text>
                    <Text id="user-detail-intro" fontSize={{base: "1em",sm: "1.2em", md:"1.5em"}} textAlign="justify">A passionate and self-motivated Full-Stack MERN Developer with 1200+ hours of coding experience, practice 300+ hours of Data structure and algorithms. I have a passion for creating clean, well-documented, and efficient code that meets the needs of clients and end-users alike. As a Full-Stack Developer, I'm well-versed in the latest front-end technologies such as React, Redux, and Chakra UI, and have worked with Node.js, Express.js, MongoDB, and other back-end tools.</Text><br />
                    <Text fontSize={{base: "1em",sm: "1.2em", md:"1.5em"}} textAlign="justify">If you're looking for a Full-Stack MERN Developer who is passionate about building high-quality applications, feel free to reach out to me. I'm always interested in new opportunities and collaborations.</Text>
                    <Box pt="20px">
                    <a href={resume} download onClick={Download} id="resume-link-2">
                        <Button id="resume-button-2" color="whiteAlpha.900" bgColor="#86C232" fontSize={"1.5em"} _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>Resume</Button>
                    </a>
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