import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";

export const Login = () => {
  const { fetchMe, loginError, loginSuccess } = useAuthStore();

  const [pwd, setPwd] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetchMe(pwd);
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
      <legend className="fieldset-legend">Login</legend>

      <label className="label">admin password</label>
      <input
        type="password"
        className="input"
        placeholder="password"
        onChange={(e) => setPwd(e.target.value)}
      />

      <button type="submit" className="btn btn-neutral mt-4">
        Login
      </button>
      {loginError && <p className="text-red-500">{loginError}</p>}
      {loginSuccess && <p className="text-green-500">{loginSuccess}</p>}
    </form>
  );
};
