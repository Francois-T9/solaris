import type { UsersStore } from "../types/types";
import { create } from "zustand";
export const useUserStore = create<UsersStore>()((set) => ({
  contactRequestError: "",
  contactRequestSuccess: "",
  sendContact: async (data) => {
    const response = await fetch(`http://localhost:3000/api/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    const jsonResponse = await response.json();
    if (response.status == 200) {
      console.log(data);
      set({
        contactRequestError: "",
        contactRequestSuccess: "Su solicitud ha sido enviada",
      });
    } else {
      console.log(jsonResponse.error);
      set({ contactRequestError: jsonResponse.error });
    }
  },
}));
