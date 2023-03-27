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
                        <Rlink activeClass="active" to={"home"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link home">Home</div></Rlink>
                        <Rlink activeClass="active" to={"about"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link about">About Me</div></Rlink>
                        <Rlink activeClass="active" to={"skills"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link skills">Skills</div></Rlink>
                        <Rlink activeClass="active" to={"projects"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link projects">Project</div></Rlink>
                        <Rlink activeClass="active" to={"github"} spy={true} smooth={true} duration={2000} offset={-100} >Git Stats</Rlink>
                        <Rlink activeClass="active" to={"contact"} spy={true} smooth={true} duration={2000} offset={-100}><div className="nav-link contact">Contact</div></Rlink>
                        <a href={resume} download onClick={Download} className="nav-link resume">
                            <Button id="resume-button-1" color="whiteAlpha.900" bgColor="#86C232" _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>Resume</Button>
                        </a>
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