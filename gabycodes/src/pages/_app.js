import { Montserrat} from 'next/font/google'

const mont = Montserrat ({
  weight: '400',
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <main className={mont.className} >
      <Component {...pageProps} />
  </main>
  )
}
