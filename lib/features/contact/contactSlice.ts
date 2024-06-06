import { createAppSlice } from "@/lib/createAppSlice";
import { fetchContactApi, addContactApi, deleteContactApi, updateContactApi } from "./contactAPI";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface ContactSliceState {
  value: Contact[];
  status: "idle" | "loading" | "failed";
}

const initialState: ContactSliceState = {
  value: [],
  status: "idle",
}

const asyncThunkHandlers = {
  pending: (state: ContactSliceState) => {
    state.status = "loading";
  },
  rejected: (state: ContactSliceState) => {
    state.status = "failed";
  },
};

export const contactSlice = createAppSlice({
  name: "contact",
  initialState,
  reducers: (create) => ({
    fetchContactAsync: create.asyncThunk(
      async () => {
        const response = await fetchContactApi();
        return response.data
      },
      {
        ...asyncThunkHandlers,
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value = action.payload
        },

      }
    ),
    addContact: create.asyncThunk(
      async (payload: Contact) => {
        const response = await addContactApi(payload)
        return response.data
      },
      {
        ...asyncThunkHandlers,
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = [...state.value, action.payload]
        },
      }
    ),
    deleteContactAsync: create.asyncThunk(
      async (payload: string) => {
        const response = await deleteContactApi(payload);
        return response.data;
      },
      {
        ...asyncThunkHandlers,
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = state.value.filter(contact => contact.id !== action.payload.id);
        },
      }
    ),
    updateContactAsync: create.asyncThunk(
      async ({ id, payload }: { id: string, payload: Contact }) => {
        const response = await updateContactApi(id, payload);
        console.log(id, payload)
        return response.data;
      },
      {
        ...asyncThunkHandlers,
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = state.value.filter((contact) => contact.id !== action.payload.id);
        },

      }
    )
  }),

  selectors: {
    selectContact: (contact) => contact.value,
    selectStatus: (contact) => contact.status
  }
})

export const { fetchContactAsync, addContact, updateContactAsync, deleteContactAsync } = contactSlice.actions;
export const { selectContact, selectStatus } = contactSlice.selectors