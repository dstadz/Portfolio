"use client"

import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import Image from 'next/image'
import { workObject } from 'app/data/work'
import { useState } from 'react'

const workList = Object
  .keys(workObject)
  .map(slug => ({ slug, ...workObject[slug] }) )

export function WorkItems() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {workList.map((work, idx) => (
        <div
          key={work.company}
          className="flex flex-col w-50 space-y-1 mb-4 border-2 border-blue-200 border-solid p-4 bg-gray-800 rounded-lg"
        >
          <div  //header
            className="flex justify-between items-center bg-gray-00 rounded-lg"
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
            />
            <div>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums ml-4">
              {work.position} at {work.company}
                {/* {formatDate(work.metadata.publishedAt, false)} */}
              </p>
              <p>
                {work.date} {work.location}
              </p>
            </div>
            <span className='mr-4'> {idx === activeIndex ? '^' : 'v'} </span>
          </div>

          {activeIndex === idx && <section>
            <p className="mb-4">
              {work.tech.map(x => `${x} `)}
            </p>
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {work.description}
            </p>
          </div>

            <div className="my-8">
              {work.detail}
            </div>
            <div className="my-8">
              <p className='mb-4'>Gallery</p>
              {work?.gallery?.map(({ img, alt, desc }) => (
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
                  <p className='mt-4'>{desc}</p>
                </div>
              ))}
            </div>
          </section>}
        </div>
      ))}
    </div>
  )
}
