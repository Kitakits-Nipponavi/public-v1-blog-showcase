"use client";
import React, { useState, FormEvent } from 'react';
import AuthFormProps from '@/types';
import PrimaryButtons from '../Buttons/ActionButtons'

interface AuthFormProps {
  formType: 'signIn' | 'signUp' | 'forgotPassword';
}

const AuthForm = ({ formType }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission based on formType
    if (formType === 'signIn') {
      console.log('Sign In:', { email, password, rememberMe });
    } else if (formType === 'signUp') {
      console.log('Sign Up:', { email, password });
    } else if (formType === 'forgotPassword') {
      console.log('Forgot Password:', { email });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start text-footer">
      <h2 className="font-body text-bodyXS text-opacity-70 mb-[17px]">{formType === 'signIn' ? 'Sign In' : formType === 'signUp' ? 'Sign Up' : 'Forgot Password'}</h2>
      <p className="font-display text-displayXS font-semibold mb-[14px]">{formType === 'signIn' ? 'Welcome Back' : formType === 'signUp' ? 'Join Us' : 'Reset Your Password'}</p>
      {/* Black line separation */}
      <div className="w-full border-b-2 opacity-60 border-black mb-[23px]" />

      {/* Email Input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="col-main h-2xl p-md mb-lg rounded-base bg-task-bg shadow-form-input"
        required
      />

      {/* Password Input (Only for SignIn and SignUp) */}
      {(formType === 'signIn' || formType === 'signUp') && (
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="col-main h-2xl p-md mb-lg rounded-base bg-task-bg shadow-form-input"
          required
        />
      )}

      {/* Primary Button */}
      <div className="mb-lg">
        <PrimaryButtons type="primary" label={formType === 'signIn' ? 'Continue' : formType === 'signUp' ? 'Join Now' : 'Send Reset Link'} onClick={handleSubmit} />
      </div>

      {/* Remember Me Checkbox (Only for SignIn) */}
      {formType === 'signIn' && (
        <label className="flex items-center mb-lg cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="hidden" // Hide the default checkbox
          />
          <span
            className={`w-lg h-lg mr-2 rounded-full shadow-form-input flex items-center justify-center ${
              rememberMe ? "bg-button-bg text-white " : "bg-header-color text-bodyXS"
            }`}
            onClick={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && "✔"} {/* Show check mark if rememberMe is true */}
          </span>
          Remember me
        </label>
      )}

      {/* Links for SignIn and SignUp */}
      {formType === 'signIn' && (
        <div className="mt-md">
          <a href="/forgot-password" className="font-body text-bodySM underline mb-sm">Forgot Password?</a>
          <p className="font-body text-bodySM">
            Not a member? <a href="/sign-up" className="underline">Sign Up</a>
          </p>
        </div>
      )}
      {formType === 'signUp' && (
        <div className="mt-md">
          <p className="font-body text-bodySM">
            Already have an account? <a href="/sign-in" className="underline">Sign In</a>
          </p>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
