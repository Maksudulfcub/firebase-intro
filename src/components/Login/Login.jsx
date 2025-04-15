
import { useContext, useRef, useState } from "react";
import auth from "../../assets/firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const [user, setUser] = useState(null);
    const emailRef = useRef(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
                setUser(null)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error);
                setUser(null)
            })
    }

    const handleGoogleLogOut = () => {
        signOut(auth).then(() => {
            console.log("Successfully Logged out");
            setUser(null)
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // signInWithEmailAndPassword(auth, email, password)
        //     .then((result) => {
        //         console.log(result.user);
        //         if (result.user.emailVerified) {
        //             console.log('User logged in successfully');
        //         } else {
        //             alert('Please verify your email address.')
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error.message);
        //     })

        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                if (result.user.emailVerified) {
                    console.log('User logged in successfully');
                } else {
                    alert('Please verify your email address.')
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please provide an email !');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email inbox.')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailRef}
                                    className="input"
                                    placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a onClick={handleForgetPass} className="link link-hover">Forgot password?</a></div>
                                <div>
                                    <p>New user here? Please <Link to="/register">Register</Link></p>
                                </div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>

                            {
                                user ? <button onClick={handleGoogleLogOut}>Log Out</button> :
                                    <>
                                        <button onClick={handleSignInGoogle}>Sign in with Google</button>
                                        <button onClick={handleGithubSignIn}>Login with GitHub</button>
                                    </>
                            }
                        </div>
                    </div>
                    <div>
                        {
                            user && <div>
                                <h4 className="font-bold">Name : {user.displayName}</h4>
                                <p className="text-sm text-gray-500">Email : {user.email}</p>
                                <img className="rounded-full w-[100px]" src={user.photoURL} alt="" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;