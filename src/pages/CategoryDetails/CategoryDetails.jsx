import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Art from "../../components/Art/Art";
import loader from '../../assets/loader.svg';

const CategoryDetails = () => {
    const [arts, setArts] = useState([])
    const category = useLoaderData();
    const [artsLoading, setArtsLoading] = useState(false);

    // get bulk art data by category name
    useEffect(() => {
        setArtsLoading(true);
        fetch(`https://hephaestus-creations-server.vercel.app/arts/category/${category.category_name}`)
            .then(res => res.json())
            .then(data => {
                setArts(data)
                setArtsLoading(false);
            })
    }, [category])

    if (artsLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <img src={loader} alt="loader" />
            </div>
        )
    }
    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <div>
                <h3><span>Category:</span> {category.category_name}</h3>
                <h3>Total Items ({arts.length})</h3>
                <p>{category.description}</p>
            </div>
            <hr />
            <div className="grid md:grid-cols-2 gap-6">
                {
                    arts?.map(art => <Art
                        key={art._id}
                        art={art}
                        fromCategory={true}
                    ></Art>)
                }
            </div>
        </section>
    );
};

export default CategoryDetails;