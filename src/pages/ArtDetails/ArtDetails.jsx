import { useLoaderData } from "react-router-dom";

const ArtDetails = () => {
    const art = useLoaderData();

    const { _id, image, item_name, subcategory_name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name } = art;

    return (
        <div>
            Hello: {item_name}
            
        </div>
    );
};

export default ArtDetails;