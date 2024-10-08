import "./Navbar.css";
import Button from "../Button/Button";
import defaultPP from '../../assets/user.png';
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        // use stored theme if available, otherwise default to 'light'
        return storedTheme || 'light';
    });

    const sidebarRef = useRef(null);

    const handleThemeToggle = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const storedTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', storedTheme);
    }, [theme])

    useEffect(() => {
        if (user) {
            setUserName(user?.displayName || 'No Name Provided');
            setProfilePicture(user?.photoURL || defaultPP);
        } else {
            setUserName('No Name Provided');
            setProfilePicture(defaultPP);
        }
    }, [user]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mouseup", handleClickOutside);

        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [sidebarRef]);

    const navLinks = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/all-arts'}>All Items</NavLink>

        {
            user && <><NavLink to={'/add-arts'}>Add An Item</NavLink>
                <NavLink to={'/my-arts'}>My Art & Crafts</NavLink>
            </>
        }
        <NavLink to={'/contact'}>Contact</NavLink>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out Successfully!");
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    return (
        <nav className="max-w-[1920px] flex items-center gap-0 md:gap-4 mx-auto shadow-md px-2 py-3 md:px-20 sticky top-0 bg-gradient-to-l from-[#a0a4beed] to-[#7466b4f6] bg-opacity-100 z-20">
            <div ref={sidebarRef} className="min-[1170px]:hidden text-5xl cursor-pointer" onClick={() => setOpen(!open)}>
                {
                    open
                        ? <MdOutlineClose className="text-[#ea0c0c] hover:text-[midnightblue] transform transition-all duration-1000"></MdOutlineClose>
                        : <MdMenuOpen className="text-[midnightblue] hover:text-[#ea0c0c] transform transition-all duration-1000"></MdMenuOpen>
                }
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1" title="Hephaestus Creations">
                    <Link to="/">
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-2xl font-semibold text-[midnightblue]">Hephaestus Creations</h3>
                            <h6 className="text-[10px] md:text-sm text-[#ea0c0c]">Where Art Comes to Life</h6>
                        </div></Link>
                </div>
                <div className="text-sm xl:text-base">
                    <ul className={`w-1/2 min-[1170px]:w-full flex flex-col min-[1170px]:flex-row justify-start min-[1170px]:justify-center gap-2 font-medium duration-500 absolute min-[1170px]:static shadow-lg shadow-slate-700 min-[1170px]:shadow-none h-screen min-[1170px]:h-auto p-4 min-[1170px]:p-0 ${open ? 'left-0 top-[60px] md:top-20 bg-gradient-to-t from-[#a0a4beed] to-[#6b5caffb] bg-opacity-100 flex z-10' : '-left-full top-[60px] md:top-20'}`}>
                        {navLinks}
                    </ul>
                </div>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <Tooltip anchorSelect=".toggleTheme" place="bottom">
                        Toggle Theme
                    </Tooltip>
                    <input checked={theme === 'dark' ? true : false} onChange={handleThemeToggle} type="checkbox" className="theme-controller" />

                    {/* sun icon */}
                    <svg className="swap-off toggleTheme fill-current w-7 md:w-10 h-7 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on toggleTheme fill-current w-7 md:w-10 h-7 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
                {
                    user
                        ? <div className="flex items-center gap-2 md:gap-3">
                            <Tooltip anchorSelect=".nameIcon" place="bottom">
                                {userName}
                            </Tooltip>
                            <Link to={'/profile'}><img className="nameIcon w-9 md:w-14 h-9 md:h-14 rounded-full border-2 p-[2px] border-[#0e1d42e8] hover:opacity-70 transition-all duration-1000" src={profilePicture} alt={userName} /></Link>
                            <Tooltip anchorSelect=".logOutIcon" place="bottom">
                                Log out
                            </Tooltip>
                            <div className="logOutIcon flex items-center justify-center w-9 md:w-14 h-9 md:h-14 rounded-full border-2 border-[midnightblue] p-[2px] cursor-pointer text-2xl md:text-4xl hover:text-3xl hover:md:text-5xl bg-[midnightblue] text-[#ffffff] hover:text-[#ea0c0c] hover:bg-[#e0d5d5] hover:border-[#ea0c0c] transform transition-all duration-1000" onClick={handleLogout}>
                                <IoMdLogOut />
                            </div>
                        </div>
                        : <div className="flex items-center gap-1 md:gap-3">
                            <NavLink to={'/login'}><Button className="border text-base md:text-xl xl:text-2xl !rounded-3xl !px-2 md:!px-4 !py-[2px] md:!py-1 font-bold" buttonText={"Login"} color={"#272c50"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></NavLink>
                            {/* <NavLink to={'/register'}><Button className="border text-sm md:text-xl xl:text-2xl !rounded-3xl !px-2 md:!px-4 !py-[2px] md:!py-1 font-bold" buttonText={"Register"} color={"#272c50"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></NavLink> */}
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;