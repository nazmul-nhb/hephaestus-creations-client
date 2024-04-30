import Arts from "../../components/Arts/Arts";
import Slider from "../../components/Slider/Slider";
import loader from '../../assets/loader.svg';
import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

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
                <title>Home - Hephaestus Creations</title>
            </Helmet>

            {/* Banner */}
            <div
                // data-aos="flip-right"
                // data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                // data-aos-duration="3000"
                className="gap-4 my-2 md:my-4 flex flex-col xl:flex-row items-center justify-center xl:justify-between p-4 md:px-8 rounded-lg shadow-xl bg-gradient-to-r from-[#77948157] to-[#4c00ffa3]">
                <Slider className="" arts={arts}></Slider>
                <div className="flex-1 flex flex-col items-center xl:items-start gap-5 text-center xl:text-left">
                    <h3 className="text-2xl md:text-5xl font-bold text-white md:leading-snug">Explore the Art of Crafting with Us</h3>
                    <p className="text-white text-base md:text-lg">Embark on a journey of creativity and imagination with our exquisite collection of artisanal crafts. Explore our curated selection and uncover the beauty that lies within every stroke and detail. Let your home become a canvas for self-expression and artistry. Welcome to a world where creativity knows no bounds.</p>
                    <Link to={'/all-arts'}><Button color={'#272c50'} buttonText={'Explore All Arts & Crafts'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border !rounded-3xl font-bold text-2xl !px-4'}></Button></Link>
                </div>
            </div>
            {/* Our Arts & Crafts */}
            <Arts arts={arts}></Arts>

            {/* Categories */}
            <Categories categories={categories}></Categories>
        </section>
    );
};

export default Home;