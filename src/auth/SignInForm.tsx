import React, { useState } from "react";
import Section from "../layout/Section";
import { stackedWavesSvgBg } from "../assets";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

type Props = {};

const SignInForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      //   await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
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
          onSubmit={handleLogin}
          className="text-white border border-gray-200/80 bg-gray-800 rounded-xl p-8 w-96"
        >
          <h2 className="app-title text-left mb-4">Welcome</h2>

          {error && <p className="app-text-error">{error}</p>}

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
          </div>

          <div className="flex flex-row gap-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
              className="w-full app-button-secondary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default SignInForm;
