"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function pages() {
  return (
    <Box
    flex="1" // Fills the remaining height allocated by the layout
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    p={6} // Add padding for spacing
    >
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Another Page!
      </Heading>
      <Text fontSize="lg">You navigated here successfully using the App Router.</Text>
    </Box>
  );
}
