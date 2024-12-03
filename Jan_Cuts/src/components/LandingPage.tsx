import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import ServiceGrid from "./ServiceGrid";
import logoCardSvg from "../assets/logo-card.svg";
import janCutsHeadingSvg from "../assets/jan-cuts-header.svg";
import GalleryGrid from "./GalleryGrid";

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
            Jan Luis Rapale Méndez
          </Heading>
          <Text
            mb={8}
            fontSize="lg"
            fontFamily="'Helvetica', 'Arial', sans-serif"
          >
            Dirección: 34-62 Calle Central, Coto Laurel, PR 00780 <br />
            Horarios: Martes-Sábado de 8am-6pm <br />
          </Text>
          <ServiceGrid />
        </Box>
        <Box flex="1" textAlign="center">
          <Image src={logoCardSvg} alt="Jan Cuts Logo" />
        </Box>
      </Flex>
      <Heading
        textAlign="center"
        mt="10rem"
        mb="5rem"
        fontFamily="'Helvetica', 'Arial', sans-serif"
      >
        Portfolio
      </Heading>
      <GalleryGrid />
    </Box>
  );
};

export default LandingPage;
