import { Link } from "react-router-dom";

const Navbar = () => {
    // Define the list items as an array of JSX elements
    const links = [
        <>
        <Link  to='/'> <li><a>Home</a></li> </Link>
        <Link  to='/menu'> <li><a>Our Menu</a></li> </Link>
        <Link  to='/contact'> <li><a>Contact Us</a></li> </Link>
        <Link  to='/order/salad'> <li><a>Order Food</a></li> </Link>


        </>
    ];

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links} {/* Render the links here */}
                        </ul>
                    </div>
                    <a className="font-bold uppercase text-lg ">Bistro Boss <br /> <span className="text-sm uppercase">Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links} {/* Render the links here */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
