import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../assets/firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handlePassShow = () => {
        setShowPass(!showPass);
    }

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setRegError('Password at least 6 characters')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegError('At least one Uppercase needed.')
            return;
        }

        setRegError('');
        setSuccess('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('User created successfully !')

                sendEmailVerification(result.user)
                .then(()=>{
                    alert('Please check your email and get verified.')
                })
            })
            .catch((error) => {
                console.log(error);
                setRegError(error.message);
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Please register to get full access.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} className="form text-left">
                                <label className="form-label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" required />
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                <label className="form-label">Password</label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    className="input relative"
                                    placeholder="Password" required />
                                <span className="absolute -ml-10 mt-2 font-semibold" onClick={handlePassShow}>
                                    {
                                        showPass ? "Hide" : "Show"
                                    }
                                </span>
                                {
                                    regError && <h4 className="font-semibold text-red-500">{regError}</h4>
                                }
                                {
                                    success && <h3 className="font-semibold text-green-500">{success}</h3>
                                }
                                <div>
                                    <p>Already have an account? Please <Link to="/login">Login</Link></p>
                                </div>
                                <button className="btn w-full btn-primary mt-4">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;