// Import packages
import { Box, Container, Text } from '@chakra-ui/react'

// Import consts
import { medium } from 'consts'

const Header = () => {
  return (
    <Box pos="fixed" top="0" left="0" w="100%" bg={medium}>
      <Container maxW="container.xl">
        <Text fontSize="xl" py={2}>
          Next SpaceX Launch
        </Text>
      </Container>
    </Box>
  )
}

export default Header
