import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, EffectCube, Pagination } from 'swiper/modules';

const Slider = ({ arts }) => {
    const shuffledArts = [...arts].sort(() => Math.random() - 0.5);
    const randomArts = shuffledArts.slice(0, 4);

    const pagination = { clickable: true, };

    return (
        <div className='my-2 md:my-8 w-full lg:w-4/5 xl:w-1/2'>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'orange',
                    '--swiper-pagination-color': 'orange',
                }}
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
                pagination={pagination}
                navigation={true}
                modules={[Autoplay, Navigation, EffectCube, Pagination]}
                className="mySwiper"
            >
                {
                    randomArts.map(art =>
                        <SwiperSlide key={art._id}>
                            <img src={art.image} alt={art.item_name} />
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