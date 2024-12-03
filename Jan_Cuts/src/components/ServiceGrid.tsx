import { Box, Grid, Text } from "@chakra-ui/react";

// services array
const services = [
  { name: "Corte", duration: "35-40 minutos", price: "$20" },
  { name: "Corte con barba", duration: "45 minutos", price: "$25" },
  { name: "Corte con afeitado de cara", duration: "45 minutos", price: "$25" },
  { name: "Corte con diseño", duration: "40-45 minutos", price: "$25" },
  { name: "Cerquillo", duration: "30-35 minutos", price: "$15" },
  { name: "Arreglo de barba", duration: "10-15 minutos", price: "$12" },
  { name: "Afeitado y arreglo de barba", duration: "25 minutos", price: "$15" },
  {
    name: "Corte con lavado y secado de cabello",
    duration: "45 minutos",
    price: "$30",
  },
  { name: "Platinado con corte", duration: "4 horas aprox.", price: "$120" },
];

const ServiceGrid = () => {
  return (
    <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)",  md: "repeat(3, 1fr)" }} gap={4}>
      {services.map((service) => (
        <Box
          key={service.name}
          ml={{ base: "2rem", md: "0px" }}
          p={4}
          bg="black"
          color="white"
          textAlign="center"
          borderRadius="md"
          border="2px solid white"
          width="250px"
          height="160px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontFamily="'Helvetica', 'Arial', sans-serif"
        >
          <Text  fontWeight="bold" whiteSpace="pre-wrap" overflow="hidden">
            {service.name}
          </Text>
          <Text>{service.duration}</Text>
          <Text>{service.price}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default ServiceGrid;
