import React from 'react'
import {
  ChakraProvider,
  Grid,
  Box,
  Text,
  Alert,
  Switch,
  Container,
  Image,
  Stack,
  Spinner,
  Checkbox,
  CloseButton
} from '@chakra-ui/react'

// created by openchakra

const App = () => (
  <ChakraProvider resetCSS>
    <Grid templateColumns="repeat(5, 1fr)" gap={6} row={2} column={2}>
      <Box backgroundColor="teal.500" fontSize={12}>
        <Text>ほげほげ</Text>
      </Box>
      <Box backgroundColor="orange.500">
        <Text>ふがふが</Text>
      </Box>
      <Switch />
    </Grid>
    <Alert />
    <Container>
      <Image
        height="100px"
        width="100px"
        src="https://proguru.jp/static/images/logo_robot.png"
      />
    </Container>
    <Stack spacing={2}>
      <Spinner />
      <Checkbox isReadOnly>Label checkbox</Checkbox>
      <Checkbox isReadOnly>Label checkbox</Checkbox>
      <CloseButton size="md" />
    </Stack>
  </ChakraProvider>
)

export default App
