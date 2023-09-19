// Dependencies
import Image from 'next/image'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Typewriter from '@/components/typewriter'



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className='flex-1 w-full max-w-[900px] mx-auto'>
        <div className='max-w-[600px] mx-auto py-12 px-4'>
          <div className='text-[#034256] font-light text-2xl text-center'>
            <p className='font-bold text-[#034256]/70 text-ms mb-3'>¿Qué es Los Patanegra?</p >
            <p className='mb-5'>
              Un equipo de padel que como tal comenzó hace años y se ha transformado en algo muy grande que no tiene fin, sn una historia increíble, una aventura, en cuanto a
            </p>
            <Typewriter className='text-3xl flex h-20 items-center mb-3 justify-center font-bold uppercase' />
            <p>
              Dicen que estamos locos de la cabeza…
            </p>
            <p className='font-medium'>
              ¿Te lo vas a perder?
            </p>
          </div>
        </div>
        <div className='max-w-[900px] mx-auto'>
          <Image priority={true} alt="Los Patanegra" src="/main_image.webp" width={1200} height={1200} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
