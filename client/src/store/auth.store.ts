import type { AuthStore } from "@/types/types";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const API_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      accessToken: null,
      loginError: null,
      loginSuccess: null,
      isAuth: null,

      fetchMe: async (password: string) => {
        const response = await fetch(`${API_URL}api/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("accessToken", data.accessToken);
          set({
            accessToken: data.accessToken,
            loginSuccess: "Login successful",
            loginError: null,
            isAuth: true,
          });
        } else {
          set({ loginError: "Login failed", loginSuccess: null });
        }
      },
      ensureAuth: () => {
        const { accessToken } = get();
        if (!accessToken) {
          localStorage.removeItem("accessToken");
          set({ isAuth: false });
          return false;
        }

        try {
          const { exp } = jwtDecode<{ exp: number }>(accessToken);
          if (Date.now() >= exp * 1000) {
            localStorage.removeItem("accessToken");
            set({ isAuth: false });
            return false;
          }
          set({ isAuth: true });
          return true;
        } catch {
          localStorage.removeItem("accessToken");
          set({ isAuth: false });
          return false;
        }
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      partialize: (state) => ({
        accessToken: state.accessToken,
        isAuth: state.isAuth,
      }),
    }
  )
);
