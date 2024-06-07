import { Metadata } from 'next';
import ContactList from '../components/contact/ContactList';
import AddContactModal from '../components/contact/AddContactModal';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-slate-100 w-full min-h-screen bg-light font-sans text-dark">
      <AddContactModal>
        <ContactForm />
      </AddContactModal>
      <ContactList />
    </div >
  )
}

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is the contact page"
};
