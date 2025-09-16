import {
    Avatar,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react";

import './Caracteristicas.css'

function Caracteristicas() {
    return (
        <div className="Carac">
            <div className="Caracteristicas">
                <h2 className="tituloCarac">Más que un producto artesanal</h2>

            </div>
            <div className="tarjetas">
                <Card maxW="320px">

                    <CardHeader>
                        <HStack mb="4" gap="3">
                            <Avatar
                                name="Nate Foss"
                                src="../../src/assets/exclusivo.png"
                            />
                            <Stack spacing="0">
                                <Text fontWeight="semibold" fontSize="sm">
                                    Producción artesanal exclusiva
                                </Text>

                            </Stack>
                        </HStack>
                    </CardHeader>

                    <CardBody>
                        <Text>

                            Cada pieza es única, creada con dedicación y cuidado en cada detalle.
                        </Text>
                    </CardBody>


                </Card>
                <Card maxW="320px">

                    <CardHeader>
                        <HStack mb="4" gap="3">
                            <Avatar
                                name="Nate Foss"
                                src="../../src/assets/aprobado.png"
                            />
                            <Stack spacing="0">
                                <Text fontWeight="semibold" fontSize="sm">
                                    Materiales seleccionados
                                </Text>

                            </Stack>
                        </HStack>
                    </CardHeader>

                    <CardBody>
                        <Text>

                            Usamos materiales nobles y naturales, escogidos con atención.
                        </Text>
                    </CardBody>


                </Card>
                <Card maxW="320px">

                    <CardHeader>
                        <HStack mb="4" gap="3">
                            <Avatar
                                name="Nate Foss"
                                src="../../src/assets/proposito.png"

                            />
                            <Stack spacing="0">
                                <Text fontWeight="semibold" fontSize="sm">
                                    Propósito y significado.
                                </Text>

                            </Stack>
                        </HStack>
                    </CardHeader>

                    <CardBody>
                        <Text>

                            Cada creación transmite amor, intención y un mensaje especial.
                        </Text>
                    </CardBody>


                </Card>

            </div>
        </div>


    );
}

export default Caracteristicas;
