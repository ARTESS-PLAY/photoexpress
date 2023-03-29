import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import cl from './index.module.scss';

const sliders = [
    '/assets/slider/1.png',
    '/assets/slider/2.png',
    '/assets/slider/1.png',
    '/assets/slider/2.png',
    '/assets/slider/1.png',
];

const Carousel = () => {
    return (
        <div className={cl.carousel}>
            <div className={cl.carousel__content}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.' + cl.pagination,
                        type: 'bullets',
                        bulletClass: cl.pagination_el,
                        bulletActiveClass: cl['pagination_el--active'],
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {sliders.map((slide) => (
                        <SwiperSlide className={cl.slide}>
                            <div className={cl.slide__img}>
                                <img src={slide} alt="product" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cl.pagination}></div>
        </div>
    );
};

export default Carousel;
