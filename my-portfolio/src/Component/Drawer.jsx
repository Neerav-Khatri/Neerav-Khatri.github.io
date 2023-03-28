import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link as Rlink } from "react-scroll";
import resume from "../docs/fw20_0088-Neerav-Khatri-Resume.pdf";
import Download from "./Download";

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const link = [
    { id: "home", title: "Home", class: "nav-link home" },
    { id: "about", title: "About Me", class: "nav-link about" },
    { id: "skills", title: "Skills", class: "nav-link skills" },
    { id: "projects", title: "Project", class: "nav-link projects" },
    { id: "github", title: "Git Stats", class: "Git-Stats" },
    { id: "contact", title: "Contact", class: "nav-link contact" },
  ];
  
  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <HamburgerIcon boxSize="2em" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex direction={"column"}>
              {link.map((e) => (
                
                  <Rlink
                    key={e.id}
                    activeClass="active"
                    to={e.id}
                    spy={true}
                    smooth={true}
                    duration={2000}
                    offset={-100}
                  >
                    <div class={e.class}>
                    <Button mt={5} w='100%' onClick={onClose} bg="#222629" color='#86C232'>
                    {e.title}
                    </Button>
                    </div>
                  </Rlink>
                
              ))}
              <a
                href={resume}
                download="Neerav_Khatri_Resume.pdf"
                onClick={Download}
              >
                <Button className="nav-link resume" id="resume-link-1" mt={5} w='100%' onClick={onClose} bg='#86C232' color='whiteAlpha.900'>
                  Resume
                </Button>
              </a>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;