import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
                alert('Logged out successfully !')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="space-x-5 mb-10">
            <NavLink style={{ 'marginRight': '20px' }} to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <div className="navbar-end">
                {
                    user &&
                    <p className="font-bold text-sm text-green-500 mr-10">Current User : {user.email}</p>
                }
                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-secondary">Log out</button>
                        :
                        <NavLink to="/login"><button className="btn btn-secondary">Log In</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Header;