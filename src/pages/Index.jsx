import { Box, Container, Heading } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Box>
      <Box as="nav" bg="blue.500" color="white" p={4}>
        <Heading as="h1" size="lg">Bike Pump Stations in Stockholm</Heading>
      </Box>
      <Container maxW="container.xl" p={0}>
        <Map />
      </Container>
    </Box>
  );
};

export default Index;