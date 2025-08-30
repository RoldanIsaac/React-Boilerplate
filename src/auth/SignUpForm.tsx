// src/components/SignUpForm.tsx
import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      //   await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Usuario creado correctamente 🚀");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Registro</h2>

        {error && (
          <p className="bg-red-100 text-red-600 text-sm p-2 mb-4 rounded">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-100 text-green-600 text-sm p-2 mb-4 rounded">
            {success}
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

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">
            Confirmar Password
          </label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
