import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "../css/swiper.css"
import AOS from "aos";
import "aos/dist/aos.css"
import style from "../css/main.module.css"
import sliderImg1 from "../image/slider_image/slider_img_1.jpg"
import sliderImg2 from "../image/slider_image/slider_img_2.jpg"
import sliderImg3 from "../image/slider_image/slider_img_3.jpg"
import sliderImg4 from "../image/slider_image/slider_img_4.jpg"
import aRoomInfoSliderImg1 from "../image/a_room/a_1.jpg"
import aRoomInfoSliderImg2 from "../image/a_room/a_2.jpg"
import aRoomInfoSliderImg3 from "../image/a_room/a_3.jpg"
import aRoomInfoSliderImg4 from "../image/a_room/a_4.jpg"
import bRoomInfoSliderImg1 from "../image/b_room/b_1.jpg"
import bRoomInfoSliderImg2 from "../image/b_room/b_2.jpg"
import bRoomInfoSliderImg3 from "../image/b_room/b_3.jpg"
import bRoomInfoSliderImg4 from "../image/b_room/b_4.jpg"
import cRoomInfoSliderImg1 from "../image/c_room/c_1.jpg"
import cRoomInfoSliderImg2 from "../image/c_room/c_2.jpg"
import cRoomInfoSliderImg3 from "../image/c_room/c_3.jpg"
import cRoomInfoSliderImg4 from "../image/c_room/c_4.jpg"
import furnitureInfoSliderImg1 from "../image/archives/archive_1.jpg"
import furnitureInfoSliderImg2 from "../image/archives/archive_2.jpg"
import furnitureInfoSliderImg3 from "../image/archives/archive_3.jpg"
import furnitureInfoSliderImg4 from "../image/archives/archive_4.jpg"
import articleInfoSliderImg1 from "../image/archives/archive_5.jpg"
import articleInfoSliderImg2 from "../image/archives/archive_6.jpg"
import articleInfoSliderImg3 from "../image/archives/archive_7.jpg"
import articleInfoSliderImg4 from "../image/archives/archive_8.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Map, MapMarker } from "react-kakao-maps";
SwiperCore.use([Autoplay, Pagination]);



