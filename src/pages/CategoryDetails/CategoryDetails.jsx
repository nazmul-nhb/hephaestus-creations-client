import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Art from "../../components/Art/Art";
import loader from '../../assets/loader.svg';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

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

    const [cName] = useTypewriter({
        words: [`${category.category_name}`],
        loop: true,
    })

    if (artsLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <img src={loader} alt="loader" />
            </div>
        )
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <Helmet>
                <title>
                    {category.category_name} - Hephaestus Creations
                </title>
            </Helmet>
            <div className="flex flex-col gap-4 items-center mb-8">
                <h3 className="text-xl md:text-3xl font-semibold"><span className="font-bold">Category: </span>{cName} <Cursor cursorColor='red' /></h3>
                <h3 className="text-lg md:text-2xl font-semibold">Total Items: {arts.length}</h3>
                <p className="w-[88%] text-center text-[midnightblue]">{category.description}</p>
            </div>
            <hr />
            {
                arts.length < 1 && <div
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="h-[67vh] flex items-center justify-center">
                    <h4 className="border shadow-lg shadow-red-800 border-red-600 p-6 text-lg md:text-3xl font-bold text-red-600 bg-red-100">No Items Found in this Category! </h4>
                </div>
            }
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