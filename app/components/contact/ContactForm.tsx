"use client"
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from "react-hook-form"
import { Contact } from "@/lib/features/contact/contactSlice";
import { useAppDispatch } from "@/lib/hooks";
import { addContactAsync, updateContactAsync } from "@/lib/features/contact/contactSlice"; // Assuming you have an updateContact action

const ContactForm = ({ initialData }: { initialData?: Contact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Contact>({
    defaultValues: initialData || {
      firstName: '',
      lastName: '',
      age: 0,
      photo: ''
    }
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<Contact> = (data) => {
    if (initialData) {
      // Update contact logic
      const payloadData = { id: initialData.id, payload: data };
      dispatch(updateContactAsync(payloadData));
    } else {
      // Add new contact logic
      const payload = { ...data, id: uuidv4() };
      dispatch(addContactAsync(payload));
    }
  };

  return (
    <>
      <h1>{initialData ? 'Update Contact' : 'Add New Contact'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <input placeholder="First Name" className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <p className="text-red-400 text-sm">This field is required</p>}
        </div>
        <div className="my-4">
          <input placeholder="Last Name" className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <p className="text-red-400 text-sm">This field is required</p>}
        </div>
        <div className="my-4">
          <input placeholder="Age" className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="number"
            {...register("age", { required: true })}
          />
          {errors.age && <p className="text-red-400 text-sm">This field is required</p>}
        </div>
        <div className="my-4">
          <input placeholder="Photo URL" className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("photo")}
          />
        </div>
        <input type="submit" className="bg-custom-500 text-white font-bold px-4 py-2 rounded shadow-md hover:bg-custom-600 active:bg-custom-700 focus:outline-none focus:ring-2 focus:ring-custom-400" />
      </form>
    </>
  );
}

export default ContactForm;
