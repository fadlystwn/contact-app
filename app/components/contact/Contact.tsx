"use client"
import React, { useEffect } from 'react'
import { selectStatus, fetchContactAsync, selectContact } from '@/lib/features/contact/contactSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Avatar from '../avatar/Avatar';
import { Metadata } from 'next';

const Contact = () => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const contacts = useAppSelector(selectContact)

  useEffect(() => {
    dispatch(fetchContactAsync())
  }, [dispatch])

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-screen text-gray-700">Loading...</div>;
  }
  if (status === 'failed') {
    return <div className="flex justify-center items-center h-screen text-red-600">Failed to fetch contact.</div>;
  }

  return (
    <div className="p-4 w-full">
      {contacts.length > 0 ? (
        <ul className="space-y-4">
          {contacts.map(contact => (
            <li key={contact.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <p className="text-lg font-semibold">Name: {contact.firstName} {contact.lastName}</p>
              <p className="text-lg font-semibold">Age: {contact.age}</p>
              <Avatar name={contact.firstName} src={contact.photo} alt={`${contact.firstName} ${contact.lastName}`} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-700">No contact information available.</div>
      )}
    </div>


  );
};

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'List of Contact'
}

export default Contact;
