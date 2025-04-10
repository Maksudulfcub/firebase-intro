
import auth from "../../assets/firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleGoogleLogOut = () => {
        signOut(auth).then(()=>{
            console.log("Successfully Logged out");
        })
        .catch((error)=> {
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
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <button onClick={handleSignInGoogle}>Sign in with Google</button>
                            <button onClick={handleGoogleLogOut}>Google Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;