// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, EffectCube, Pagination } from 'swiper/modules';

const Slider = () => {

    const pagination = { clickable: true, };

    return (
        <div className='mx-auto'>
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
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;