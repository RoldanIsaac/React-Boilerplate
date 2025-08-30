import React, { useState } from "react";
import Section from "../layout/Section";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      //   await signInWithEmailAndPassword(auth, email, password);
      alert("Login exitoso 🚀");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Section className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-2xl p-8 w-96"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {error && (
            <p className="bg-red-100 text-red-600 text-sm p-2 mb-4 rounded">
              {error}
            </p>
          )}

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tuemail@correo.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Login;
