import Arts from "../../components/Arts/Arts";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            This is Home
            <Slider></Slider>
            <Arts></Arts>
        </section>
    );
};

export default Home;