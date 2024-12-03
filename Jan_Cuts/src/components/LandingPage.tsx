import { Box, Flex, Heading, Text, Image, Link, Divider } from "@chakra-ui/react";
import { Link as ScrollLink, Element } from "react-scroll";
import ServiceGrid from "./ServiceGrid";
import GalleryGrid from "./GalleryGrid";
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
        <Flex gap={6} fontFamily="'Helvetica', 'Arial', sans-serif" mr={{ base: "0", md: "87rem" }}>
          <ScrollLink to="services" smooth={true} duration={500}>
            <Text fontSize="xl" cursor="pointer" _hover={{ color: "#ac1625", textDecoration: "underline" }}>
              Servicios
            </Text>
          </ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={500}>
            <Text fontSize="xl" cursor="pointer" _hover={{ color: "#ac1625", textDecoration: "underline" }}>
              Portfolio
            </Text>
          </ScrollLink>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Left Content */}
        <Box ml={{ base: "0", md: "10rem", lg: "20rem" }} mb={{ base: "4rem", md: "0" }}>
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
            Dirección:{" "}
            <Link
              href="https://maps.app.goo.gl/Ma1qVDjhaf4SUDoq7"
              isExternal
              _hover={{ color: "#ac1625", textDecoration: "underline" }}
            >
              34-62 Calle Central, Coto Laurel, PR 00780 <br />
            </Link>
            Horarios: Martes a Sábado de 8am-6pm <br />
          </Text>

          {/* Services Section */}
          <Element name="services">
            <ServiceGrid />
          </Element>
        </Box>

        {/* Right Side Logo */}
        <Box flex="1" textAlign="center">
          <Image src={logoCardSvg} alt="Jan Cuts Logo" />
        </Box>
      </Flex>

      {/* Portfolio Gallery Section */}
      <Divider mt="7rem" border="1px" borderColor="white" />
      <Element name="portfolio">
        <Heading
          textAlign="center"
          mt="5rem"
          mb="5rem"
          textDecoration="underline"
          fontFamily="'Helvetica', 'Arial', sans-serif"
        >
          Portfolio
        </Heading>
        <GalleryGrid />
      </Element>

      {/* Footer Section */}
      <Box
        as="footer"
        mt="10rem"
        py={8}
        textAlign="center"
        borderTop="1px solid white"
      >
        <Text fontSize="lg" mb={4}>
          Website created by Oscar Rapale Méndez
        </Text>
        <Flex justify="center" gap={4}>
          <Link
            href="https://github.com/OscarRapale"
            _hover={{ color: "#ac1625", textDecoration: "underline" }}
            isExternal
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/oscar-rapale"
            _hover={{ color: "#ac1625", textDecoration: "underline" }}
            isExternal
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:oscarrapale17@gmail.com"
            _hover={{ color: "#ac1625", textDecoration: "underline" }}
          >
            Email
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default LandingPage;