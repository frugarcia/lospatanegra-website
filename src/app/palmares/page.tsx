// Dependencies
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Palmares() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className='flex-1 w-full max-w-[900px] mx-auto'>
        <h2>Palmarés</h2>
      </main>
      <Footer />
    </div>
  )
}
