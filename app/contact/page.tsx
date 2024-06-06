import Contact from '../components/contact/Contact';
import AddContact from '../components/contact/AddContact';
import AddContactForm from '../components/contact/AddContactForm';

export default function ContactPage() {
  return (
    <div className="bg-slate-100 w-full min-h-screen bg-light font-sans text-dark">
      <AddContact>
        <AddContactForm />
      </AddContact>
      <Contact />
    </div >
  )
}

