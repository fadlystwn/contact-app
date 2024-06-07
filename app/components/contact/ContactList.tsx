"use client"
import React, { useEffect, useState } from 'react';
import { selectStatus, fetchContactAsync, deleteContactAsync, selectContact } from '@/lib/features/contact/contactSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Avatar from '../avatar/Avatar';
import useModal from '@/app/hooks/useModal';
import UpdateContactModal from './UpdateContactModal';
import ContactForm from './ContactForm';
import { Contact } from '@/lib/features/contact/contactSlice';

const ContactList = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const contacts = useAppSelector(selectContact) || [];
  const { openModal, isOpen, closeModal } = useModal();
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    dispatch(fetchContactAsync());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteContactAsync(id));
  };

  const handleUpdate = (contact: Contact) => {
    setSelectedContact(contact);
    openModal();
  };

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-screen text-gray-700">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="flex justify-center items-center h-screen text-red-600">Failed to fetch contact.</div>;
  }

  return (
    <>
      <div className="p-4 w-full">
        {contacts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-4 text-left font-semibold">Photo</th>
                  <th className="p-4 text-left font-semibold">Name</th>
                  <th className="p-4 text-left font-semibold">Age</th>
                  <th className="p-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => (
                  <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">
                      <Avatar name={contact.firstName} src={contact.photo} alt={`${contact.firstName} ${contact.lastName}`} />
                    </td>
                    <td className="p-4">{contact.firstName} {contact.lastName}</td>
                    <td className="p-4">{contact.age}</td>
                    <td className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                        <button
                          onClick={() => handleUpdate(contact)}
                          className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-gray-700">No contact information available.</div>
        )}
      </div>
      <UpdateContactModal isOpen={isOpen} closeModal={closeModal}>
        {selectedContact ? (
          <ContactForm initialData={selectedContact} />
        ) : (
          <div className="text-center text-gray-700">No contact selected for update.</div>
        )}
      </UpdateContactModal>


    </>
  );
};

export default ContactList;
