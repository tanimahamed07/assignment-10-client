import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
const 
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered w-full"
                        required
                    />

                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name='password'
                            className="input input-bordered w-full"
                            required

                        />
                        <button type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</button>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                <div className="divider">OR</div>

                <button

                    className="btn btn-outline btn-success w-full"
                >
                    Continue with Google
                </button>

                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary font-semibold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;