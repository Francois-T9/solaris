import { create } from "zustand";
import type { UsersStore } from "../types/types";
import { useAuthStore } from "./auth.store";

export const useUserStore = create<UsersStore>()((set, get) => {
  useAuthStore.subscribe((state) => {
    set({ accessToken: state.accessToken });
  });

  return {
    contactRequestError: "",
    contactRequestSuccess: "",
    billingRequestError: "",
    billingRequestSuccess: "",
    carRequestError: "",
    carRequestSuccess: "",
    allBills: null,
    allChargerRequests: null,

    // initial value
    accessToken: useAuthStore.getState().accessToken,

    allBrands: [],

    sendContact: async (data) => {
      const response = await fetch(`http://localhost:3000/api/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const jsonResponse = await response.json();
      if (response.status === 200) {
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
      if (response.status === 200) {
        set({
          carRequestError: "",
          carRequestSuccess: "SUCCESS",
        });
      } else {
        set({
          carRequestError: jsonResponse.error,
          carRequestSuccess: "",
        });
      }
    },

    sendBill: async (data) => {
      const response = await fetch(`http://localhost:3000/api/bill`, {
        method: "POST",
        body: data,
      });

      const JSONresponse = await response.json();

      if (response.status === 200) {
        set({ billingRequestSuccess: "SUCCESS", billingRequestError: "" });
      } else {
        set({
          billingRequestError: JSONresponse.error.message || JSONresponse.error,
          billingRequestSuccess: "",
        });
      }
    },

    getBills: async () => {
      const { accessToken } = get();
      const response = await fetch(`http://localhost:3000/api/bills`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const JSONresponse = await response.json();

      if (response.status === 200) {
        set({ allBills: JSONresponse });
        return true;
      } else {
        return false;
      }
    },

    getChargerRequests: async () => {
      const response = await fetch(`http://localhost:3000/api/car`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${get().accessToken}`,
        },
      });

      const JSONresponse = await response.json();

      if (response.status === 200) {
        set({ allChargerRequests: JSONresponse });
        return true;
      } else {
        return false;
      }
    },

    deleteBill: async (billId: number) => {
      const response = await fetch(
        `http://localhost:3000/api/bills/${billId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${get().accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        get().getBills();
      }
    },

    deleteChargerRequest: async (chargerRequestId: number) => {
      const response = await fetch(
        `http://localhost:3000/api/chargers/${chargerRequestId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${get().accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        get().getChargerRequests();
      }
    },

    getCarBrands: async () => {
      const response = await fetch(`http://localhost:3000/api/brands`);

      const data = await response.json();
      if (response.status === 200) {
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
  };
});
