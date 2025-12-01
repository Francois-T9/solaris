import type { FlagsStore } from "@/types/types";
import { create } from "zustand";
export const useFlagsStore = create<FlagsStore>()((set) => ({
  urlArray: [],
  fetchFlags: async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=mx,us&fields=languages,cca2,flags`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      set({
        urlArray: data.map((country: any) => ({
          code: country.cca2,
          language: country.languages,
          flagUrl: country.flags.svg,
        })),
      });
    }
  },
}));
