import { Box, Button, Flex, Heading, HStack, Image, Link, Stack } from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go";
import Profile from "../docs/Profile_Image.png";
import resume from "../docs/fw20_0088-Neerav-Khatri-Resume.pdf";
import Download from "./Download";

export default function HomePage () {
    return (
        <div>
            <Box id="home" w={{base: "100%", lg: "80%"}} m="auto" mt="5%" color="whiteAlpha.900" p="30px">
                <Flex direction={{base: "column", sm: "column", lg: "row"}} gap="30px">
                    <Box w={{base: "100%", sm: "100%" , lg: "50%"}} display="flex" justifyContent="center" alignItems="center">
                        <Stack direction="column" textAlign={"left"}>
                            <Box textAlign="left">
                                <Heading fontSize={{base: "1.5em",sm: "2em", md:"3em"}}>Hello!</Heading>
                                <Heading fontSize={{base: "1.5em",sm: "2em", md:"3em"}}>I am Neerav</Heading>
                                <Heading fontSize={{base: "1.5em",sm: "2em", md:"3em"}}>Full-Stack Developer</Heading>
                            </Box>
                            <a href={resume} download="Neerav_Khatri_Resume.pdf" onClick={Download}>
                                <Button color="whiteAlpha.900" bgColor="#86C232" fontSize="1.5em" w="60%" _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>Resume</Button>
                            </a>
                            <HStack gap="20px">
                                <Link href="https://github.com/Neerav-Khatri" isExternal><BsGithub size="2em"/></Link>
                                <Link href="https://www.linkedin.com/in/neerav-khatri-05084a233" isExternal><BsLinkedin size="2em"/></Link>
                                <Link href="mailto:khaneerav6337@gmail.com" isExternal><GoMail size="3em"/></Link>
                            </HStack>
                        </Stack>
                    </Box>
                    <Box w={{base: "100%", sm: "100%" , lg: "50%"}} display="flex" justifyContent="center" alignItems="center">
                        <Image className="home-img" src={Profile} alt="Neerav Profile Picture" w={{base: "100%", sm: "60%", md: "70%", lg: "80%"}} borderRadius="100px"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}