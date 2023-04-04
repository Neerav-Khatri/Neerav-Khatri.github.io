import style from "../Style/Navbar.module.css";
import React from 'react';
import { Box, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { Link as Rlink } from "react-scroll";
import resume from "../docs/fw20_0088-Neerav-Khatri-Resume.pdf";
import SideDrawer from "./Drawer";
import Download from "./Download";

const Navbar = () => {
  return (
    <div>
        <Box id="nav-menu" className={style.navbar}>
            <Flex justifyContent="space-between" alignContent="center">
                <Box ml="20px" display={"flex"} alignItems={"center"}>
                    <Heading fontSize={{base: "xl", sm: "2xl", md: "3xl", lg: "4xl"}} fontFamily={"cursive"}>Neerav Khatri</Heading>
                </Box>
                <Box id={style.normal}>
                    <HStack gap="30px" fontSize="20px">
                        <Rlink activeClass="active" to={"home"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link home" style={{cursor: "pointer"}}>Home</div></Rlink>
                        <Rlink activeClass="active" to={"about"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link about" style={{cursor: "pointer"}}>About Me</div></Rlink>
                        <Rlink activeClass="active" to={"skills"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link skills" style={{cursor: "pointer"}}>Skills</div></Rlink>
                        <Rlink activeClass="active" to={"projects"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link projects" style={{cursor: "pointer"}}>Project</div></Rlink>
                        <Rlink activeClass="active" to={"github"} spy={true} smooth={true} duration={2000} offset={-100} style={{cursor: "pointer"}}>Git Stats</Rlink>
                        <Rlink activeClass="active" to={"contact"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link contact" style={{cursor: "pointer"}}>Contact</div></Rlink>
                        <Button id="resume-button-1" color="whiteAlpha.900" bgColor="#86C232" _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>
                            <a href={resume} download="Neerav_Khatri_Resume.pdf" onClick={Download} className="nav-link resume" id="resume-link-1">
                                Resume
                            </a>
                        </Button>
                    </HStack>
                </Box>
                <Box id={style.hamburger}>
                    <SideDrawer />
                </Box>
            </Flex>
        </Box>
        <Box h="80px"></Box>
    </div>
  )
}

export default Navbar