import { Box, Button, Flex, Heading, HStack, Image, Link, Stack } from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go";
import Profile from "../docs/GithubImage.png";
import resume from "../docs/Neerav_Khatri_Resume.pdf";

export default function HomePage () {
    return (
        <div>
            <Box id="home" w="80%" m="auto" mt="5%" color="#05386B" p="30px">
                <Flex direction={{sm: "column", lg: "row"}} gap="30px">
                    <Box w={{sm: "100%" , lg: "50%"}} display="flex" justifyContent="center" alignItems="center">
                        <Stack direction="column">
                            <Box textAlign="left">
                                <Heading fontSize="3em">Hello!</Heading>
                                <Heading fontSize="3em">I'am Neerav</Heading>
                                <Heading fontSize="3em">Full-Stack Developer</Heading>
                            </Box>
                            <Link href={resume} download textAlign="left">
                                <Button bgColor="#05386B" color="#5CDB95" fontSize="1.5em" w="60%" onClick={() => window.open("https://drive.google.com/file/d/1T6Q5ce2c2tx2dnG1HU_9dU8zif-by3f6/view")}>Resume</Button>
                            </Link>
                            <HStack gap="20px">
                                <Link href="https://github.com/Neerav-Khatri" isExternal><BsGithub size="2em"/></Link>
                                <Link href="https://www.linkedin.com/in/neerav-khatri-05084a233" isExternal><BsLinkedin size="2em"/></Link>
                                <Link href="mailto:khaneerav6337@gmail.com" isExternal><GoMail size="3em"/></Link>
                            </HStack>
                        </Stack>
                    </Box>
                    <Box w={{sm: "100%" , lg: "50%"}} display="flex" justifyContent="center" alignItems="center">
                        <Image src={Profile} alt="Neerav Profile Picture" w="80%" borderRadius="100px"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}