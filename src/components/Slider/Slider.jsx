import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCube } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = ({ arts }) => {
    const shuffledArts = [...arts].sort(() => Math.random() - 0.5);
    const randomArts = shuffledArts.slice(0, 4);

    return (
        <div className='my-8 w-full lg:w-4/5 xl:w-1/2'>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 0,
                    shadowScale: 0,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCube]}
                className="mySwiper"
            >
                {
                    randomArts.map(art =>
                        <SwiperSlide key={art._id}>
                            <div className="flex relative">
                                <img className='w-full xl:w-[480px] rounded-lg lg:rounded-none' src={art.image} alt={art.item_name} />
                                <div className="bg-gradient-to-r from-[#ffffff90] to-[#ffffff00] absolute top-0 w-4/5 py-1 px-2">
                                    <Link className="bg-transparent font-bold text-xl" to={`/details/${art._id}`}>View Details</Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

Slider.propTypes = {
    arts: PropTypes.array,
}

export default Slider;