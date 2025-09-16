import { Box, Image, Text, Center } from "@chakra-ui/react";
export default function Banner() {
    return (
        <Box
            w="100%"
            h={"auto"}
            position="relative"
            overflow="hidden"
        >
            <Center w="100%" h="100%">
                <Image
                    src={"../../assets/banner"}
                    alt="Banner"
                    maxH="100%"
                    objectFit="contain"
                />
            </Center>
        </Box>
    );
}
