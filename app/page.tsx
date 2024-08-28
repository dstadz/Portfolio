import { BlogPosts } from '@/components/posts'

export default function Page() {
  return (
    <section className="bg-grey-900">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Daniel Stadlers Portfolio
      </h1>
      <p className="mb-4">
        I'm a software engineer with a passion for creating clean, efficient code and seamless user experiences.
        I excel at building maintainable React applications and enjoy working with modern frameworks like Next.js.
        With a strong foundation in front-end development, I focus on optimizing performance and usability.
        I'm always eager to explore new technologies, with a knack for understanding user needs and crafting solutions that make a difference.
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
