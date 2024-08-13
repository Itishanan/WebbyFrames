"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../utils/api"; // You'll need to implement this function

const SignupForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSignup = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous error messages
    setSuccess(""); // Clear previous success messages
    setLoading(true); // Set loading state to true

    try {
      const data = await registerUser({
        name,
        email,
        username,
        password,
        phone,
        address,
      });
      console.log(data.message);
      setSuccess(
        "Registration successful. Please check your email for verification."
      );
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="content-center justify-center center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5 justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold">WebbyFrames</h1>
            </div>
            <div className="mt-5">
              {/* Form fields */}
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="username"
                value={username}
                required
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
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            {loading && (
              <div className="flex justify-center items-center mt-4">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            )}
            <div className="text-right mb-4">
              <a
                className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                href="/login"
              >
                Already have an account? Login
              </a>
            </div>
            <div className="flex justify-center w-full items-center">
              <div>
                <button
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
