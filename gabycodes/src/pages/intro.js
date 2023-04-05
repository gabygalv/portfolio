import { Playfair_Display } from 'next/font/google'


const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin']
})


export default function Intro() {
    return (
        <>
        <h1 className={playfair.className}>Hey! I'm Gaby</h1>
        <h4 >I'm a software engineer</h4>
        </>
    )
}