import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-full sm:w-[360px] px-8 py-10 rounded-lg shadow-2xl bg-black gap-6 text-white"
      >
        {/* Title */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-3xl font-bold tracking-wide">{currentState}</p>
          <div className="mt-2 w-16 h-[2px] bg-white"></div>
        </div>

        {/* Conditional Input for Name */}
        {currentState === 'Sign Up' && (
          <input
            type="text"
            className="w-full px-4 py-3 text-sm bg-black border border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Name"
            required
          />
        )}

        {/* Email Input */}
        <input
          type="email"
          className="w-full px-4 py-3 text-sm bg-black border border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Email"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          className="w-full px-4 py-3 text-sm bg-black border border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Password"
          required
        />

        {/* Forgot Password & State Toggle */}
        <div className="flex justify-between w-full text-sm mt-2">
          <p className="cursor-pointer hover:underline">Forgot Password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer hover:underline"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer hover:underline"
            >
              Login
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          className="w-full py-3 mt-6 text-black bg-white font-semibold text-sm rounded-lg transition-transform transform hover:scale-105"
        >
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
