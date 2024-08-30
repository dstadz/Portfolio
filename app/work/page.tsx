import { WorkItems } from '@/components/work-item'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Work
      </h1>
      <p className="mb-4">
        Im an early stage frontend engineer, socializing in JavaScript, React and related Technologies.
        Check out my previous work:
      </p>
      <div className="my-8">
        <WorkItems />
      </div>
    </section>
  )
}
