import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
