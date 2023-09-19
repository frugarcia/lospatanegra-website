// Dependencies
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Torneos() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className='flex-1 w-full max-w-[900px] mx-auto'>
        <h2>Torneos</h2>
      </main>
      <Footer />
    </div>
  )
}
