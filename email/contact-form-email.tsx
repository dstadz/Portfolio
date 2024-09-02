interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
)

export default ContactFormEmail
