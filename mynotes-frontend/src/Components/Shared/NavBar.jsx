import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = ({ toggleTheme }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access");
        window.location.reload();
        toast.success("Logout Successful");
        navigate("/login");
    };
    const navlinks = [
        {
            name: "Home",
            path: "/",
        },

        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },

    ]

    if (!localStorage.getItem("access") ) {
        navlinks.push({
            name: "Login",
            path: "/login",
        },

            {
                name: "Register",
                path: "/register",
            }
        )
    }

    if (localStorage.getItem("access")) {
        navlinks.push(
            {
                name: "Notes",
                path: "/note",
            },
        )
    }

  



    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <div className="sticky top-0 z-10 hidden md:flex items-center justify-between px-4 py-4 ">
                <div className="flex items-center md:gap-2 md:px-6">
                    <img src="./logo.png" className="w-6 h-6 md:w-8 md:h-10 " alt="" />
                    <h1 className="text-purple-500 text-lg md:text-3xl font-bold font-serif">Not<span className="text-cyan-500">Hi</span></h1>
                </div>
                <div className="flex items-center gap-4">
                    {navlinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => {
                                return 'font-semibold text-lg no-underline' +
                                    (!isActive ? ' text-purple-500' : ' border-b-2 border-purple-500 text-cyan-500');
                            }}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                       { localStorage.getItem('access') && (
                                    <button
                                        className="font-semibold  no-underline text-purple-500 text-lg"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                ) }
                </div>


                <label className="swap swap-rotate pl-2">

                    <input type="checkbox" onChange={toggleTheme} />
                    {/* sun icon  */}
                    <svg className="swap-on fill-current w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
            <hr className="hidden md:border-purple-600 mb-4" />
            <div className="sticky top-0 z-10 flex md:hidden items-center justify-between px-2 py-4 ">
                <div className="flex items-center md:gap-2 md:px-6">
                    <img src="/public/logo.png" className="w-8 h-8 " alt="" />
                    <h1 className="text-purple-500 text-lg md:text-3xl font-bold font-serif">Not<span className="text-cyan-500">Hi</span></h1>
                </div>
                <div className="flex items-center  gap-2">
                    <div className="relative">
                        {/* Toggle Button */}
                        <div className="absolute -top-5 right-0">
                            <button
                                className="sm:hidden p-2 text-purple-500"
                                onClick={toggleMenu}
                            >
                                ☰ {/* You can replace this with an icon */}
                            </button>

                            {/* Navigation Links */}
                            <div className={`flex flex-col sm:flex-row items-center gap-4 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                                {navlinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) => {
                                            return 'font-semibold text-base no-underline' +
                                                (!isActive ? ' text-purple-500' : ' border-b-2 border-purple-500 text-cyan-500');
                                        }}
                                    >
                                        {link.name}
                                    </NavLink>
                                    
                                ))}
                                { localStorage.getItem('access') && (
                                    <button
                                        className="font-semibold text-base no-underline text-purple-500"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                ) }
                            </div>

                        </div>

                    </div>
                    <div>
                        <label className="swap swap-rotate pl-2">

                            <input type="checkbox" onChange={toggleTheme} />
                            {/* sun icon  */}
                            <svg className="swap-on fill-current w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                </div>




            </div>
            <hr className="border-purple-600 mb-4" />
        </div>
    );
};

export default NavBar;
