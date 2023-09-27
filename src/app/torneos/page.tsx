// Dependencies
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import torneos from '@/constants/torneos.json'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Torneos() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className='flex-1 w-full max-w-[900px] mx-auto'>
        <div className='mx-auto py-12 px-4'>
          <h1 className='text-3xl text-[#034256]/70'>Torneos</h1>
          <p className='text-xl font-light'>A continuación detallamos nuestros torneos:</p>
          <div className='mt-10 flex flex-col gap-10'>
            {torneos.reverse().map(item => {
              return (
                <article key={item.id} className='flex-col sm:flex-row py-4 sm:py-0 flex gap-1 border-2 border-gray-400/60 rounded-lg bg-white/70 overflow-hidden items-center'>
                  <div className='w-56 sm:w-40 h-full'>
                    <Image src={item.image.url} alt={item.imageAlt} width={item.image.width} height={item.image.height} className='object-fill h-full' />
                  </div>
                  <div className='flex flex-col gap-2 flex-1 py-3 px-3'>
                    <span className='text-center sm:text-left text-xl'>{item.title}</span>
                    <span className='text-center sm:text-left text-lg font-light'>{item.text}</span>
                    <div className='flex gap-2 flex-wrap justify-center'>
                      {item.image ? <Link href={item.image.url} target='_blank' rel='noopener' className="btn rounded-md px-3 py-1 bg-red-700 text-white">Descargar cartel</Link> : null}
                      {item.inscription ? <a href={item.inscription.url} target='_blank' rel='noopener' className={cn("btn rounded-md px-3 py-1 bg-green-800 text-white", { "pointer-events-none bg-gray-400": !item?.inscription?.active })}>Inscribirme</a> : null}
                      {item.sheet ? <a href={item.sheet.url} target='_blank' rel='noopener' className={cn("btn rounded-md px-3 py-1 bg-blue-900 text-white", { "pointer-events-none bg-gray-400": !item?.sheet?.active })}>Consultar cuadros</a> : null}
                      {item.gallery ? <a href={item.gallery.url} target='_blank' rel='noopener' className={cn("btn rounded-md px-3 py-1 bg-orange-500 text-white", { "pointer-events-none bg-gray-400": !item?.gallery?.active })}>Consultar galería de fotos</a> : null}
                    </div>
                  </div>

                </article>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
