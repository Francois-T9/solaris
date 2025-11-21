import type { UsersStore } from "../types/types";
import { create } from "zustand";
export const useUserStore = create<UsersStore>()((set) => ({
  contactRequestError: "",
  contactRequestSuccess: "",
  billingRequestError: "",
  billingRequestSuccess: "",
  sendContact: async (data) => {
    const response = await fetch(`http://localhost:3000/api/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    const jsonResponse = await response.json();
    if (response.status == 200) {
      set({
        contactRequestError: "",
        contactRequestSuccess: "Su solicitud ha sido enviada",
      });
    } else {
      set({ contactRequestError: jsonResponse.error });
    }
  },
  sendBill: async (data) => {
    const response = await fetch(`http://localhost:3000/api/bills`, {
      method: "POST",
      body: data,
    });
    const JSONresponse = await response.json();
    if (response.status == 200) {
      set({ billingRequestSuccess: "Su requesta ha sido enviada" });
      set({ billingRequestError: "" });
    } else {
      console.log(JSONresponse.error);
      set({ billingRequestError: JSONresponse.error });
      if (JSONresponse.error.message) {
        set({ billingRequestError: JSONresponse.error.message });
      }
    }
  },
  resetBillingState: () =>
    set({
      billingRequestSuccess: "",
      billingRequestError: "",
    }),
  resetContactState: () =>
    set({
      contactRequestSuccess: "",
      contactRequestError: "",
    }),
}));
