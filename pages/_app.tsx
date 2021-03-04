// Import packages
import { ReactNode } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

// Import theme
import theme from 'theme/theme'

// Import components
import Header from 'components/Header'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <>
      <Head>
        <title>Next SpaceX Launch</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
