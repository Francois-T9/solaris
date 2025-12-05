import type { ChargerRequest } from "@/types/types";

const API_URL = import.meta.env.VITE_API_URL;
export const getChargers = async () =>
  await fetch(`${API_URL}api/car`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json() as Promise<ChargerRequest[]>);

export const deleteChargerRequest = async (id: number) =>
  await fetch(`${API_URL}api/chargers/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json());
