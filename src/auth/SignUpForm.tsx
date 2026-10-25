import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import { auth } from "../firebase";
import Section from "../layout/Section";
import { stackedWavesSvgBg } from "../assets";
import { Link } from "react-router-dom";

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

    // if (password !== confirm) {
    //   setError("Passwords do not match");
    //   return;
    // }

    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   setSuccess("User created successfully! 🚀");
    //   setEmail("");
    //   setPassword("");
    //   setConfirm("");
    // } catch (err: any) {
    //   setError(err.message);
    // }
  };

  return (
    <Section
      className="h-screen flex items-center justify-center"
      svgBg={stackedWavesSvgBg}
    >
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSignUp}
          className="text-white border border-gray-200/80 bg-gray-800 rounded-xl p-8 w-96"
        >
          <div className="mb-6 pl-1 flex flex-row gap-1">
            <p className="rotate-180 -translate-y-0.25"> → </p>
            <Link to="/auth/sign-in" className="hover:underline">
              Back
            </Link>
          </div>

          <h2 className="app-title text-left mb-4">Become a member</h2>

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

          <div className="flex flex-col gap-4 mb-8">
            <div>
              <label className="app-label block">Email</label>
              <input
                type="email"
                className="app-input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your-email@gmail.com"
              />
            </div>

            <div>
              <label className="app-label block">Password</label>
              <input
                type="password"
                className="app-input w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="app-label block">Password Confirmation</label>
              <input
                type="password"
                className="app-input w-full"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>
      </div>
    </Section>
  );
}
