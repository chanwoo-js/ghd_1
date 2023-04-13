import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const pathname = useLocation(); // 현재 브라우저 위치 가져오기

    // console.log(pathname)
    // console.log(pathname.search);
    // console.log(pathname.hash);
    // console.log(pathname.state);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
export default ScrollToTop;