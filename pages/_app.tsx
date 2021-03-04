// Import packages
import { ReactNode } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

// Import components
import Header from 'components/Header'

// Import styles
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
