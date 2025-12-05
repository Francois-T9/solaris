import type { Bill } from "@/types/types";

const API_URL = import.meta.env.VITE_API_URL;
export const getBills = async () =>
  await fetch(`${API_URL}api/bills`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json() as Promise<Bill[]>);

export const deleteBill = async (id: number) =>
  await fetch(`${API_URL}api/bills/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json());
