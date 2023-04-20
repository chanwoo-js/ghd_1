import React from 'react';
import style from "../css/addInfo.module.css";

const AddInfo = () => {
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
    return (
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
    );
};

export default AddInfo;