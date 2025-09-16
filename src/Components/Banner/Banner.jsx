import { Box, Image, Text, Center } from "@chakra-ui/react";
import imgBan from "/images/Banner2.png"
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
                    src={imgBan}
                    alt="Banner"
                    maxH="100%"
                    objectFit="contain"
                />
            </Center>
        </Box>
    );
}
