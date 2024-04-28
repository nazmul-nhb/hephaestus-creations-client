import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import defaultPP from '../../assets/user.png';
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import { toast } from "react-toastify";
import { IoMdLogOut } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || 'Human');
            setProfilePicture(user.photoURL || defaultPP);
        } else {
            setUserName('Human');
            setProfilePicture(defaultPP);
        }
    }, [user]);

    const navLinks = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/all-arts'}>All Art & Crafts</NavLink>

        {
            user && <><NavLink to={'/add-arts'}>Add Craft Item</NavLink>
                <NavLink to={'/my-arts'}>My Art & Crafts</NavLink>
            </>
        }
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/about'}>About</NavLink>
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
        <nav className="flex items-center gap-0 md:gap-4 mx-0 shadow-md px-2 py-3 md:px-[5.4%] sticky top-0 bg-white bg-opacity-95 z-20">
            <div className="lg:hidden text-4xl md:text-5xl cursor-pointer" onClick={() => setOpen(!open)}>
                {
                    open
                        ? <MdOutlineClose className="text-[#e85800] hover:text-[#236d3e] transform transition-all duration-1000"></MdOutlineClose>
                        : <MdMenuOpen className="text-[#236d3e] hover:text-[#e85800] transform transition-all duration-1000"></MdMenuOpen>
                }
            </div>
            <div className="flex justify-between items-center w-full">
                <Link to='/'>
                    <div className="flex items-center gap-1" title="ArtisanAxis Realty">
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-2xl font-semibold"><span className="text-[#16a34a]">Hephaestus</span> <span className="text-[#ea580c]">Creations</span></h3>
                            <h6 className="text-[9px] md:text-sm text-[#ea0c0c]">Where Art Comes to Life</h6>
                        </div>
                    </div>
                </Link>
                <div className="text-sm xl:text-base">
                    <ul className={`w-1/2 lg:w-full flex flex-col lg:flex-row justify-start lg:justify-center gap-2 font-medium duration-500 absolute lg:static shadow-md shadow-slate-700 lg:shadow-none h-screen lg:h-auto p-4 lg:p-0 ${open ? 'left-0 top-16 md:top-20 bg-white bg-opacity-95 flex z-10' : '-left-full top-16 md:top-20'}`}>
                        {navLinks}
                    </ul>
                </div>
                {
                    user
                        ? <div className="flex items-center gap-2 md:gap-3">
                            <Tooltip anchorSelect=".nameIcon" place="bottom">
                                {userName}
                            </Tooltip>
                            <Link to={'/profile'}><img className="nameIcon w-9 md:w-14 h-9 md:h-14 rounded-full border-2 p-[2px] border-green-900 hover:opacity-75 transform transition-all duration-1000" src={profilePicture} alt={userName} /></Link>
                            <Tooltip anchorSelect=".logOutIcon" place="bottom">
                                Log out
                            </Tooltip>
                            <div className="logOutIcon flex items-center justify-center w-9 md:w-14 h-9 md:h-14 rounded-full border-2 border-[#c6c0cf] p-[2px] cursor-pointer text-2xl md:text-4xl hover:text-3xl hover:md:text-5xl bg-[#c6c0cf] text-[#ffffff] hover:text-[#ff5151] hover:bg-[#e0d5d5] hover:border-[#e0d5d5] transform transition-all duration-1000" onClick={handleLogout}>
                                <IoMdLogOut />
                            </div>
                        </div>
                        : <div className="flex items-center gap-2 md:gap-3">
                            <NavLink to={'/login'}><Button className="border text-sm md:text-xl xl:text-2xl font-bold" buttonText={"Login"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></NavLink>
                            <NavLink to={'/register'}><Button className="border text-sm md:text-xl xl:text-2xl font-bold" buttonText={"Register"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></NavLink>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;