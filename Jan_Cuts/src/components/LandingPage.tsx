import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const LandingPage = () => {
  return (
    <Box bg="black" color="white" minH="100vh" p={8}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={10}>
        <Heading as="h1" size="lg" color="red.500">
          JanCuts
        </Heading>
        <Flex gap={6}>
          <Text cursor="pointer">Home</Text>
          <Text cursor="pointer">Shop</Text>
          <Text cursor="pointer">Product</Text>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      ></Flex>
    </Box>
  )
}

export default LandingPage