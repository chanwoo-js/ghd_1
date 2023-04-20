import React, {useEffect, useState} from 'react';
import style from "../css/mainRoomInfo.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import 'swiper/swiper-bundle.min.css';
import "../css/swiper.css"
import AOS from "aos";
import "aos/dist/aos.css"

const MainRoomInfo = () => {
    const [room,setRoom]=useState("a")
    const [decoration,setDecoration]=useState("")
    const StudioMenuChangeButton = (room,decoration) => {
        setRoom(room)
        setDecoration(decoration)
    };
    useEffect(()=>{
        AOS.init({
            duration: 1500,
        });
    })
    const RoomInfo = {
        aRoom: {
            title : "A ROOM",
            subTitle : "웜톤의 카페트와 화이트 가구와 소품이 돋보이는 공간",
            explanation  : "창문을 통해 부드러운 자연광이 쏟아지는 공간에서 웜톤의 카페트와 화이트 가구, 소품들이 어우러져 고요하면서도 아늑한 분위기를 자아냅니다. 오전부터 오후까지 꾸준한 자연광의 조화는 공간 전체를 따뜻하게 물들이며, 마치 시간의 흐름을 느끼게 합니다.",
            imgCount : [ 1, 2, 3, 4],
        },
        bRoom: {
            title : "B ROOM",
            subTitle : "바닥을 적신 빛, 공기에 실린 나른한 향, 차분한 순간",
            explanation  : "화이트 페이트벽에는 색다른 모양의 사각 석고상들이 있고, 창문쪽으로 비추는 빛이 블라인드 사이를 통해 공간 전체를 따뜻하게 물들인다. 그 바닥에 내리쬐는 빛은 마치 어디론가 떠나버린 듯한 고요함과 아름다움을 선사한다. 이곳은 마치 다른 세계에 온 것처럼 느껴지는 공간입니다.",
            imgCount : [ 1, 2, 3, 4],
        },
        cRoom: {
            title : "C ROOM",
            subTitle : "자연의 소중함이 묻어나는 햇살 가득한 공간, 나무와 라탄의 따스한 조화",
            explanation  : "햇살이 녹아든 공간,나무와 라탄이 어우러진 모습이 인상적인 곳. 마음을 담은 화분과 항아리가 아늑한 분위기를 자아내며, 회색 소파에서 휴식을 취할 때 느껴지는 평온함을 느낄 수 있습니다.",
            imgCount : [ 1, 2, 3, 4],
        },
        furniture: {
            title : "FURNITURE",
            subTitle : "다채로운 감성, 섬세한 디자인의 가구 컬렉션",
            explanation : "감성적인 취향을 담은 다양한 스타일의 가구로 더 아름다운 인테리어를 완성하세요. 편안하면서도 세련된 디자인으로 실용성을 갖추어 일상의 편안한 여유를 만들어드립니다. 자연의 멋과 인공의 조화가 잘 어우러진 제품으로, 당신의 감성과 취향을 만족시켜드릴 것입니다.",
            imgCount: [1,2,3,4]
        },
        article: {
            title : "ARTICLE",
            subTitle : "아름다움이 넘치는 공간을 완성하는 조각품",
            explanation : "공간에 색다른 매력을 불어넣는, 취향과 감성을 담아낸 작은 예술작품, 개성적인 디자인과 기능성이 결합된 소중한 작품들, 인테리어를 완성하는 필수적인 아이템들입니다. 각기 다른 스타일과 느낌으로 공간을 아름답게 만들어줍니다.",
            imgCount: [1,2,3,4]
        },

    };
    return (
        <section>
            <div className={style.room_info_contain}>
                <h2>STUDIO</h2>
                <div>
                    {/*room*/}
                    <div className={style.room_contain}>
                        <h3>ROOM</h3>
                        <ul className={style.room_list}>
                            <li>
                                <h4 className={room === 'a' ? style.active : ''} onClick={(e) => StudioMenuChangeButton("a","")}>A ROOM</h4>
                            </li>
                            <li>
                                <h4 className={room === 'b' ? style.active : ''} onClick={(e) => StudioMenuChangeButton("b","")}>B ROOM</h4>
                            </li>
                            <li>
                                <h4 className={room === 'c' ? style.active : ''} onClick={(e) => StudioMenuChangeButton("c","")}>C ROOM</h4>
                            </li>
                        </ul>
                        {room &&
                            <ul className={style[`${room}_room_list_info`]}>
                                <li data-aos="fade-right"
                                    data-aos-offset="400"
                                    data-aos-easing="ease-in-sine"
                                    className={style[`${room}_room_list_info_left`]}>
                                    <Swiper
                                        modules={[Navigation, EffectFade, Pagination,Autoplay]}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        effect={"slide"}
                                        speed={1400}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                    >
                                        {RoomInfo[`${room}Room`].imgCount.map((item, index ) => (
                                            <SwiperSlide key={index}>
                                                <img src={require(`../image/${room}_room/${room}_${item}.jpg`)} alt="img"/>
                                            </SwiperSlide>
                                        ))}
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-button-next"></div>
                                    </Swiper>
                                </li>
                                <li data-aos="fade-left"
                                    data-aos-offset="400"
                                    data-aos-easing="ease-in-sine"
                                    className={style[`${room}_room_list_info_right`]} >
                                    <h5>{RoomInfo[`${room}Room`].title}</h5>
                                    <h6>{RoomInfo[`${room}Room`].subTitle}</h6>
                                    <p>{RoomInfo[`${room}Room`].explanation}</p>
                                </li>
                            </ul>
                        }
                    </div>
                    {/*archives*/}
                    <div className={style.decoration_contain}>
                        <h3>DECORATION</h3>
                        <ul className={style.decoration_list}>
                            <li>
                                <h4 className={decoration === "furniture" ? style.active : ''}  onClick={(e) => StudioMenuChangeButton("","furniture")}>FURNITURE</h4>
                            </li>
                            <li>
                                <h4 className={decoration === "article" ? style.active : ''} onClick={(e) => StudioMenuChangeButton("","article")}>ARTICLE</h4>
                            </li>
                        </ul>
                        {decoration &&(
                            <ul className={style[`${decoration}_decoration_list_info`]}>
                                <li  data-aos="fade-right"
                                     data-aos-offset="400"
                                     data-aos-easing="ease-in-sine"
                                     className={style[`${decoration}_decoration_list_info_left`]}>
                                    <h5>{RoomInfo[`${decoration}`].title}</h5>
                                    <h6>{RoomInfo[`${decoration}`].subTitle}</h6>
                                    <p>{RoomInfo[`${decoration}`].explanation}</p>
                                </li>
                                <li data-aos="fade-left"
                                    data-aos-offset="400"
                                    data-aos-easing="ease-in-sine"
                                    className={style[`${decoration}_decoration_list_info_right`]}>
                                    <Swiper
                                        modules={[Navigation, EffectFade, Pagination,Autoplay]}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        effect={"slide"}
                                        speed={1400}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                    >
                                        {RoomInfo[`${decoration}`].imgCount.map((item, index ) => (
                                            <SwiperSlide key={index}>
                                                <img src={require(`../image/${decoration}/${decoration}_${item}.jpg`)} alt="img"/>
                                            </SwiperSlide>
                                        ))}
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-button-next"></div>
                                    </Swiper>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainRoomInfo;