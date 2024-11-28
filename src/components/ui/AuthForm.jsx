'use client';

import { useState } from "react";
import { Box, Input, Button, Heading, VStack } from "@chakra-ui/react";

export default function SimpleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        console.log("Success:", data);
        // Perform any post-login actions (e.g., redirect)
      } else {
        setMessage("Login failed: " + data.message);
        console.error("Error:", data);
      }
    } catch (error) {
      setMessage("Network error, please try again later.");
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
<Box
  as="form"
  onSubmit={handleSubmit}
  width="500px" // Set a fixed width or increase maxW
  mx="auto" // Center horizontally
  my="auto" // Center vertically when using Flex parent
  p="8" // Increase padding for a larger form
  borderWidth="2px" // Optional: make the border more prominent
  borderRadius="lg" // Use a larger border-radius
  boxShadow="2xl" // Use a larger shadow
  bg="white"
  display="flex"
  flexDirection="column" // Keep the content aligned vertically
>

      <Heading as="h2" size="lg" mb="6" textAlign="center">
        Login
      </Heading>
      <VStack spacing="4">
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          colorScheme="teal"
          width="full"
          type="submit"
          isLoading={loading}
        >
          Login
        </Button>
        {message && <Box mt="4" color="red.500">{message}</Box>}
      </VStack>
    </Box>
  );
}
