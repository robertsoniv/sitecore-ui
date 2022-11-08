import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import sitecoreTheme from '@sitecore-ui/chakra-theme'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={sitecoreTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
}
