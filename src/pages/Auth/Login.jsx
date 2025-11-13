import React, { useState, useContext } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setLoading(false);
        toast.success("Login Successfully");
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((erro) => {
        console.error(error);
      })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md  border-gray-500 border-2">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form className="space-y-4" onSubmit={handleLogIn}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-success w-full"
        >
          <FcGoogle size={24} /> Continue with Google
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
