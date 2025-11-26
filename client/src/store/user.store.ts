import type { UsersStore } from "../types/types";
import { create } from "zustand";
export const useUserStore = create<UsersStore>()((set, get) => ({
  contactRequestError: "",
  contactRequestSuccess: "",
  billingRequestError: "",
  billingRequestSuccess: "",
  carRequestError: "",
  carRequestSuccess: "",
  allBills: null,
  allChargerRequests: null,

  allBrands: [],
  sendContact: async (data) => {
    const response = await fetch(`http://localhost:3000/api/request`, {
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
  sendCar: async (data) => {
    const response = await fetch(`http://localhost:3000/api/car`, {
      method: "POST",
      body: data,
    });

    const jsonResponse = await response.json();
    if (response.status == 200) {
      set({
        carRequestError: "",
        carRequestSuccess: "Su solicitud ha sido enviada",
      });
    } else {
      set({ carRequestError: jsonResponse.error });
    }
  },
  sendBill: async (data) => {
    const response = await fetch(`http://localhost:3000/api/bill`, {
      method: "POST",
      body: data,
    });
    const JSONresponse = await response.json();
    if (response.status == 200) {
      set({ billingRequestSuccess: "Su requesta ha sido enviada" });
      set({ billingRequestError: "" });
    } else {
      set({ billingRequestError: JSONresponse.error });
      if (JSONresponse.error.message) {
        set({ billingRequestError: JSONresponse.error.message });
      }
    }
  },
  getBills: async () => {
    const response = await fetch(`http://localhost:3000/api/bills`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const JSONresponse = await response.json();
    if (response.status == 200) {
      set({ allBills: JSONresponse });
      return true;
    } else {
      return false;
    }
  },
  getChargerRequests: async () => {
    const response = await fetch(`http://localhost:3000/api/car`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const JSONresponse = await response.json();
    if (response.status == 200) {
      set({ allChargerRequests: JSONresponse });
      return true;
    } else {
      return false;
    }
  },
  deleteBill: async (billId: number) => {
    const { getBills } = get();
    const response = await fetch(`http://localhost:3000/api/bills/${billId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      getBills();
    }
  },
  deleteChargerRequest: async (chargerRequestId: number) => {
    const { getChargerRequests } = get();
    const response = await fetch(
      `http://localhost:3000/api/chargers/${chargerRequestId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status == 200) {
      getChargerRequests();
    }
  },
  getCarBrands: async () => {
    const response = await fetch(`http://localhost:3000/api/brands`, {
      method: "GET",
    });
    const data = await response.json();
    if (response.status == 200) {
      set({ allBrands: data });
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
