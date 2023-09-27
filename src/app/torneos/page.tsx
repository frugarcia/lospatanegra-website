// Dependencies
import Footer from '@/components/footer'
import Header from '@/components/header'
import Tournaments from '@/components/tournaments'

export default function Torneos() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className='flex-1 w-full max-w-[900px] mx-auto'>
        <div className='mx-auto py-12 px-4'>
          <h1 className='text-3xl text-[#034256]/70'>Torneos</h1>
          <p className='text-xl font-light'>A continuación detallamos nuestros torneos:</p>
          <Tournaments />
        </div>
      </main>
      <Footer />
    </div>
  )
}
