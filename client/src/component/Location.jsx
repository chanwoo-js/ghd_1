import React, {useEffect} from 'react';
import style from "../css/location.module.css";

const Location = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${'4fe8cebc3e285957df6d8766ede9a0d3'}&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(37.54191769903512, 127.04701503065148 ),
                    level: 2
                };
                const map = new window.kakao.maps.Map(container, options);
                const mapTypeControl = new window.kakao.maps.MapTypeControl();
                map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
                const zoomControl = new window.kakao.maps.ZoomControl();
                map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
                const markerPosition  = new window.kakao.maps.LatLng(37.54191769903512, 127.04701503065148);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        };
    }, []);

    return (
        <section>
            <div className={style.location_contain}>
                <h2>LOCATION</h2>
                <div id="map" style={{ width: '100%', height: '500px' }} />
            </div>
        </section>
    );
};

export default Location;