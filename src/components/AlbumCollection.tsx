import { Music } from "./Music";

export function AlbumCollection() {
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
    </div>
  )
}
