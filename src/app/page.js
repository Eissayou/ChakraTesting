"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Slider } from '@/components/ui/slider';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/results'); // Navigate to another page
  };

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
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Chakra UI with Custom Color Mode
      </Heading>
      <Text fontSize="lg" mb={6}>
        This page uses a custom `ColorModeProvider`.
      </Text>
      <Box
        bg="tomato"
        w="100%"
        maxWidth="400px" // Limit the width for better visuals
        p={4}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={6}
      >
        <Slider label="Caulk Size" width="200px" defaultValue={[40]} />
      </Box>
      <Button mt={6} colorScheme="teal" size="lg" onClick={handleNavigation}>
        Go to Another Page
      </Button>
    </Box>
  );
}
