import React from 'react';
import style from "../css/withGoodHood.module.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper";

const WithGoodHood = () => {
    const withGoodhoodAbove = [
        "09WOMEN","A_PIECE_OF_CAKE", "ABIB", "ABIB_2", "AGINGCCC", "A-IN", "AYA_MORIE", "BASE_MOMENT", "BEYD", "BEYOUND_CLOSET", "BINARY01", "BLUE_POPS", "BLUV", "DOUBLE_QUOTES", "E_Z_B_Z", "FOYER", "FOYER_2", "GROOMING_NOTE", "HEIDMODE", "HEYMARS", "HYOON", "IN_SILENCE", "IST_KUNST", "ISTKUNST", "JUSTFORME", "LE2", "LLUD", "LOY_ACOL", "MARYMOND", "MFNT", "MILKYSTORE", "MILLO"
    ]
    const withGoodhoodBelow = [
        "MILLO_2", "MILLO_3", "MINAV", "MINSUN", "MINSUN2", "MOLPIN", "MOONAN", "MOTIFAN", "MOZZIYU", "NAMEZ", "NAMING", "NAMING_2", "NAMING_3", "NEWBIE", "NEXT_WEEK", "NIGHT_FLOW", "NOIRROOM", "NONCODE", "NONCODE_2", "NONCODE_3", "PAGED", "PAVEMENT", "PAVEMENT_2", "PURPLEFLOWERS", "REVE", "SEA_WAVE", "SEARCH_410", "SHEZGOOD", "SHOP_VAIL", "SPLEMU", "THDAM_SEOUL", "VETIANO", "VIVASTUDIO", "YOURMAGAZINE"
    ]
    return (
        <section className={style.with_ghd}>
            <div className={style.with_ghd_contain}>
                <h2>with goodhood</h2>
                <p>굿후드스튜디오와 함께한 업체의 아카이브를 공유합니다.</p>
                <div className={style.swiper_slide}>
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        spaceBetween={40}
                        grabCursor={true}
                        freeMode={true}
                        slidesPerView={'auto'}
                        speed={5000}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        loop={true}>
                        {withGoodhoodAbove.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={require(`../image/with_profile/${img}.jpg`)} alt="img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={style.swiper_slide}>
                    <Swiper
                        dir="rtl"
                        modules={[EffectFade, Autoplay]}
                        spaceBetween={40}
                        grabCursor={true}
                        freeMode={true}
                        slidesPerView={'auto'}
                        speed={5000}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        loop={true}>
                        {withGoodhoodBelow.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={require(`../image/with_profile/${img}.jpg`)} alt="img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WithGoodHood;