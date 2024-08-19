import { WorkItems } from 'app/components/workItem'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Projects
      </h1>
      <p className="mb-4">
      </p>
      <div className="my-8">
        <WorkItems />
      </div>
    </section>
  )
}
