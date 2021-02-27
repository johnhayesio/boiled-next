// Import packages
import PropTypes from 'prop-types'

// Import components
import Header from 'components/Header'

// Import styles
import { ModernReset } from 'components/GlobalStyles'
import { GlobalStyles } from 'twin.macro'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ModernReset />
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