const Main = (props) => {
    const mainSlides = [
        {
            imgSrc: sliderImg1,
            title: '더뷰',
            description: '그 이상의 공간을 보여주다',
            tags: ['#친환경', '#감각적 디자인', '#우드'],
        },
        {
            imgSrc: sliderImg2,
            title: '모던',
            description: '라이프 스타일이 담긴 공간',
            tags: ['#모던', '#친환경', '#심플컬러'],
        },
        {
            imgSrc: sliderImg3,
            title: '더홈',
            description: '깔끔한 스타일링',
            tags: ['#프리미엄', '#친환경', '#깔끔한 디자인'],
        },
        {
            imgSrc: sliderImg4,
            title: '이룸',
            description: '나만의 공간을 이루다',
            tags: ['#프리미엄', '#친환경', '#실크벽지'],
        },
    ];
    const RoomInfo = {
        aRoom: {
            imgSrc: [aRoomInfoSliderImg1, aRoomInfoSliderImg2, aRoomInfoSliderImg3, aRoomInfoSliderImg4]
        },
        bRoom: {
            imgSrc: [bRoomInfoSliderImg1, bRoomInfoSliderImg2, bRoomInfoSliderImg3, bRoomInfoSliderImg4]
        },
        cRoom: {
            imgSrc: [cRoomInfoSliderImg1, cRoomInfoSliderImg2, cRoomInfoSliderImg3, cRoomInfoSliderImg4]
        },
        furniture: {
            imgSrc: [furnitureInfoSliderImg1, furnitureInfoSliderImg2, furnitureInfoSliderImg3, furnitureInfoSliderImg4]
        },
        article: {
            imgSrc: [articleInfoSliderImg1, articleInfoSliderImg2, articleInfoSliderImg3, articleInfoSliderImg4]
        },

    };
    const withGoodhoodAbove = [
        "09WOMEN", "A_PIECE_OF_CAKE", "ABIB", "ABIB_2", "AGINGCCC", "A-IN", "AYA_MORIE", "BASE_MOMENT", "BEYD", "BEYOUND_CLOSET", "BINARY01", "BLUE_POPS", "BLUV", "DOUBLE_QUOTES", "E_Z_B_Z", "FOYER", "FOYER_2", "GROOMING_NOTE", "HEIDMODE", "HEYMARS", "HYOON", "IN_SILENCE", "IST_KUNST", "ISTKUNST", "JUSTFORME", "LE2", "LLUD", "LOY_ACOL", "MARYMOND", "MFNT", "MILKYSTORE", "MILLO"
    ]
    const withGoodhoodBelow = [
        "MILLO_2", "MILLO_3", "MINAV", "MINSUN", "MINSUN2", "MOLPIN", "MOONAN", "MOTIFAN", "MOZZIYU", "NAMEZ", "NAMING", "NAMING_2", "NAMING_3", "NEWBIE", "NEXT_WEEK", "NIGHT_FLOW", "NOIRROOM", "NONCODE", "NONCODE_2", "NONCODE_3", "PAGED", "PAVEMENT", "PAVEMENT_2", "PURPLEFLOWERS", "REVE", "SEA_WAVE", "SEARCH_410", "SHEZGOOD", "SHOP_VAIL", "SPLEMU", "THDAM_SEOUL", "VETIANO", "VIVASTUDIO", "YOURMAGAZINE"
    ]
    const sns = ["sns1", "sns2", "sns3", "sns4", "sns5", "sns6", "sns7", "sns8"];
    const card = [
        {
            card1 : {
                title : "사전 방문",
                img : "meetings",
                text : "굿후드 스튜디오를 사전 답사를 희망하시는 업체분께서는 자유롭게 방문 가능한 시간을 유선을 통해 말씀주시면 맞추도록 하겠습니다.",
            }
        },
        {
            card2 : {
                title : "변경 사항",
                img : "builder",
                text : "각 공간은 계절 혹은 상/하반기 시즌을 기준하여 일부 컨셉이 변경될 수 있으니 참고 바랍니다."
            }
        },
        {
            card3 : {
                title : "촬영 문의",
                img : "camera",
                text : "무드와 촬영 컨셉에 맞는 포토그래퍼, 헤어메이크업, 모델 섭외 등 도움을 드릴 수 있습니다."
            }
        },

    ]

    const StudioMenuChangeButton = (e) => {
        const h4_tag = e.currentTarget;
        const ul_tag = e.currentTarget.nextSibling; // ul
        const ul_array = document.querySelectorAll(".studio_info_contain > div > div > ul > li > ul")
        const h4_array = document.querySelectorAll(".studio_info_contain > div > div > ul > li > h4")
        for (let i = 0; i < ul_array.length; i++){ // 0~4
            ul_array[i].style.display = "none";
            h4_array[i].style.borderBottom = "transparent";
        }
        ul_tag.style.display = "block";
        h4_tag.style.borderBottom = "3px solid #602a19";
    };
    useEffect(()=>{
        AOS.init({
            duration: 1500,
        });
    })
    return (
        <main>
            <section>
                <div className={style.main_slider_container}>
                    <Swiper
                        modules={[Navigation, EffectFade, Pagination,Autoplay]}
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
                        {mainSlides.map((slide,index ) => (
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
            <section className={style.room_info}>
                <div className={`${style.studio_info_contain} studio_info_contain`}>
                    <h2>STUDIO</h2>
                    <div>
                        <div>
                            <h3>ROOM</h3>
                            <ul className={style.room_list}>
                                <li>
                                    <h4 onClick={(e) => StudioMenuChangeButton(e)}>A ROOM</h4>
                                    <ul>
                                        <li  className={style.slide_right} >
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
                                                {RoomInfo.aRoom.imgSrc.map((item, index ) => (
                                                    <SwiperSlide key={index}>
                                                        <img src={item} alt="img" />
                                                    </SwiperSlide>
                                                ))}
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                            </Swiper>
                                        </li>
                                        <li  className={style.slide_left} >
                                            <div>
                                                <h5>A ROOM</h5>
                                                <h6>웜톤의 카페트와 화이트 가구와 소품이 돋보이는 공간</h6>
                                                <p>창문을 통해 부드러운 자연광이 쏟아지는 공간에서 웜톤의 카페트와 화이트 가구, 소품들이 어우러져 고요하면서도 아늑한 분위기를 자아냅니다. 오전부터 오후까지 꾸준한 자연광의 조화는 공간 전체를 따뜻하게 물들이며, 마치 시간의 흐름을 느끼게 합니다.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 onClick={(e) => StudioMenuChangeButton(e)}>B ROOM</h4>
                                    <ul>
                                        <li  className={style.slide_right}>
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
                                                {RoomInfo.bRoom.imgSrc.map((item, index ) => (
                                                    <SwiperSlide key={index}>
                                                        <img src={item} alt="img" />
                                                    </SwiperSlide>
                                                ))}
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                            </Swiper>
                                        </li>
                                        <li  className={style.slide_left}>
                                            <div>
                                                <h5>B ROOM</h5>
                                                <h6>바닥을 적신 빛, 공기에 실린 나른한 향, 차분한 순간</h6>
                                                <p>화이트 페이트벽에는 색다른 모양의 사각 석고상들이 있고, 창문쪽으로 비추는 빛이 블라인드 사이를 통해 공간 전체를 따뜻하게 물들인다. 그 바닥에 내리쬐는 빛은 마치 어디론가 떠나버린 듯한 고요함과 아름다움을 선사한다. 이곳은 마치 다른 세계에 온 것처럼 느껴지는 공간입니다.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 onClick={(e) => StudioMenuChangeButton(e)}>C ROOM</h4>
                                    <ul>
                                        <li  className={style.slide_right}>
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
                                                {RoomInfo.cRoom.imgSrc.map((item, index ) => (
                                                    <SwiperSlide key={index}>
                                                        <img src={item} alt="img" />
                                                    </SwiperSlide>
                                                ))}
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                            </Swiper>
                                        </li>
                                        <li  className={style.slide_left}>
                                            <div>
                                                <h5>C ROOM</h5>
                                                <h6>자연의 소중함이 묻어나는 햇살 가득한 공간, 나무와 라탄의 따스한 조화</h6>
                                                <p>햇살이 녹아든 공간,
                                                    나무와 라탄이 어우러진 모습이 인상적인 곳.
                                                    마음을 담은 화분과 항아리가 아늑한 분위기를 자아내며,
                                                    회색 소파에서 휴식을 취할 때 느껴지는 평온함을 느낄 수 있습니다.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>ARCHIVE</h3>
                            <ul className={style.archive_list}>
                                <li>
                                    <h4 onClick={(e) => StudioMenuChangeButton(e)}>FURNITURE</h4>
                                    <ul >
                                        <li  className={style.slide_right}>
                                            <div>
                                                <h5>FURNITURE</h5>
                                                <h6>다채로운 감성, 섬세한 디자인의 가구 컬렉션</h6>
                                                <p>감성적인 취향을 담은 다양한 스타일의 가구로 더 아름다운 인테리어를 완성하세요. 편안하면서도 세련된 디자인으로 실용성을 갖추어 일상의 편안한 여유를 만들어드립니다. 자연의 멋과 인공의 조화가 잘 어우러진 제품으로, 당신의 감성과 취향을 만족시켜드릴 것입니다.</p>
                                            </div>
                                        </li>
                                        <li  className={style.slide_left}>
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
                                                {RoomInfo.furniture.imgSrc.map((item, index ) => (
                                                    <SwiperSlide key={index}>
                                                        <img src={item} alt="img" />
                                                    </SwiperSlide>
                                                ))}
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                            </Swiper>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 onClick={(e) => StudioMenuChangeButton(e)}>ARTICLE</h4>
                                    <ul>
                                        <li  className={style.slide_right}>
                                            <div>
                                                <h5>ARTICLE</h5>
                                                <h6>아름다움이 넘치는 공간을 완성하는 조각품</h6>
                                                <p>공간에 색다른 매력을 불어넣는, 취향과 감성을 담아낸 작은 예술작품, 개성적인 디자인과 기능성이 결합된 소중한 작품들, 인테리어를 완성하는 필수적인 아이템들입니다. 각기 다른 스타일과 느낌으로 공간을 아름답게 만들어줍니다.</p>
                                            </div>
                                        </li>
                                        <li  className={style.slide_left}>
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
                                                {RoomInfo.article.imgSrc.map((item, index ) => (
                                                    <SwiperSlide key={index}>
                                                        <img src={item} alt="img" />
                                                    </SwiperSlide>
                                                ))}
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                            </Swiper>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.with_ghd}>
                <div className={style.with_ghd_contain}>
                    <h2>with goodhood</h2>
                    <p>굿후드스튜디오와 함게한 업체의 아카이브를 공유합니다</p>
                    <div className={style.swiper_slide}>
                        <Swiper
                            modules={[ EffectFade,Autoplay]}
                            spaceBetween={40}
                            grabCursor={true}
                            freeMode={true}
                            slidesPerView={"auto"}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                        >
                            {withGoodhoodAbove.map((img,index)=> {
                                return (
                                    <SwiperSlide  key={index}>
                                        <img src={require(`../image/with_profile/${img}.jpg`)} alt="img"/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className={style.swiper_slide}>
                        <Swiper dir="rtl"
                                modules={[ EffectFade,Autoplay]}
                                spaceBetween={40}
                                grabCursor={true}
                                freeMode={true}
                                slidesPerView={"auto"}
                                speed={5000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                        >
                            {withGoodhoodBelow.map((img,index)=> {
                                return (
                                    <SwiperSlide  key={index}>
                                        <img src={require(`../image/with_profile/${img}.jpg`)} alt="img"/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className={style.sns}>
                <div className={style.sns_contain}>
                    <h2>SNS</h2>
                    <p>goodhood의 더 많은 소식을 SNS로 만나보세요</p>
                    <div><a href="https://www.instagram.com/goodhoodstudio/">goodhoodstudio instargram 바로가기</a></div>
                    <ul data-aos="zoom-in">
                        {sns.map((item, index)=>{
                            return <li key={index}><Link to=""><img src={require(`../image/sns/${item}.jpg`)} alt="img"/></Link></li>
                        })
                        }
                    </ul>
                </div>
            </section>
            <section className={style.add_info}>
                <div className={style.add_info_contain}>
                    <h2>ADDITIONAL INFORMATION</h2>
                    <p>
                        촬영에 필요한 소품 및 촬영 장비 등을 무료로 지원합니다.<br/>
                        촬영 당일 혹은 촬영 전일 시간 제약없이 편하게 촬영 셋팅을 하실 수 있습니다.<br/>
                        광고 영상 프로덕션이 직접 운영하는 스튜디오로 촬영 컨디션에 모두 필요한 장비, 소품을 제공합니다.<br/>
                        사전에 필요하신 소품, 장비, 가구가 있으실 경우 미리 말씀해 주시면 최대한 미리 준비하여 제공할 수 있도록 하겠습니다.
                    </p>
                    <div className={style.card_contain} data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1500">
                        {card.map((item, index) => {
                            const { img, title, text } = Object.values(item)[0];
                            return (
                                <div className={style.card} key={index}>
                                    <img src={require(`../image/card/${img}.gif`)} alt="img" />
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className={style.location}>
                <div className={style.location_contain}>
                    <h2>LOCATION</h2>
                    <Map
                        center={{ lat: 33.5563, lng: 126.79581 }}
                        style={{ width: "100%", height: "360px" }}
                    >
                        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                            <div style={{color:"#000"}}>goodhood</div>
                        </MapMarker>
                    </Map>
                </div>
            </section>
        </main>
    )
}
export default Main;