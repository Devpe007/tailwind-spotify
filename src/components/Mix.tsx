import Image from "next/image";

export function Mix() {
  return (
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
  )
}
