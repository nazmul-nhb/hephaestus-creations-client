import { useLoaderData } from "react-router-dom";

const ArtDetails = () => {
    const art = useLoaderData();

    const { _id, image, item_name, subcategory_name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name } = art;

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            Hello: {item_name}
            
        </section>
    );
};

export default ArtDetails;