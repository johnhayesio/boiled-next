// Import packages
import Head from 'next/head'
import PropTypes from 'prop-types'

// Import components
import Header from 'components/Header'

// Import styles
import 'styles/globals.css'
import { GlobalStyles } from 'components/GlobalStyles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next SpaceX Launch</title>
      </Head>
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
