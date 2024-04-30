import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";
import { TbEdit, TbEditOff } from "react-icons/tb";
import { FaStar, FaUserEdit } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { PiTimerBold } from "react-icons/pi";
import { MdDescription, MdEmail, MdRateReview } from "react-icons/md";
import { GiColombianStatue, GiStockpiles } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";

const ArtDetails = () => {
    const art = useLoaderData();
    const navigate = useNavigate();

    const { image, item_name, subcategory_name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name } = art;

    const showSuccess = () => {
        Swal.fire({
            title: 'Success!',
            text: `We will contact you soon to confirm your order!`,
            icon: 'success',
            confirmButtonText: 'Okay!'
        })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:p-4 flex flex-col-reverse lg:flex-row gap-6 border rounded-md">
            <Helmet>
                <title>{item_name} - Hephaestus Creations</title>
            </Helmet>

            <div className="flex-1 flex flex-col gap-5 px-6 lg:px-0">
                <h3 className="text-[slateblue] flex gap-1 items-center text-xl md:text-3xl font-bold"><GiColombianStatue />{item_name}</h3>
                <h3 className="text-[steelblue] flex gap-1 items-center font-semibold text-lg md:text-2xl"><BiSolidCategory /><span className="font-bold">Subcategory: </span>{subcategory_name}</h3>
                <div className="text-[#33333bb1]">
                    <span className="flex gap-1 items-center font-semibold text-lg"><MdDescription />Item Description: </span>
                    <p className="text-[#4a4a64b9] text-base">{short_description}</p>
                </div>
                <hr />
                <div className="flex justify-between items-center text-lg font-medium">
                    <h3 className="flex gap-1 items-center text-[#134113] border border-[#134113] bg-[#13411315] px-2 rounded-2xl"><IoMdPricetags /><span className="font-semibold">Price: </span>${price}</h3>
                    <h3 className="flex gap-1 items-center text-[#6b5f1a] border border-[#6b5f1a] bg-[#6b5f1a15] px-2 rounded-2xl"><MdRateReview /><span className="font-semibold">Rating: </span>{rating} <FaStar /></h3>
                </div>
                <div className={`flex flex-col gap-4 md:flex-row justify-between md:items-center items-start font-medium`}>
                    <h3 className={`${customization ? 'text-[green] border-[green] bg-[#00800015]' : 'text-[red] bg-[#ff000015] border-[red] '} border px-2 flex gap-1 items-center rounded-2xl`}>{customization ? <TbEdit /> : <TbEditOff />}<span className="font-semibold">Customizable: </span>{customization ? "Yes" : "No"}</h3>
                    <h3 className="text-[#5648969d] font-medium border border-[#5648969d] bg-[#3f36660f] px-2 rounded-2xl flex gap-1 items-center"><PiTimerBold /><span className="font-semibold">Processing Time: </span>{processing_time}</h3>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                    <h3 className="text-[#5648969d] bg-[#3f36660f] font-medium border border-[#5648969d] px-2 rounded-2xl flex gap-1 items-center"><GiStockpiles /><span className="font-semibold">Stock Status: </span>{stock_status}</h3>
                    <Button onClick={showSuccess} color={'#272c50'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border !rounded-3xl font-bold text-xl !px-4'} buttonText={"Order Now"}></Button>
                </div>
                <Button className={'border text-2xl font-semibold'} color={'slateblue'} hoverBgColor={'transparent'} hoverColor={'white'} onClick={() => navigate(-1)} buttonText={'Go Back'}></Button>
                <hr />
                <fieldset className="text-[#415860] border border-solid border-[#415860] rounded-lg pt-1 pb-3 px-3">
                    <legend className="text-[#5648969d] rounded-2xl font-medium border border-[#5648969d] bg-[#3f36660f] px-2">Item Added by</legend>
                    <div className="flex flex-col md:flex-row justify-between">
                        <h3 className="flex gap-1 items-center "><FaUserEdit />{user_name}</h3>
                        <h3 className="flex gap-1 items-center "><MdEmail />{user_email}</h3>
                    </div>
                </fieldset>
            </div>
            <div className="flex-1">
                <figure className="p-6 border shadow-md shadow-[#34284d34] rounded-md space-y-6 md:space-y-8">
                    <Zoom duration={2000}>
                        <img id="art-item" className="hover:scale-105 transition-all opacity-95 duration-500 hover:opacity-100 rounded-md" src={image} alt={item_name} />
                        <figcaption className="text-center">{item_name}</figcaption>
                    </Zoom>
                </figure>
            </div>
        </section>
    );
};

export default ArtDetails;