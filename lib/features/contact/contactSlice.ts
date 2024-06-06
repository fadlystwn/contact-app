import { createAppSlice } from "@/lib/createAppSlice";
import { fetchContactApi, addContactApi } from "./contactAPI";

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
        pending: (state) => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value = action.payload
        },
        rejected: (state) => {
          state.status = "failed"
        }
      }
    ),
    addContact: create.asyncThunk(
      async (payload: Contact) => {
        const response = await addContactApi(payload)
        return response.data
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = [...state.value, action.payload]
        },
        rejected: (state) => {
          state.status = "failed";
        }
      }
    )
  }),

  selectors: {
    selectContact: (contact) => contact.value,
    selectStatus: (contact) => contact.status
  }
})

export const { fetchContactAsync, addContact } = contactSlice.actions;
export const { selectContact, selectStatus } = contactSlice.selectors