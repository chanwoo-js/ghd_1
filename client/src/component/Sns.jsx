import React from "react";
import style from "../css/sns.module.css";
import {Link} from "react-router-dom";

const Sns = () => {
    const sns = ["sns1", "sns2", "sns3", "sns4", "sns5", "sns6", "sns7", "sns8"];
    return (
        <section>
            <div className={style.sns_contain}>
                <h2>SNS</h2>
                <p>goodhood의 더 많은 소식을 SNS로 만나보세요</p>
                <div><a href="https://www.instagram.com/goodhoodstudio/">goodhoodstudio instargram 바로가기</a></div>
                <ul data-aos="zoom-in">
                    {sns.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to="https://www.instagram.com/goodhoodstudio/">
                                    <img src={require(`../image/sns/${item}.jpg`)} alt="img"/>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Sns;
