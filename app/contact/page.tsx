import ContactForm from "@/components/contact-form";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact Me
      </h1>
      <div>
        <ContactForm />
      </div>
    </section>
  )
}
