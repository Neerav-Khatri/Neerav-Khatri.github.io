import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Skills() {
    return (
        <div>
            <Box id="skills" w="80%" m="auto" mt="5%" p="30px">
                <VStack>
                    <Heading textDecoration="underline" color="#EDF5E1" mb="5%">Skills</Heading>
                    <Grid templateColumns={{sm: "repeat(2,1fr)", md: "repeat(3,1fr)" ,lg:"repeat(4,1fr)"}} gap="30px 20px" justifyContent="center" alignItems="center">
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.sanity.io/images/897el8p6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png" alt="HTML"/>
                            </Box>
                            <Text fontSize="xl">HTML</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.sanity.io/images/897el8p6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png" alt="CSS"/>
                            </Box>
                            <Text fontSize="xl">CSS</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.sanity.io/images/897el8p6/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png" alt="JavaScript"/>
                            </Box>
                            <Text fontSize="xl">JavaScript</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="ReactJs"/>
                            </Box>
                            <Text fontSize="xl" mt="18px">ReactJs</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="Chakra-Ui"/>
                            </Box>
                            <Text fontSize="xl">Chakra-Ui</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.sanity.io/images/897el8p6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png" alt="TypeScript"/>
                            </Box>
                            <Text fontSize="xl">TypeScript</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.sanity.io/images/897el8p6/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png" alt="Redux"/>
                            </Box>
                            <Text fontSize="xl">Redux</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png" alt="NextJs"/>
                            </Box>
                            <Text fontSize="xl">NextJs</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/03/cypress.png?fit=364%2C364&ssl=1" alt="Cypress"/>
                            </Box>
                            <Text fontSize="xl">Cypress</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="45%" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" alt="Jest"/>
                            </Box>
                            <Text fontSize="xl">Jest</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.sanity.io/images/897el8p6/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png" alt="Git"/>
                            </Box>
                            <Text fontSize="xl">Git</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg" alt="VsCode"/>
                            </Box>
                            <Text fontSize="xl">VsCode</Text>
                        </Box>
                        <Box textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image w="50%" src="https://img.icons8.com/color/512/npm.png" alt="NPM"/>
                            </Box>
                            <Text fontSize="xl">NPM</Text>
                        </Box>
                    </Grid>
                </VStack>
            </Box>
        </div>
    )
}