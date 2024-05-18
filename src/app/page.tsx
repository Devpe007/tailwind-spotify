import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
              <strong>Wasting Light</strong>

              <button  className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play className='w-4 h-4'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
              <strong>Wasting Light</strong>

              <button  className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play className='w-4 h-4'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
              <strong>Wasting Light</strong>

              <button  className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play className='w-4 h-4'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
              <strong>Wasting Light</strong>

              <button  className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play className='w-4 h-4'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
              <strong>Wasting Light</strong>

              <button  className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play className='w-4 h-4'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
              <strong>Wasting Light</strong>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Deigo Fernandes</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt="Capa do album"/>

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt="Capa do album"/>

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt="Capa do album"/>

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt="Capa do album"/>

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt="Capa do album"/>

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
