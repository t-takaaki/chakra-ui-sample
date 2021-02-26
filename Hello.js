import React from "react";
import {
  ChakraProvider,
  extendTheme,
  // Layout
  Container, // https://chakra-ui.com/docs/layout/container
  Grid, // https://chakra-ui.com/docs/layout/grid
  GridItem,
  Box, // https://chakra-ui.com/docs/layout/box
  Stack,  // https://chakra-ui.com/docs/layout/stack
  VStack,
  // Form
  Button, // https://chakra-ui.com/docs/form/button
  Slider, // https://chakra-ui.com/docs/form/slider
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  // Data Display
  Divider, // https://chakra-ui.com/docs/data-display/divider
  Code, // https://chakra-ui.com/docs/data-display/code
  // Feedback
  Skeleton, // https://chakra-ui.com/docs/feedback/skeleton
} from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

// custome theme
const theme = extendTheme({colors});

const Hello = () => (
  <ChakraProvider theme={theme}>
    <Container>
      <h1>Hello world.</h1>
      <VStack spacing={10} divider={<Divider />}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2} h="10" bg="tomato" />
          <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
          <GridItem>
            <Box w="100%" h="10" bg="blue.500">
              hogehoge
            </Box>
          </GridItem>
        </Grid>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Code>
          Hello world!
        </Code>
      </VStack>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Container>
  </ChakraProvider>
);

export default Hello;
