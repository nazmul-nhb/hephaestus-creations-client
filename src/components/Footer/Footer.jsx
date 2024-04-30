import { FaXTwitter } from "react-icons/fa6";
import Button from "../Button/Button";
import { FaFacebookF, FaGithub, FaInstagram, FaMapMarkedAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import logo from '../../assets/logo.png'
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {

    const handleNewsletter = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.info("Subscribed to Newsletter", { position: "top-center" }, { autoClose: 2500 });
        form.reset();
    }

    return (
        <footer className="max-w-[1920px] mx-auto bg-[#343b4051]">
            <figure className="w-full block">
                <img className="mx-auto pt-8" src={logo} alt="logo" />
            </figure>
            <div className="px-6 py-8 md:py-12 md:px-20">
                <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-center lg:items-center lg:justify-between">
                    <div className="flex-1 flex flex-col lg:gap-3 text-center lg:text-left">
                        <h3 className="text-base md:text-2xl font-semibold"><span className="text-[#16a34a]">Hephaestus</span> <span className="text-[#ea580c]">Creations</span></h3>
                        <h6 className="text-[9px] md:text-sm text-[#ea0c0c]">Where Art Comes to Life</h6>
                    </div>
                    <form onSubmit={handleNewsletter} className="flex-1 flex flex-col text-center gap-2 px-8 lg:px-0">
                        <input required className="p-2 rounded-3xl bg-[#40457a37] border" type="email" name="email" id="email" />
                        <Button buttonType={'submit'} color={'#272c50'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border !rounded-3xl font-bold md:text-xl !px-4'} buttonText={"Subscribe to Newsletter"}></Button>
                    </form>
                    <div className="flex-1 flex flex-col gap-1 items-center lg:items-end">
                        <h3 className="font-bold">Contact Us</h3>
                        <h3 className="hover:text-[steelblue] cursor-pointer flex items-center gap-1"><MdPhone/><a href="tel:+8801623732187">+8801623732187</a></h3>
                        <h3 className="hover:text-[steelblue] cursor-pointer flex items-center gap-1"><MdEmail /><a href="mailto:nazmulnhb007@yahoo.com">nazmulnhb007@yahoo.com</a></h3>
                        <h3 className="hover:text-[steelblue] cursor-pointer flex items-center gap-1"><FaMapMarkedAlt />67/5, Art Centre, Dhaka-420</h3>
                    </div>
                </div>
                <hr className="border border-dotted border-[#12132D40] my-8" />
                <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row justify-center items-center lg:justify-between text-center lg:text-left">
                    <div className="flex-1">
                        <h3 className=""><a href="#">Terms & Conditions</a></h3>
                        <h3 className=""><a href="#">Privacy Policy</a></h3>
                        <h3 className=""><a href="#">Frequently Asked Questions</a></h3>
                    </div>
                    {/* Social Media */}
                    <div className="flex-1 flex flex-row gap-8 justify-center text-2xl">
                        <a href="https://x.com/nhb42" target="_blank" className="hover:text-[midnightblue]">
                            <FaXTwitter></FaXTwitter></a>
                        <a href="https://fb.com/nazmul.batchu" target="_blank" className="hover:text-[#356994]">
                            <FaFacebookF></FaFacebookF></a>
                        <a href="https://www.instagram.com/nazmulbatchu" target="_blank" className="hover:text-[darkred]">
                            <FaInstagram></FaInstagram></a>
                        <a href="https://github.com/nazmul-nhb/" target="_blank" className="hover:text-[#213b50]">
                            <FaGithub></FaGithub></a>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 items-center lg:items-end">
                        <span className="font-semibold">Hephaestus Creations</span>
                        <span className="text-[#41415c]">2024 &copy; All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;