import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <div>
      <p
        className='text-4xl pb-14 font-bold'>Zop lo*dya</p>
      <p
        className='text-xl'>Nahi mahit mala naav</p>
    </div>
    </main>
  )
}
