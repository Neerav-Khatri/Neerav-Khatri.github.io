import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go";
import {MdAddIcCall} from "react-icons/md";


export default function Contact() {
    return (
        <div>
            <Box id="contact" bgColor="#05386B" color="#EDF5E1" mt="5%" p="30px">
                <Heading textDecoration="underline" color="#5CDB95" mb="5%" mt="2%">Contact</Heading>
                <Heading>Neerav Khatri</Heading>
                <Flex direction={{sm: "column", lg:"column", xl: "row"}} gap="10px" mt="30px" mb="3%" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="10px">
                        <Link href="tel:+919930361634"><MdAddIcCall size="3em"/></Link>
                        <Link href="tel:+919930361634"><Text fontSize="lg">+91 9930361634</Text></Link>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="10px">
                        <Link href="https://github.com/Neerav-Khatri" isExternal><BsGithub size="3em"/></Link>
                        <Link href="https://github.com/Neerav-Khatri" isExternal><Text fontSize="lg">Neerav-Khatri</Text></Link>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="10px">
                        <Link href="https://www.linkedin.com/in/neerav-khatri-05084a233" isExternal><BsLinkedin size="3em"/></Link>
                        <Link href="https://www.linkedin.com/in/neerav-khatri-05084a233" isExternal><Text fontSize="lg">Neerav-Khatri</Text></Link>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="10px">
                        <Link href="mailto:khaneerav6337@gmail.com" isExternal><GoMail size="3em"/></Link>
                        <Link href="mailto:khaneerav6337@gmail.com" isExternal><Text fontSize="lg">khaneerav6337@gmail.com</Text></Link>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}