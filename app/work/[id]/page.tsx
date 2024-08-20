'use client' // Mark the component as a Client Component
// pages/posts/[id].js
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { workObject } from 'app/data/work'


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
    </section>
  )
}
