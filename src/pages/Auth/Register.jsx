import React, { use, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const Register = () => {
    const { signInWithGoogle, createUser, updateUserProfile } = use(AuthContext);


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })

    }
    const [passwordError, setPasswordError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };
   const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value; 

    if (!validatePassword(password)) {
        setPasswordError("Password must contain uppercase, lowercase and at least 6 characters");
        return;
    } else {
        setPasswordError('');
    }

    createUser(email, password)
        .then((result) => {
            updateUserProfile(displayName, photoURL);
            console.log(result.user)
            toast.success("User created successfully!");
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message);
        });
};


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        name="displayName"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photoURL"
                        className="input input-bordered w-full"
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

                    <p className='text-red-500'>{passwordError}</p>

                    <button type="submit" className="btn btn-primary w-full">
                        Register
                    </button>
                </form>
                <div className="divider">OR</div>

                <button onClick={handleGoogleSignIn}

                    className="btn btn-outline btn-success w-full"
                >
                    Continue with Google
                </button>



                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;