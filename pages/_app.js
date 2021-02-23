// Import packages
import PropTypes from 'prop-types'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

// Declare prop type validation
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
}

export default MyApp
