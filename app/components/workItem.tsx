import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import Image from 'next/image'
import { workObject } from 'app/data/work'

const workList = Object
  .keys(workObject)
  .map(slug => ({ slug, ...workObject[slug] }) )

export function WorkItems() {

  return (
    <div>
      {workList.map((work) => (
          <Link
            key={work.company}
            className="flex flex-col w-50 space-y-1 mb-4"
            href={`/work/${work.slug}`}
          >
            <div className="flex justify-start items-center bg-gray-100">
              <Image
                src={`/image/${work.slug}.jpg`}
                width={50}
                height={50}
                alt={work.company}
                loading="lazy"
                decoding="async"
              />
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums ml-4">
                {work.company}
                {/* {formatDate(work.metadata.publishedAt, false)} */}
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {work.description}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
