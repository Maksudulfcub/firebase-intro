import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;