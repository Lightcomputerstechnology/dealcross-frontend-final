// src/pages/LoginPage.jsx
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  /** Handle <input> changes */
  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /** POST to /auth/login */
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/auth/login", form);
      // TODO: persist token, redirect, etc.
      console.log(res.data);
    } catch (err) {
      setError(err.response?.data?.detail ?? "Login failed");
    }
  };

  return (
    <motion.div
      className="min-h-screen grid place-items-center bg-gray-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="space-y-6 p-8">
          <h1 className="text-2xl font-semibold text-center">Sign in</h1>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
