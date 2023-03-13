import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function Github() {
    return (
        <div>
            <Box w="80%" m="auto" mt="5%" p="30px">
                <Box>
                    <Heading textDecoration="underline" color="#EDF5E1" mb="5%">Github Statistics</Heading>
                    <Flex justifyContent="space-around" direction={{base: "column", sm: "column", lg:"column", xl: "row"}} gap="10px">
                        <Image src="https://camo.githubusercontent.com/476b7a2f67b83729e5b32d5aa788c8e53cab4a87c1ff11a234744056c8430c16/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4e65657261762d4b6861747269267468656d653d76756526686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565" alt="Stats" />
                        <Image src="https://camo.githubusercontent.com/f8c3db3f96cc4c6c43fd71ff760705a4108eeb851f2952c29f098e4e7bd7a8c2/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d4e65657261762d4b6861747269267468656d653d76756526686964655f626f726465723d66616c7365" alt="Strek" />
                    </Flex>
                </Box>
                <Box>
                    <Heading textDecoration="underline" color="#EDF5E1" mb="5%" mt="5%">Github Calendar</Heading>
                    <Box>
                        <Image w="90%" m="auto" bgColor="white" borderRadius="10px" src="https://ghchart.rshah.org/Neerav-Khatri" alt="Git Calender" />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}