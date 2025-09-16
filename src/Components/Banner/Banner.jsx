import { Box, Image, Text, Center } from "@chakra-ui/react";
import bannerImg from "../../assets/Banner2.png";
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
                    src={bannerImg}
                    alt="Banner"
                    maxH="100%"
                    objectFit="contain"
                />
            </Center>
        </Box>
    );
}
