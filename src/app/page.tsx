import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { AlbumCollection } from '@/components/AlbumCollection';
import { Mix } from '@/components/Mix';

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

          <AlbumCollection />

          <h2 className='font-semibold text-2xl mt-10'>Made for Deigo Fernandes</h2>

          <Mix />
        </main>
      </div>
      <Footer />
    </div>
  );
}
