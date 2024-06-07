import type { Contact } from "./contactSlice";

export const fetchContactApi = async () => {
    const response = await fetch("https://contact.herokuapp.com/contact", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    const result: { data: any } = await response.json();
    return result;
}

export const fetchByIdApi = async (id: string) => {
    const response = await fetch(`https://contact.herokuapp.com/contact/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    const result: { data: any } = await response.json();
    return result;
}

export const addContactApi = async (contact: Contact) => {
    const response = await fetch("https://contact.herokuapp.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
    });

    const result: { data: any } = await response.json();
    return result;
}

export const deleteContactApi = async (id: string) => {
    const response = await fetch(`https://contact.herokuapp.com/contact/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });

    const result: { data: any } = await response.json();
    return result;
}

export const updateContactApi = async (id: string, contact: Contact) => {
    const response = await fetch(`https://contact.herokuapp.com/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
    });

    const result: { data: any } = await response.json();
    return result;
}
