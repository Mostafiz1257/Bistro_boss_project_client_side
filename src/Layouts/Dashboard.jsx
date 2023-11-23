import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const dashBoardOptions =
        <>
            {
                isAdmin ?
                    <>
                        <li><NavLink to='/'>Admin Home</NavLink></li>
                        <li><NavLink  to='/dashboard/addItem'>Add Items</NavLink></li>
                        <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
                        <li><NavLink to='/dashboard/booking'>Manage Booking</NavLink></li>
                        <div className="divider divider-horizontal"></div>

                    </> :

                    <>
                        <li><NavLink to='/'>User Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/dashboard/myCart'>Payment History</NavLink></li>
                        <li><NavLink to='/dashboard/myCart'>My Cart</NavLink></li>
                        <li><NavLink to='/dashboard/myCart'>Add Review</NavLink></li>
                        <div className="divider divider-horizontal"></div>

                    </>
            }

            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/dashboard/'>Menu</NavLink></li>
            <li><NavLink to='/dashboard/'>Shop</NavLink></li>
            <li><NavLink to='/dashboard/'>Contract</NavLink></li>
        </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-warning-content ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/Lx14L3v/key.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {dashBoardOptions}
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {dashBoardOptions}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;