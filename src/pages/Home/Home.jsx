import Arts from "../../components/Arts/Arts";
import Slider from "../../components/Slider/Slider";
import loader from '../../assets/loader.svg';
import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    const [arts, setArts] = useState([]);
    const [artsLoading, setArtsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setArtsLoading(true);
        fetch('https://hephaestus-creations-server.vercel.app/arts')
            .then(res => res.json())
            .then(data => {
                setArts(data);
                setArtsLoading(false);
            })
    }, [])

    useEffect(() => {
        setArtsLoading(true);
        fetch('https://hephaestus-creations-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setArtsLoading(false);
            })
    }, [])
    console.log(categories);

    if (artsLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <img src={loader} alt="loader" />
            </div>
        )
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            {/* Banner */}
            <div className="gap-4 my-2 md:my-4 flex flex-col-reverse xl:flex-row items-center justify-between px-2 md:px-8 py-2 rounded-lg shadow-xl bg-gradient-to-r from-[#77948157] to-[#4c00ffa3]">
                <div className="flex-1">
                    This is Home Banner
                </div>
                <Slider className="flex-1" arts={arts}></Slider>
            </div>
            {/* Our Arts & Crafts */}
            <Arts arts={arts}></Arts>

            {/* Categories */}
            <Categories categories={categories}></Categories>
        </section>
    );
};

export default Home;