"use client"

import Image from 'next/image'
import { workObject } from '@/public/data/work'
import { useState } from 'react'

const workList = Object.keys(workObject).map((slug) => {
  const key = slug as keyof typeof workObject

  return { slug: key, ...workObject[key] }
})


export function WorkItems() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {workList.map((work, idx) => (
        <div
          key={work.company}
          className="flex flex-col w-50 space-y-1 mb-4 border-2 border-blue-800 border-solid p-4 bg-gray-800 rounded-lg"
        >
          <div  //header
            className="flex justify-between items-center border-2 border-blue-800 rounded-lg"
            onClick={() => setActiveIndex(prev => prev === idx ? -1 : idx)}
          >
            <Image
              src={`/image/${work.slug}.jpg`}
              width={100}
              height={100}
              alt={work.company}
              loading="lazy"
              decoding="async"
              className='rounded-tl-lg rounded-bl-lg'
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="flex flex-col justify-between rounded-lg p-3 border-l-0 w-full h-full rounded-tl-none rounded-bl-none">
              <h3 className="text-neutral-300 text-lg tabular-nums">
              {work.position} at {work.company}
                {/* {formatDate(work.metadata.publishedAt, false)} */}
              </h3>
              <h4 className="">
                {work.date} {work.location}
              </h4>
            </div>
            <span className='mr-4'> {idx === activeIndex ? '^' : 'v'} </span>
          </div>

          {activeIndex === idx && <section>
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {work.description}
            </p>
          </div>

            <div className="my-4">
              {work.detail}
            </div>
            {work?.gallery?.length ? (
              <div className="my-8">
              <p className='mb-4'>Gallery</p>
              {work?.gallery?.map(({ img, alt, description }) => (
                <div
                  key={img}
                  className="bg-gray-600 mb-4 p-4 rounded-lg"
                >
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
                  <p className='mt-4'>{description}</p>
                </div>
              ))}
            </div>
            ): null}
          </section>}
        </div>
      ))}
    </div>
  )
}
