import { Play } from "lucide-react";
import Image from "next/image";

export function Music() {
  return (
    <a href='#' className='bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors'>
      <Image src="/album.jpg" width={96} height={96} alt="Capa do album"/>
      <strong>Wasting Light</strong>

      <button  className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play className='w-4 h-4'/>
      </button>
    </a>
  )
}
