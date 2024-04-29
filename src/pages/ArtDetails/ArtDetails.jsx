import { useLoaderData } from "react-router-dom";
import Button from "../../components/Button/Button";

const ArtDetails = () => {
    const art = useLoaderData();

    const { image, item_name, subcategory_name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name } = art;

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 flex gap-6">
            <div className="flex-1 flex flex-col gap-5">
                <h3 className="">{item_name}</h3>
                <h3 className="">{subcategory_name}</h3>
                <div className="">
                    <span className="">Description: </span>
                    <p className="">{short_description}</p>
                </div>
                <div className="flex justify-between">
                    <h3 className=""><span className="">Customizable: </span>{customization ? "Yes" : "No"}</h3>
                    <h3 className=""><span className="">Processing Time: </span>{processing_time}</h3>
                </div>
                <div className="flex justify-between">
                    <h3 className=""><span className="">Rating: </span>${price}</h3>
                    <h3 className=""><span className="">Price: </span>{rating}</h3>
                </div>
                <div>
                    <h3></h3>
                    <h3>{user_name}</h3>
                    <h3>{user_email}</h3>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <figure><img src={image} alt={item_name} /></figure>
                <div className="flex justify-between">
                    <h3><span>Stock Status: </span>{stock_status}</h3>
                    <Button color={'#272c50'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border !rounded-3xl font-bold text-xl !px-4'} buttonText={"Order Now"}></Button>
                </div>
            </div>
        </section>
    );
};

export default ArtDetails;