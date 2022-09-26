import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Information from '../components/Information'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-[#18191A] h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth'>
      <Head>
        <title> title of the portfolio </title>
      </Head>

      <Sidebar />

      <Header />

      <section id="about" className='snap-center'>
        <Information />
      </section>
      <section id="about1" className='snap-center'>
        <Information />
      </section>
      <section id="about2" className='snap-center'>
        <Information />
      </section>

      <Footer />

    </div>
  )
}
