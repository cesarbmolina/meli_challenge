import '@/styles/globals.css'
import { GlobalContextProvider } from '@/utils/globalContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <GlobalContextProvider>
    <Component {...pageProps} />
  </GlobalContextProvider>
}
