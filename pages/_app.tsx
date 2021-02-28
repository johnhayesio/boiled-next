// Import packages
import { ReactNode } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

// Import components
import Header from 'components/Header'

// Import styles
import 'styles/globals.css'
import { GlobalStyles } from 'components/GlobalStyles'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
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

export default MyApp
