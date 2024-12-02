import { Box, Grid, Text } from "@chakra-ui/react";

const services = [
  { name: "Service 1", duration: "30 min", price: "$20" },
  { name: "Service 2", duration: "30 min", price: "$20" },
  { name: "Service 3", duration: "30 min", price: "$20" },
  { name: "Service 4", duration: "30 min", price: "$20" },
  { name: "Service 5", duration: "30 min", price: "$20" },
];

const ServiceGrid = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
      {services.map((service) => (
        <Box
          key={service.name}
          p={4}
          bg="black"
          color="white"
          textAlign="center"
          borderRadius="md"
          border="1px solid white"
        >
          <Text fontWeight="bold">{service.name}</Text>
          <Text>{service.duration}</Text>
          <Text>{service.price}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default ServiceGrid;
