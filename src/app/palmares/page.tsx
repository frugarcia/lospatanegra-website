// Dependencies
import Footer from '@/components/footer'
import Header from '@/components/header'
import palmares from '@/constants/palamares.json'

export default function Palmares() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className='flex-1 w-full max-w-[900px] mx-auto'>
        <div className='mx-auto py-12 px-4'>
          <h1 className='text-3xl text-[#034256]/70'>Palmarés</h1>
          <p className='text-xl font-light'>A continuación detallamos el palmarés de Los Patanegra en toda su trayectoria:</p>
          <div className='mt-10 flex flex-col gap-5'>
            {palmares.map((item) => {
              return (
                <div key={item.year} className='border-2 border-gray-400/60 p-4 rounded-lg bg-white/70'>
                  <div className='flex gap-2 mb-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px] stroke-yellow-700' viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8 21l8 0"></path>
                      <path d="M12 17l0 4"></path>
                      <path d="M7 4l10 0"></path>
                      <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
                      <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    </svg>
                    <span className='text-xl font-medium text-yellow-700'>Año {item.year}</span>
                  </div>
                  <ul>
                    {item.items.map((p, i) => (<li key={`${item.year}_${i}`} className='font-light py-1'>- {p}</li>))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
