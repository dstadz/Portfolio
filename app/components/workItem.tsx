import Link from 'next/link'
import { formatDate, getWorkItems } from 'app/blog/utils'
import Image from 'next/image'


const workList = [
  {
    company: 'Bumblebee Spaces',
    position: 'Software Engineer',
    description: ' Modular robotic furniture designed to maximize space efficiency.',
    url: 'https://bumblebeespaces.com/',
    slug: 'bumblebee',
    date: '',
    tech: '',
    location: 'San Francisco, CA',
  },
  {
    company: 'Greenspark Software',
    position: 'Software Engineer',
    description: 'Inventory and business management platforms for recycling plants and scrap yards.',
    url: 'https://www.greensparksoftware.com/',
    slug: 'greenspark',
    date: '',
    tech: '',
    location: 'Brooklyn, NY (Remote)',
  },
  {
    company: 'Accelery AI',
    position: 'Software Engineer',
    description: 'Modernizing businesses by developing next-generation software solutions and leveraging artificial intelligence technology',
    url: 'https://www.accelery.ai/',
    slug: 'accelery',
    date: '',
    tech: '',
    location: 'Ausin, TX (Remote)',
  },

]
export function WorkItems() {
  let allWorkItems = getWorkItems()

  return (
    <div>
      {workList.map((work) => (
          <Link
            key={work.company}
            className="flex flex-col w-50 space-y-1 mb-4"
            href={`/projects/${work.slug}`}
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
