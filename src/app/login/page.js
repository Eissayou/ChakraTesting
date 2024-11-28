import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react"
import  AuthForm  from "@/components/ui/AuthForm";

export default function login() {
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
      <AuthForm />
    </Box>
  );
  
}

