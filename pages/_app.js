// Import packages
import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Import theme
import theme from '../theme/theme'

// Import components
import Header from 'components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

// Declare prop type validation
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
}

export default MyApp
