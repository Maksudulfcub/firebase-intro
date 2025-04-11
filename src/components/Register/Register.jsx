import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../assets/firebase/firebase.init";
import { useState } from "react";

const Register = () => {

    const [regError, setRegError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
                setRegError(error);
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
                                <input type="text" name="name" className="input" placeholder="Name" />
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
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