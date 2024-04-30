import { useLoaderData } from "react-router-dom";
import Button from "../../components/Button/Button";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ArtDetails = () => {
    const art = useLoaderData();

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
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 flex flex-col-reverse lg:flex-row gap-6">

            <Helmet>
                <title>{item_name} - Hephaestus Creations</title>
            </Helmet>

            <div className="flex-1 flex flex-col gap-5 mt-4 px-6 lg:px-0">
                <h3 className="text-xl md:text-3xl font-bold">{item_name}</h3>
                <h3 className=""><span className="font-semibold">Subcategory: </span>{subcategory_name}</h3>
                <div className="">
                    <span className="font-semibold">Item Description: </span>
                    <p className="">{short_description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className=""><span className="font-semibold">Price: </span>${price}</h3>
                    <h3 className=""><span className="font-semibold">Rating: </span>{rating}</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center items-start">
                    <h3 className=""><span className="font-semibold">Customizable: </span>{customization ? "Yes" : "No"}</h3>
                    <h3 className=""><span className="font-semibold">Processing Time: </span>{processing_time}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h3><span>Stock Status: </span>{stock_status}</h3>
                    <Button onClick={showSuccess} color={'#272c50'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border !rounded-3xl font-bold text-xl !px-4'} buttonText={"Order Now"}></Button>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <h3 className="font-semibold">Item Added by:</h3>
                    <div className="md:text-right">
                        <h3 className="">{user_name}</h3>
                        <h3 className="">{user_email}</h3>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <figure className="p-6 border">
                    <img className="hover:scale-105 transition-all opacity-95 duration-500 hover:opacity-100" src={image} alt={item_name} />
                </figure>
            </div>
        </section>
    );
};

export default ArtDetails;