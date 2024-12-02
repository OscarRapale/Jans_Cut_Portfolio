import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import ServiceGrid from "./ServiceGrid";
import logoCardSvg from "../assets/logo-card.svg";
import janCutsHeadingSvg from "../assets/jan-cuts-header.svg";

const LandingPage = () => {
  return (
    <Box bg="black" color="white" minH="100vh" p={8}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb="8rem">
        <Heading>
          <Image src={janCutsHeadingSvg} />
        </Heading>
        <Flex
          gap={6}
          fontFamily="'Helvetica', 'Arial', sans-serif"
          m="0 auto"
          mr="55rem"
        >
          <Text fontSize="xl" cursor="pointer">
            Contacto
          </Text>
          <Text fontSize="xl" cursor="pointer">
            Servicios
          </Text>
          <Text fontSize="xl" cursor="pointer">
            Portfolio
          </Text>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Left Content */}
        <Box ml="20rem">
          <Heading
            as="h2"
            size="2xl"
            fontFamily="'Helvetica', 'Arial', sans-serif"
            mb={4}
          >
            Slogan Placeholder
          </Heading>
          <Text mb={8} fontFamily="'Helvetica', 'Arial', sans-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            provident minima enim, <br />
            quod perferendis iste. Suscipit est magnam vel sequi asperiores
            quibusdam id accusamus? <br />
            Ea, quibusdam? Optio labore architecto laudantium!
          </Text>
          <ServiceGrid />
        </Box>
        <Box flex="1" textAlign="center">
          <Image src={logoCardSvg} alt="Jan Cuts Logo" />
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
