import ContactForm from "../../components/contact/ContactForm"
import ContactInfo from "../../components/contact/ContactInfo"
import Map from "../../components/contact/Map"

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
        <Map />
      </div>
    </div>
  )
}
