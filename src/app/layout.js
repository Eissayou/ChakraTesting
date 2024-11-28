import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh" // Full viewport height
          >
            {/* Persistent Header */}
            <Box as="header" bg="teal.500" color="white" p={4} textAlign="center">
              <Heading size="lg">Voting with ResDB</Heading>
            </Box>

            {/* Persistent Navbar */}
            <Flex as="nav" bg="gray.200" p={4} justifyContent="center" gap={4}>
              <Link
                href="/"
                _hover={{ textDecoration: "none" }}
                color="teal.500"
              >
                Voting
              </Link>
              <Link
                href="/results"
                _hover={{ textDecoration: "none" }}
                color="teal.500"
              >
                Results
              </Link>
              <Link
                href="/login"
                _hover={{ textDecoration: "none" }}
                color="teal.500"
                ml = 'auto'
              >
                Sign in / Sign up
              </Link>
            </Flex>

            {/* Page Content */}
            <Box as="main" flex="1" p={6}>
              {children}
            </Box>

            {/* Persistent Footer */}
            <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
              &copy; {new Date().getFullYear()} My App. All Rights Reserved.
            </Box>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
