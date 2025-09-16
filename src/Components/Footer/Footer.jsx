import { Box, Image, Text, VStack } from "@chakra-ui/react";

function Footer() {
    return (
        <Box bg="   #9e9d9d" py={6} mt={10}>
            <VStack spacing={3}>

                <Image
                    src="../../src/assets/FLYER 2.Png" 
                    alt="Logo"
                    boxSize="13rem"
                    objectFit="contain"
                />

                <Text fontSize="sm" color="black">
                    © {new Date().getFullYear()} Carol Artesanias. Todos los derechos reservados.
                </Text>
            </VStack>
        </Box>
    );
}

export default Footer;
