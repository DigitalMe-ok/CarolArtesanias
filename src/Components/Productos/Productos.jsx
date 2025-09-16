import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Text,
    Button,
    Heading,
} from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import './Productos.css'
function MisProductos() {
    const Products = [
        { name: " Muñeca Country", image: "../../src/assets/Foto1.png", precio: "5.000", descripcion: " De 48 cm, con vestidito y bombachon, confeccionada con tela de lienzo de algodón rústico,rellena con Bellón siliconado,su cabello de lana de color y con una " },
        { name: "Bhúo ", image: "../../src/assets/Foto2.png", precio: "5.000", descripcion: "Realizado con tela de lienzo de algodón rústico, relleno con Bellón siliconado,con ojitos móviles y textura blanda" },
        { name: "Prueba ", image: "../../src/assets/Foto3.png", precio: "5.000", descripcion: "sdnoasindsadas" },
        { name: "Muñeca ", image: "../../src/assets/Foto4.png", precio: "5.000", descripcion: "Muñecas y mucha variedad de adornos para decorar el cuarto de tus hijos dándoles un toque de ternura!" },
        { name: "Posa Platos ", image: "../../src/assets/Foto5.png", precio: "5.000", descripcion: "Posa Platos tejidos a mano con hilo de algodón rústico" },
        { name: "Posa Cubiertos ", image: "../../src/assets/Foto6.png", precio: "5.000", descripcion: " Posa cubiertos tejidos a mano con hilo de algodón rústico" },
        { name: "Posa Vasos ", image: "../../src/assets/Foto7.png", precio: "5.000", descripcion: "Posa Vasos tejidos a mano con hilo de algodón rústico" },
        { name: "Colgante ", image: "../../src/assets/Foto8.png", precio: "5.000", descripcion: "sdnoasindsadas" },
        { name: "Bhúo ", image: "../../src/assets/Foto9.png", precio: "5.000", descripcion: "Realizado con tela de lienzo de algodón rústico, relleno con Bellón siliconado,con ojitos móviles y textura blanda" },


    ]
    return (
        <Container className="productos">
            <h2 className="tituloSeccion">Nuestra Colección</h2>
            <div className="cardsPrd">
                {Products.map((prod, index) => {
                    return (
                        <Card key={index} maxW="sm" overflow="hidden" boxShadow="md" borderRadius="lg" >
                            <Image src={prod.image} alt={prod.name} />
                            <CardHeader>
                                <Heading size="md">{prod.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{prod.descripcion}</Text>
                                <Text fontSize="2xl" fontWeight="medium" mt="2">
                                    ${prod.precio}
                                </Text>
                            </CardBody>
                            <CardFooter gap="2">
                                <Button colorScheme="teal">Comprar</Button>
                                <Button variant="ghost">Agregar al carrito</Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>

        </Container>

    )
}

export default MisProductos
