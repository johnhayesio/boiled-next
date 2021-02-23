// Import packages
import PropTypes from 'prop-types'

// Import components
import Header from '../components/Header'

// Import styles
import { GlobalStyles } from '../components/GlobalStyles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

// Declare prop type validation
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
}

export default MyApp
