

import { Box, Button, Container, Heading, Text, VStack, ChakraProvider } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { deployment } from "../modules/micro_bit_python/deployment";

const Home = () => {
    const navigate = useNavigate();

    return (
        <ChakraProvider theme={deployment.chakraTheme}>
            <Box
                bgGradient="linear(to-br, gray.900, purple.900, blue.900)"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                overflow="hidden"
                position="relative"
            >
                <Box
                    position="absolute"
                    top="-20%"
                    left="-10%"
                    w="50%"
                    h="50%"
                    bg="purple.500"
                    filter="blur(150px)"
                    opacity="0.3"
                    borderRadius="full"
                />
                <Box
                    position="absolute"
                    bottom="-20%"
                    right="-10%"
                    w="50%"
                    h="50%"
                    bg="blue.500"
                    filter="blur(150px)"
                    opacity="0.3"
                    borderRadius="full"
                />

                <Container maxW="container.md" centerContent zIndex={1}>
                    <VStack spacing={8} textAlign="center">
                        <Heading
                            as="h1"
                            size="4xl"
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            lineHeight="1.2"
                        >
                            Python Editor v3
                        </Heading>
                        <Text fontSize="2xl" color="gray.200" maxW="lg">
                            Unlock the power of the BBC micro:bit with a premium, next-generation coding experience.
                        </Text>
                        <Button
                            size="lg"
                            height="4rem"
                            px="2rem"
                            fontSize="xl"
                            colorScheme="purple"
                            rightIcon={<ArrowForwardIcon boxSize={6} />}
                            onClick={() => navigate("/microbit")}
                            _hover={{
                                transform: "translateY(-4px)",
                                boxShadow: "0 20px 25px -5px rgba(121, 40, 202, 0.4), 0 8px 10px -6px rgba(121, 40, 202, 0.4)",
                            }}
                            transition="all 0.3s cubic-bezier(.25,.8,.25,1)"
                            rounded="full"
                        >
                            Launch Editor
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </ChakraProvider>
    );
};

export default Home;