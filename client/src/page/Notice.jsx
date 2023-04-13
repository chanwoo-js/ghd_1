import React, {useEffect, useState} from 'react';
import style from "../css/notice.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Notice = ({login,setLogin}) => {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 카운터
    const [listCount, setListCount] = useState(10); // 보여줄 글 갯수
    const [data, setData] = useState(); // 글 목록 가져와서 저장
    const [search, setSearch] = useState(''); // 검색어 저장
    const [searchBy, setSearchBy] = useState('title'); // ~로 검색할것이다.
    const navigate = useNavigate();
    // 마운트시 db 글 가져오기
    useEffect(()=>{
        const handleNotice = async () => {
            try {
                // http://localhost:8000/notice로 들어오면 공지사항 목록을 보여줍니다.
                const res = await axios.get('https://ghd-1.herokuapp.com/api/notice');
                const sortedData = res.data
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .map((item) => {
                        const date = new Date(item.created_at); // UTC를 로컬 시간대로 변환
                        item.created_at = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                        return item;
                    });
                setData(sortedData);
            } catch (error) {
                console.error(error);
            }
        };
        handleNotice();
    },[])
    // 글 갯수 선택
    const handleListCount = (number) => {
        setListCount(number);
        setCurrentPage(1);
    };
    // 현재 페이지 추적
    const handlePageChange = (number) => {
        setCurrentPage(number);
    };
    // 검색어 저장
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    // (title, author) 로 검색합니다.
    const handleSearchByChange = (e) => {
        setSearchBy(e.target.value);
    };

    // 시작 인덱스 (indexOfFirstNotice): (현재 페이지 번호 - 1) * 한 페이지에서 보여줄 글의 수
    const indexOfFirstNotice = (currentPage - 1) * listCount

    // 끝 인덱스 (indexOfLastNotice): 시작 인덱스 + 한 페이지에서 보여줄 글의 수 - 1
    const indexOfLastNotice = currentPage * listCount;
    //예를 들어, 현재 페이지가 3페이지, 한 페이지에서 보여줄 글의 수가 10개인 경우 시작 인덱스는 (3 - 1) * 10 = 20, 끝 인덱스는 20 + 10 - 1 = 29가 된다.

    // 무엇으로 검색해야될지 결과에 따라 나타내줍니다.
    const filteredData = data && data.filter((item) =>
        searchBy === 'title' ? item.title.includes(search) : item.author.includes(search)
    );

    const handleClick = async (id) => {
        try {
            // 조회수를 1개 증가, 선택된 게시글 보여주기
            await axios.post(`https://ghd-1.herokuapp.com/api/notice/count/${id}`);
            navigate(`/notice/board/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className={style.notice}>
            <div className={style.notice_contain}>
                <h2>공지사항</h2>
                <div>
                    {login[0] === 1 && login[1] && (
                        <div className={style.edit_contain}>
                            <Link to="/notice/write"><button>글쓰기</button></Link>
                        </div>
                    )}
                    <div className={style.list_count}>
                        <select
                            onChange={(e) => {
                                handleListCount(parseInt(e.target.value));
                            }}
                        >
                            <option value={10}>10개 보기</option>
                            <option value={20}>20개 보기</option>
                            <option value={30}>30개 보기</option>
                        </select>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일자</th>
                            <th>조회</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredData && filteredData.slice(indexOfFirstNotice, indexOfLastNotice)
                        .map((notice) => (
                            <tr key={notice.id}>
                                <td>{notice.id}</td>
                                <td onClick={() => handleClick(notice.id)}>{notice.title}</td>
                                <td>{notice.author}</td>
                                <td>{notice.created_at.substring(0, 10)}</td>
                                <td>{notice.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={style.pagination_contain}>
                    <button onClick={() => handlePageChange(1)}>{"<<"}</button>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>이전</button>
                    {data && [...Array(Math.min(5, Math.ceil(data?.length / listCount))).keys()].map(num => {
                        const page = num + Math.max(Math.min(currentPage - 2, Math.ceil(data?.length / listCount) - 4), 1);
                        const isCurrentPage = page === currentPage;
                        return (
                            <button
                                key={num}
                                className={isCurrentPage ? style.current_page : style.none_current_page}
                                onClick={() => handlePageChange(page)}
                                disabled={isCurrentPage}
                            >
                                {page}
                            </button>
                        );
                    })}
                    <button onClick={() => handlePageChange(Math.min(currentPage + 1, Math.ceil(data?.length / listCount)))} disabled={indexOfLastNotice >= data?.length}>다음</button>
                    <button onClick={() => handlePageChange(Math.ceil(data?.length / listCount))}>{">>"}</button>
                </div>
                <div className={style.search_contain}>
                    <select value={searchBy} onChange={handleSearchByChange}>
                        <option value="title">제목</option>
                        <option value="author">작성자</option>
                    </select>
                    <input type="text" value={search} onChange={handleSearch} />
                    <button className={style.search_button} >
                        <FontAwesomeIcon className={style.search_button_fa} icon={faMagnifyingGlass} />
                    </button>
                </div>

            </div>

        </section>
    );
};

export default Notice;

