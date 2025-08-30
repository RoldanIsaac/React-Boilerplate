import React, { useState } from "react";
import Section from "../layout/Section";
import { stackedWavesSvgBg } from "../assets";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login exitoso 🚀");
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
          className="bg-white shadow-lg rounded-2xl p-8 w-96"
        >
          <h2 className="app-title text-center mb-6">Login</h2>

          {error && <p className="app-text-error">{error}</p>}

          <div className="mb-4">
            <label className="app-label block">Email</label>
            <input
              type="email"
              className="app-input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label className="app-label block">Password</label>
            <input
              type="password"
              className="app-input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>

          <button type="submit" className="w-full app-button-primary">
            Ingresar
          </button>
        </form>
      </div>
    </Section>
  );
};

export default LoginForm;
