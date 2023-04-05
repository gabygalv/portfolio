import Head from 'next/head'
import Intro from './intro'
import Header from './header'

export default function Home() {
  return (
    <>
      <Head>
        <title>GabyCodes</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main >
        <Header />
        <Intro/>
     </main>
    </>
  )
}
