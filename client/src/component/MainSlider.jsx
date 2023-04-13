import React from 'react';
import style from "../css/mainSlider.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";

const MainSlider = () => {

    const mainSlides = [
        {
            imgSrc: require('../image/slider_image/slider_img_1.jpg'),
            title: '더뷰',
            description: '그 이상의 공간을 보여주다',
            tags: ['#친환경', '#감각적 디자인', '#우드'],
        },
        {
            imgSrc: require('../image/slider_image/slider_img_2.jpg'),
            title: '모던',
            description: '라이프 스타일이 담긴 공간',
            tags: ['#모던', '#친환경', '#심플컬러'],
        },
        {
            imgSrc: require('../image/slider_image/slider_img_3.jpg'),
            title: '더홈',
            description: '깔끔한 스타일링',
            tags: ['#프리미엄', '#친환경', '#깔끔한 디자인'],
        },
        {
            imgSrc: require('../image/slider_image/slider_img_4.jpg'),
            title: '이룸',
            description: '나만의 공간을 이루다',
            tags: ['#프리미엄', '#친환경', '#실크벽지'],
        },
    ];

    return (
        <section>
            <div className={style.main_slider_container}>
                <Swiper
                    modules={[Navigation, EffectFade, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    effect={"fade"}
                    speed={1100}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        type: 'bullets',
                        clickable: true,
                    }}
                    loop={true}
                >
                    {mainSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.imgSrc} alt="" />
                            <div className={style.text_box}>
                                <div>
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                    {slide.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default MainSlider;