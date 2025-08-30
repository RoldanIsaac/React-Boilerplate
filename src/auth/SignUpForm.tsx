import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import Section from "../layout/Section";
import { stackedWavesSvgBg } from "../assets";

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
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("User created successfully! 🚀");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Section
      className="h-screen flex items-center justify-center"
      svgBg={stackedWavesSvgBg}
    >
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSignUp}
          className="bg-white shadow-lg rounded-2xl p-8 w-96"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

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
              className="app-input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="app-input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">
              Password Confirmation
            </label>
            <input
              type="password"
              className="app-input w-full"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full app-button-primary">
            Sign Up
          </button>
        </form>
      </div>
    </Section>
  );
}
