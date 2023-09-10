import React, { useState } from 'react';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
        <div><Navbar /></div>
        <div>Login Page</div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                    </div>
                    <div className="card-body">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                        </div>
                        {!isSignIn && (
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            required
                            />
                        </div>
                        )}
                        <button type="submit" className="btn btn-primary">
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>
                    </div>
                    <div className="card-footer">
                    {isSignIn ? (
                        <p>
                        Don't have an account?{' '}
                        <button
                            className="btn btn-link"
                            onClick={toggleAuthMode}
                        >
                            Sign Up
                        </button>
                        </p>
                    ) : (
                        <p>
                        Already have an account?{' '}
                        <button
                            className="btn btn-link"
                            onClick={toggleAuthMode}
                        >
                            Sign In
                        </button>
                        </p>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div><Footer/></div>
    </>
  );
}

export default Login;

