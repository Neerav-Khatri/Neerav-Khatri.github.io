import style from "../Style/Navbar.module.css";
import React from 'react';
import { Box, Button, Flex, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import resume from "../docs/Neerav_Khatri_Resume.pdf";


const Navbar = () => {
  return (
    <div>
        <Box id="nav-menu" className={style.navbar}>
            <Flex justifyContent="space-between" alignContent="center">
                <Box ml="20px">
                    <Heading>Neerav Khatri</Heading>
                </Box>
                <Box id={style.normal}>
                    <HStack gap="30px" fontSize="20px">
                        <Link href="#home" class="nav-link home">Home</Link>
                        <Link href="#about" class="nav-link about">About Me</Link>
                        <Link href="#skills" class="nav-link skills">Skills</Link>
                        <Link href="#projects" class="nav-link projects">Project</Link>
                        <Link href="#contact" class="nav-link contact">Contact</Link>
                        <Link href={resume} download class="nav-link resume">
                            <Button color="#05386B" bgColor="#5CDB95" onClick={() => window.open("https://drive.google.com/file/d/1T6Q5ce2c2tx2dnG1HU_9dU8zif-by3f6/view")}>Resume</Button>
                        </Link>
                    </HStack>
                </Box>
                <Box id={style.hamburger}>
                    <Menu>
                        <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon color="#05386B" />} />
                            <MenuList bgColor="#05386B" textAlign="center" closeOnSelect>
                                <MenuItem bgColor="#05386B"><Link href="#home" class="nav-link home">Home</Link></MenuItem>
                                <MenuItem bgColor="#05386B"><Link href="#about" class="nav-link about">About Me</Link></MenuItem>
                                <MenuItem bgColor="#05386B"><Link href="#skills" class="nav-link skills">Skills</Link></MenuItem>
                                <MenuItem bgColor="#05386B"><Link href="#projects" class="nav-link projects">Project</Link></MenuItem>
                                <MenuItem bgColor="#05386B"><Link href="#contact" class="nav-link contact">Contact</Link></MenuItem>
                                <MenuItem bgColor="#05386B"><Link href={resume} download class="nav-link resume"><Button color="#05386B" onClick={() => window.open("https://drive.google.com/file/d/1T6Q5ce2c2tx2dnG1HU_9dU8zif-by3f6/view")}>Resume</Button></Link></MenuItem>
                            </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
        <Box h="80px"></Box>
    </div>
  )
}

export default Navbar