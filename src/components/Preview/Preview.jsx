import PropTypes from 'prop-types';
import { TbEdit, TbEditOff } from "react-icons/tb";
import { FaStar, FaUserEdit } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { PiTimerBold } from "react-icons/pi";
import { MdDescription, MdEmail, MdRateReview } from "react-icons/md";
import { GiColombianStatue, GiStockpiles } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";

const Preview = ({ previewItem }) => {
    const { image, item_name, subcategory_name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name } = previewItem;

    return (
        <section className="animate__animated animate__fadeInUp mx-2 my-2 p-2 flex flex-col-reverse gap-6 border rounded-md bg-gradient-to-b from-[#7076a0ed] to-[#beb6d3fb]">
            <div className="flex-1 flex flex-col gap-5 px-6 lg:px-0">
                <h3 className="text-[slateblue] flex gap-1 items-center text-base md:text-3xl font-bold"><GiColombianStatue />{item_name}</h3>
                <h3 className="text-[steelblue] flex gap-1 items-center font-semibold text-base md:text-2xl"><BiSolidCategory /><span className="font-bold">Subcategory: </span>{subcategory_name}</h3>
                <div className="text-[#33333bb1]">
                    <span className="flex gap-1 items-center font-semibold md:text-lg"><MdDescription />Item Description: </span>
                    <p className="text-[#4a4a64b9] text-sm md:text-base">{short_description}</p>
                </div>
                <hr />
                <div className="flex justify-between gap-3 flex-col md:flex-row items-start md:items-center text-lg font-medium">
                    <h3 className="flex gap-1 items-center text-[#134113] border border-[#134113] bg-[#13411315] px-2 rounded-2xl"><IoMdPricetags /><span className="font-semibold">Price: </span>${price}</h3>
                    <h3 className="flex gap-1 items-center text-[#6b5f1a] border border-[#6b5f1a] bg-[#6b5f1a15] px-2 rounded-2xl"><MdRateReview /><span className="font-semibold">Rating: </span>{rating} <FaStar /></h3>
                </div>
                <div className={`flex flex-col gap-4 md:flex-row justify-between md:items-center items-start font-medium`}>
                    <h3 className={`${customization ? 'text-[green] border-[green] bg-[#00800015]' : 'text-[red] bg-[#ff000015] border-[red] '} border px-2 flex gap-1 items-center rounded-2xl`}>{customization ? <TbEdit /> : <TbEditOff />}<span className="font-semibold">Customizable: </span>{customization ? "Yes" : "No"}</h3>
                    <h3 className="text-[#5648969d] font-medium border border-[#5648969d] bg-[#3f36660f] px-2 rounded-2xl flex gap-1 items-center"><PiTimerBold /><span className="font-semibold">Processing Time: </span>{processing_time}</h3>
                </div>
                <hr />
                <div className="flex flex-col md:flex-row gap-5 justify-between items-start md:items-center">
                    <h3 className="text-[#5648969d] bg-[#3f36660f] font-medium border border-[#5648969d] px-2 rounded-2xl flex gap-1 items-center"><GiStockpiles /><span className="font-semibold">Stock Status: </span>{stock_status}</h3>
                </div>
                <hr />
                <fieldset className="text-[#415860] border border-solid border-[#415860] rounded-lg pt-1 pb-3 px-3">
                    <legend className="text-[#5648969d] rounded-lg font-medium border border-[#5648969d] bg-[#3f36660f] px-2">Item Added by</legend>
                    <div className="flex flex-col md:flex-row justify-between">
                        <h3 className="flex gap-1 items-center "><FaUserEdit />{user_name}</h3>
                        <h3 className="flex gap-1 items-center "><MdEmail />{user_email}</h3>
                    </div>
                </fieldset>
            </div>
            <div className="flex-1">
                <figure className="p-6 border shadow-md shadow-[#34284d34] rounded-md space-y-6 md:space-y-8">
                        <img id="art-item" className="rounded-md" src={image} alt={item_name} />
                        <figcaption className="text-center font-semibold text-sm md:text-xl text-[midnightblue]">{item_name}</figcaption>
                </figure>
            </div>
        </section>
    );
};

Preview.propTypes = {
    previewItem: PropTypes.object,
}

export default Preview;