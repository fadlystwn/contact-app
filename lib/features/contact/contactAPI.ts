import type { Contact } from "./contactSlice";
import fetchApi from "@/app/utils/fetchApi";

export const fetchContactApi = () => fetchApi("https://contact.herokuapp.com/contact", "GET");

export const fetchByIdApi = (id: string) => fetchApi(`https://contact.herokuapp.com/contact/${id}`, "GET");

export const addContactApi = (contact: Contact) => fetchApi("https://contact.herokuapp.com/contact", "POST", contact);

export const deleteContactApi = (id: string) => fetchApi(`https://contact.herokuapp.com/contact/${id}`, "DELETE");

export const updateContactApi = (id: string, contact: Contact) => fetchApi(`https://contact.herokuapp.com/contact/${id}`, "PUT", contact);
