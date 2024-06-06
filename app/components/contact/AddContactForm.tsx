"use client"
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from "react-hook-form"
import { Contact } from "@/lib/features/contact/contactSlice";
import { useAppDispatch } from "@/lib/hooks";
import { addContact } from "@/lib/features/contact/contactSlice";

const AddContactForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>()

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Contact> = (data) => {
    const payload = { ...data, id: uuidv4(), photo: data.photo };
    console.log(payload.photo[0])
    // dispatch(addContact(payload));
  };

  return (
    <>
      <h1>Add New Contact</h1>
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
            {...register("age", { required: true })}
          />
          {errors.age && <p className="text-red-400 text-sm">This field is required</p>}
        </div>

        <div className="my-4">
          <input placeholder="Photo" className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("photo")}
          />
          {errors.age && <p className="text-red-400 text-sm">This field is required</p>}
        </div>

        <input type="submit" className="bg-custom-500 text-white font-bold px-4 py-2 rounded shadow-md hover:bg-custom-600 active:bg-custom-700 focus:outline-none focus:ring-2 focus:ring-custom-400" />
      </form>
    </>
  )
}

export default AddContactForm