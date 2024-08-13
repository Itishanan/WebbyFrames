"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../utils/api";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous error messages
    try {
      const data = await loginUser(username, password);
      console.log(data.message);
      setSuccess("Login successful wait while we redirecting you");
      setTimeout(() => {
        router.push("/dashboard"); // Redirect to the dashboard
      }, 2000); // Set success message
    } catch (err) {
      setError(err.message); // Set error message from the backend
    }
  };

  return (
    <section className="content-center justify-center ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md w-full mx-auto">
            <div className="flex items-center space-x-5 justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold">WebbyFrames</h1>
            </div>
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="login"
              >
                User Name
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="login"
                value={username}
                required={true}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                id="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {success && <p className="text-green-500">{success}</p>}
            <div className="text-right mb-4">
              <a
                className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center w-full items-center">
              <div>
                <button
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                href="signup"
              >
                or sign up
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
