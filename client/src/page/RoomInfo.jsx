import React, {useState} from 'react';
import style from "../css/roomInfo.module.css";

const RoomInfo = (props) => {
    const [selectRooom,setSelectRoom] = useState("A")

    const selectRoom = (value) => {
        setSelectRoom(value);
    }
    const aRoomImages = [
        'a_2.jpg',
        'a_3.jpg',
        'a_4.jpg',
        'a_5.jpg',
        'a_6.jpg',
        'a_7.jpg',
        'a_8.jpg',
        'a_9.jpg',
        'a_10.jpg',
        'a_11.jpg',
        'a_12.jpg',
        'a_13.jpg',
        'a_14.jpg',
        'a_15.jpg',
        'a_16.jpg',
        'a_17.jpg',
    ];
    const bRoomImages = [
        'b_2.jpg',
        'b_3.jpg',
        'b_4.jpg',
        'b_5.jpg',
        'b_6.jpg',
        'b_7.jpg',
        'b_8.jpg',
        'b_9.jpg',
        'b_10.jpg',
        'b_11.jpg',
        'b_12.jpg',
        'b_13.jpg',
        'b_14.jpg',
        'b_15.jpg',
        'b_16.jpg',
        'b_17.jpg',
        'b_18.jpg',
        'b_19.jpg',
        'b_20.jpg',
        'b_21.jpg',
    ];
    const cRoomImages = [
        'c_2.jpg',
        'c_3.jpg',
        'c_4.jpg',
        'c_5.jpg',
        'c_6.jpg',
        'c_7.jpg',
        'c_8.jpg',
        'c_9.jpg',
        'c_10.jpg',
        'c_11.jpg',
        'c_12.jpg',
        'c_13.jpg',
        'c_14.jpg',
        'c_15.jpg',
    ];
    const archiveImages = [
        'archive_1.jpg',
        'archive_2.jpg',
        'archive_3.jpg',
        'archive_4.jpg',
        'archive_5.jpg',
        'archive_6.jpg',
        'archive_7.jpg',
        'archive_8.jpg',
        'archive_9.jpg',
        'archive_10.jpg',
        'archive_11.jpg',
        'archive_12.jpg',
        'archive_13.jpg',
        'archive_14.jpg',
        'archive_15.jpg',
        'archive_16.jpg',
        'archive_17.jpg',
        'archive_18.jpg',
        'archive_19.jpg',
        'archive_20.jpg',
        'archive_21.jpg',
        'archive_22.jpg',
        'archive_23.jpg',
        'archive_24.jpg',
        'archive_25.jpg',
        'archive_26.jpg',
        'archive_27.jpg',
        'archive_28.jpg',
        'archive_29.jpg',
        'archive_30.jpg',
        'archive_31.jpg',
        'archive_32.jpg',
        'archive_33.jpg',
        'archive_34.jpg',
        'archive_35.jpg',
        'archive_36.jpg',
        'archive_37.jpg',
        'archive_38.jpg',
        'archive_39.jpg',
        'archive_40.jpg',
        'archive_41.jpg',
        'archive_42.jpg',
        'archive_43.jpg',
        'archive_44.jpg',
        'archive_45.jpg',
        'archive_46.jpg',
        'archive_47.jpg',
        'archive_48.jpg',
    ];
    return (
        <section>
            <div className={style.room_info_contain}>
                <ul>
                    <li onClick={() => selectRoom("A")}>A ROOM</li>
                    <li onClick={() => selectRoom("B")}>B ROOM</li>
                    <li onClick={() => selectRoom("C")}>C ROOM</li>
                    <li onClick={() => selectRoom("ARCHIVE")}>ARCHIVE</li>
                </ul>
                {selectRooom === 'A' &&
                    <div> {/* A Room info */}
                        <img src={require(`../image/a_room/a_1.jpg`)} alt="img"/>
                        <p>"A ROOM"은 따뜻한 톤의 실내 느낌의 공간입니다<br/>
                            바닥은 베이지색으로 마감했으며 벽면은 웨인스코팅으로 구성되어 있습니다.<br/>
                            정남향의 창을 통해 빛이 들어오는 공간입니다.<br/>
                            자연광만으로도 촬영이 가능한 공간입니다.<br/>
                            A ROOM만의 독립된 분장실이 있습니다.<br/>
                        </p>
                        <h3>평면도</h3>
                        <img src={require(`../image/room_info/map.jpg`)} alt="img"/>
                        <h3>A ROOM 공간 사이즈</h3>
                        <p>메인공간 : 25py<br/>
                            높이 : 4000mm<br/>
                            가로길이 : 2300mm<br/>
                            세로길이 : 10000mm<br/>
                            메이크업실 : 5py<br/>
                            가로길이 : 2300mm<br/>
                            세로길이 : 10000mm</p>
                        <h4>추가 이미지</h4>
                        {
                            aRoomImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../image/a_room/${image}`)}
                                    alt={`A Room img ${index + 1}`}
                                />
                            ))
                        }
                    </div>}
                {selectRooom === 'B' &&
                    <div>
                        <img src={require(`../image/b_room/b_1.jpg`)} alt="img"/>
                        <p>
                            "B ROOM"은 빈티지한 느낌과 모던한 느낌의 촬영을 하실 수 있습니다.<br/>
                            정남향의 창가 쪽으로는 화이트 벽돌의 벽과 빈티지 느낌의 에폭시 바닥이 있고,<br/>
                            같은 빈지티 바닥의 빈티지 화이트 벽이 있습니다.<br/>
                            창가의 반대편 쪽으로는 깨끗한 화이트 벽과 빈티지 화이트벽으로 되어있으며,<br/>
                            바닥은 빈티지 화이트 나무 바닥으로 구성되어 있습니다.<br/>
                            4.5m 높이의 천정은 화이트 색상으로 마감하여 조명을 활용하여 반사되는 부드러운 빛의 느낌을 연출 하실 수 있습니다.<br/>
                            다양한 소품들을 활용하여 촬영 하실 수 있는 공간으로 패션촬영부터<br/>
                            뷰티이미지, 뮤직비디오, 일반 광고 등등, 폭 넓게 사용되고 있는 공간입니다.<br/>
                            또한 창 밖에 넓은 외부는 조명을 자유롭게 컨트롤 하실 수 있습니다.
                        </p>
                        <h3>평면도</h3>
                        <img src={require(`../image/room_info/map.jpg`)} alt="img"/>
                        <h3>B ROOM 공간 사이즈</h3>
                        <p>메인공간 : 25py<br/>
                            높이 : 4000mm<br/>
                            가로길이 : 2300mm<br/>
                            세로길이 : 10000mm<br/>
                            메이크업실 : 5py<br/>
                            가로길이 : 2300mm<br/>
                            세로길이 : 10000mm
                        </p>
                        <h4>추가 이미지</h4>
                        {
                            bRoomImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../image/b_room/${image}`)}
                                    alt={`B Room img ${index + 1}`}
                                />
                            ))
                        }
                    </div>
                }
                {selectRooom === 'C' &&
                    <div>
                        <img src={require(`../image/c_room/c_1.jpg`)} alt="img"/>
                        <p>"C ROOM"의 장점은 자유롭게 커스터마이징을 할 수 있다는 것입니다.<br/>
                            벽과 바닥을 제외한 구조물들은 바퀴를 달아서 쉽게 이동할 수 있습니다.<br/>
                            이 외에도 다양한 소품과 가구들을 이용하셔서 다양한 연출을 할 수 있습니다.<br/>
                            또다른 강점은 자유로운 카메라 워크를 가능하게 하는 넓은 공간입니다.<br/>
                            광고와 뮤직비디오 등 대형 촬영에서 제품촬영까지 폭 넓게 사용되고 있습니다.<br/>
                            또한 컬러 공간의 반대편의 공간은 자연광을 이용하셔서 촬영도 가능합니다.
                        </p>
                        <h3>평면도</h3>
                        <img src={require(`../image/room_info/map.jpg`)} alt="img"/>
                        <h4>C ROOM 공간 사이즈</h4>
                        <p>메인공간 : 30py<br/>
                            높이 : 4500mm<br/>
                            가로길이 : 6350mm<br/>
                            세로길이 : 14100mm<br/>
                        </p>
                        <h4>추가 이미지</h4>
                        {
                            cRoomImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../image/c_room/${image}`)}
                                    alt={`C Room img ${index + 1}`}
                                />
                            ))
                        }
                    </div>
                }
                {selectRooom === 'ARCHIVE' &&
                    <div className={style.archive_contain}>
                        {
                            archiveImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../image/archives/${image}`)}
                                    alt={`archive img ${index + 1}`}
                                />
                            ))
                        }
                    </div>
                }
            </div>

        </section>
    );
};

export default RoomInfo;