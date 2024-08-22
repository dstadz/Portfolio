'use client' // Mark the component as a Client Component
// pages/posts/[id].js
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { workObject } from 'app/data/work'
import Image from 'next/image'

export default function Page() {
  const { id } = useParams() // Get the dynamic route parameter
  const work = workObject[id]

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {work.position} at {work.company}
      </h1>
      <p>
        {work.date} {work.location}
      </p>
      <p className="mb-4">
        {work.tech.map(x => `${x} `)}
      </p>
      <div className="my-8">
        {work.detail}
      </div>
      <div className="my-8">
        Gallery
        {work?.gallery?.map(({ img, alt, desc }) => (
          <div className="bg-gray-600 mb-8 p-4 rounded-lg">
            <Image
              src={`/image/${img}`}
              className="rounded-lg"
              width={900}
              height={50}
              alt={alt}
              loading="lazy"
              decoding="async"
              key={img}
            />
            <p className='mt-4'>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
