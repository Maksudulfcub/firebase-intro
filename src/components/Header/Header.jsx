import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="space-x-5 mb-10">
            <NavLink style={{'marginRight':'20px'}} to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
};

export default Header;