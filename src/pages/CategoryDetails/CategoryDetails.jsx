import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
    const category = useLoaderData();
    
    useEffect(() => {
        
    },[])
    return (
        <section>
            Hello: {category.category_name}
        </section>
    );
};

export default CategoryDetails;