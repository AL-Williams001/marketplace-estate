import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1
        className="text-3xl text-center font-semibold my-7 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      "
      >
        Signup
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounder-lg"
          id="username"
          onChange={handleChange}
          autoComplete="username"
        />

        <input
          type="email"
          placeholder="Eamil"
          className="border p-3 rounder-lg"
          id="email"
          onChange={handleChange}
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounder-lg"
          id="password"
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg uppercase"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p> Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-400 underline">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignUp;
