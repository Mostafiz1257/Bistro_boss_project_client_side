import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
     const pathName = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
        {pathName || <Navbar></Navbar>}
            <Outlet></Outlet>
        {pathName || <Footer></Footer>}
        </div>
    );
};

export default Main;