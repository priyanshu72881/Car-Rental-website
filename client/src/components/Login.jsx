import React, { useState } from 'react'

const Login = ({ setShowLogin }) => {

  const [state, setState] = useState("login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const endpoint =
        state === "login"
          ? "/api/user/login"
          : "/api/user/register";

      const bodyData =
        state === "login"
          ? { email, password }
          : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        alert(state === "login" ? "Login Success ✅" : "Register Success ✅");
        setShowLogin(false);
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div 
      onClick={() => setShowLogin(false)} 
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'
    >

      <form 
        onSubmit={onSubmitHandler} 
        onClick={(e)=>e.stopPropagation()} 
        className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 space-y-4"
      >

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">
          {state === "login" ? "Login" : "Create Account"}
        </h2>

        {/* Name (Register only) */}
        {state === "register" && (
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />

        {/* Button */}
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          {state === "login" ? "Login" : "Register"}
        </button>

        {/* Toggle */}
        <p className="text-sm text-center">
          {state === "login" ? (
            <>
              Don’t have an account?{" "}
              <span 
                onClick={() => setState("register")} 
                className="text-blue-600 cursor-pointer font-semibold"
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span 
                onClick={() => setState("login")} 
                className="text-blue-600 cursor-pointer font-semibold"
              >
                Login
              </span>
            </>
          )}
        </p>

      </form>
    </div>
  )
}

export default Login