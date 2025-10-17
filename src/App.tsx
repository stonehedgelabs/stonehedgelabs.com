import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  Box,
  Image,
  Flex,
  Heading,
  Link,
  createSystem,
  Stack,
  Text,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      xxs: "16em",
      xs: "20em",
      xl: "80em",
      "2xl": "96em",
      "3xl": "120em",
      "4xl": "160em",
      "5xl": "192em",
      "6xl": "224em",
      "7xl": "256em",
      "8xl": "288em",
      "9xl": "320em",
      "10xl": "352em",
      "11xl": "384em",
      "12xl": "416em",
    },
    tokens: {
      fonts: {
        heading: { value: "'Old Standard TT', serif" },
        body: { value: "'Old Standard TT', serif" },
      },
      // ... your sizes and colors unchanged
    },
  },
});

const system = createSystem(defaultConfig, config);

function App() {
  const projects = [
    {
      name: "Arbitration",
      url: "https://arbi.gg",
      description: "Scores. Reactions. Real-time.",
    },
    {
      name: "SystemG",
      url: "https://sysg.dev",
      description:
        "An open-source process manager tool for streamlined development workflows.",
    },
    {
      name: "EsperTech",
      url: "https://espertech.io",
      description:
        "A boutique cybersecurity concierge service offering tailored digital-security solutions.",
    },
    {
      name: "Libx",
      url: "https://libx.stream",
      description: "A web-based tool used to export your Spotify library.",
    },
  ];

  return (
    <ChakraProvider value={system}>
      {/* Make root a flex column, so footer sits at bottom when content is short */}
      <Flex
        direction="column"
        align="center"
        h="100vh"
        w="100vw"
        px={{ base: 4, md: 8 }}
        pt={8}
      >
        <Image height={20} src={"/img/logo.png"} />
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }}
          mb={12}
          mt={4}
          textAlign="center"
        >
          Stonehedge Labs
        </Heading>
        <Box maxW="500px" p={4}>
          <Text textAlign="center">
            Stonehedge Labs is an innovation studio building both technical and
            non-technical projects under one umbrella. From open-source tools
            like SystemG to tailored security services like EsperTech, we
            experiment, prototype, and launch dope shit.
          </Text>
        </Box>

        {/* flex=1 pushes footer to bottom */}
        <Stack
          flex="1"
          w="100%"
          maxW="500px"
          textAlign={{ base: "center", md: "left" }}
        >
          {projects.map((project) => (
            <Box
              cursor="pointer"
              key={project.name}
              borderWidth="1px"
              borderRadius="lg"
              onClick={() => window.open(project.url, "_blank")}
              p={6}
              _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
            >
              <Link href={project.url}>
                <Heading as="h2" size="md" mb={2} color="blue.500">
                  {project.name}
                </Heading>
              </Link>
              <Text fontSize="sm" color="gray.600">
                {project.description}
              </Text>
            </Box>
          ))}
        </Stack>

        <Flex
          as="footer"
          align="center"
          w="100vw"
          mt={12}
          flexDirection={"column"}
        >
          <Text
            cursor={"pointer"}
            fontSize="xs"
            color={"#3b82f6"}
            onClick={() => {
              window.open("https://rashad.wiki", "_blank");
            }}
          >
            @rashad.wiki
          </Text>
          <Text fontSize="xs">Copyright of StoneHedge Labs™ 2023</Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
