import React,{useState,useEffect} from "react";
import { PageData } from "../assets/data";
//import { PageData } from "../assets/data";
import "./Banner.css";

function Banner({ dataParam }) {
  // console.log(dataParam);
 const page = dataParam;
 const [data_banner, setData_banner] = useState([]);
   useEffect(() => {
    // console.log(PageData.Pages.Home.Banner);
     setData_banner(PageData.Pages.Home.Banner);
   }, []);
  return (
    <>
      {dataParam === "Home" ? (
        <section className="banner home_banner">
          <div className="home_banner_img">
            {data_banner.BgImg && (
              <img
                src={`./src/assets/images/${data_banner.BgImg.Path}`}
                alt={data_banner.BgImg.Name}
                key={Date.now() * Math.random()}
              />
            )}
            <span className="lft_star">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="1049.3px"
                height="510.8px"
                viewBox="0 0 1049.3 510.8"
              >
                <path
                  className="star"
                  d="M47.7,216.6c-8.9,0-9,9.2-9,9.2c0-8-8.8-9.2-8.8-9.2c9,0,8.8-9.2,8.8-9.2C38.7,216.6,47.7,216.6,47.7,216.6z"
                ></path>
                <path
                  className="star"
                  d="M93.4,19.6c-7.4,0-7.5,7.6-7.5,7.6c0-6.6-7.3-7.6-7.3-7.6c7.5,0,7.3-7.6,7.3-7.6C85.9,19.6,93.4,19.6,93.4,19.6z"
                ></path>
                <path
                  className="star"
                  d="M25.7,13.3c-12.9,0-13,13.3-13,13.3C12.7,15,0,13.3,0,13.3C13,13.3,12.7,0,12.7,0C12.7,13.3,25.7,13.3,25.7,13.3z"
                ></path>
                <path
                  className="star"
                  d="M47.9,470.1c-8.9,0-9,9.2-9,9.2c0-8-8.8-9.2-8.8-9.2c9,0,8.8-9.2,8.8-9.2C38.9,470.1,47.9,470.1,47.9,470.1z"
                ></path>
                <path
                  className="star"
                  d="M852.4,39.8c-10.8,0-10.9,11.2-10.9,11.2c0-9.7-10.7-11.2-10.7-11.2c10.9,0,10.7-11.2,10.7-11.2
            C841.5,39.8,852.4,39.8,852.4,39.8z"
                ></path>
                <path
                  className="star"
                  d="M581.1,479.6c-8.7,0-8.8,9-8.8,9c0-7.9-8.6-9-8.6-9c8.8,0,8.6-9,8.6-9C572.3,479.6,581.1,479.6,581.1,479.6z"
                ></path>
                <path
                  className="star1"
                  d="M830.7,461.8c4.8-0.4,4.4-5.3,4.4-5.3c0.4,4.3,5.1,4.5,5.1,4.5c-4.8,0.4-4.3,5.3-4.3,5.3
            C835.5,461.4,830.7,461.8,830.7,461.8z"
                ></path>
                <path
                  className="star"
                  d="M123.7,165.2c4.3-0.4,4-4.9,4-4.9c0.3,3.9,4.7,4.1,4.7,4.1c-4.4,0.4-3.9,4.8-3.9,4.8C128.1,164.8,123.7,165.2,123.7,165.2z"
                ></path>
                <path
                  className="star2"
                  d="M171.9,334.8c4.8-0.4,5.5,7.5,5.5,7.5c-0.6-6.9,4-8.3,4-8.3c-4.8,0.4-5.4-7.5-5.4-7.5C176.7,334.4,171.9,334.8,171.9,334.8z
            "
                ></path>
                <path
                  className="star2"
                  d="M282.3,49c4.8-0.6,4.4-8.4,4.4-8.4c0.4,6.8,5.1,7.1,5.1,7.1c-4.8,0.7-4.3,8.4-4.3,8.4C287.1,48.4,282.3,49,282.3,49z"
                ></path>
                <path
                  className="star1"
                  d="M1042.4,170.3c-8.1,2.8-5.4,11-5.4,11c-2.4-7.1-10.8-5.4-10.8-5.4c8.2-2.8,5.2-10.9,5.2-10.9
            C1034.2,173.1,1042.4,170.3,1042.4,170.3z"
                ></path>
                <path
                  className="star"
                  d="M962.8,349.6c-8.9,3.1-5.9,12.1-5.9,12.1c-2.7-7.8-11.9-5.9-11.9-5.9c9-3.1,5.7-12,5.7-12
            C953.8,352.7,962.8,349.6,962.8,349.6z"
                ></path>
                <path
                  className="star2"
                  d="M988.8,22.4c-12.9,4.5-8.6,17.5-8.6,17.5c-3.9-11.3-17.2-8.6-17.2-8.6c13-4.5,8.3-17.4,8.3-17.4
            C975.8,26.9,988.8,22.4,988.8,22.4z"
                ></path>
                <path
                  className="star1"
                  d="M1035.8,507c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C1042.6,504,1035.8,507,1035.8,507z"
                ></path>
                <path
                  className="star"
                  d="M873.3,235.6c4.6-2.1,2.6-6.7,2.6-6.7c1.8,4.1,6.7,2.6,6.7,2.6c-4.7,2.1-2.5,6.7-2.5,6.7C878,233.5,873.3,235.6,873.3,235.6
            z"
                ></path>
                <path
                  className="star2"
                  d="M543,94.2c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C549.8,91.2,543,94.2,543,94.2z"
                ></path>
              </svg>
            </span>
            <span className="rt_star">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="1049.3px"
                height="510.8px"
                viewBox="0 0 1049.3 510.8"
              >
                <path
                  className="star1"
                  d="M830.7,461.8c4.8-0.4,4.4-5.3,4.4-5.3c0.4,4.3,5.1,4.5,5.1,4.5c-4.8,0.4-4.3,5.3-4.3,5.3
            C835.5,461.4,830.7,461.8,830.7,461.8z"
                ></path>
                <path
                  className="star"
                  d="M123.7,165.2c4.3-0.4,4-4.9,4-4.9c0.3,3.9,4.7,4.1,4.7,4.1c-4.4,0.4-3.9,4.8-3.9,4.8C128.1,164.8,123.7,165.2,123.7,165.2z"
                ></path>
                <path
                  className="star2"
                  d="M171.9,334.8c4.8-0.4,5.5,7.5,5.5,7.5c-0.6-6.9,4-8.3,4-8.3c-4.8,0.4-5.4-7.5-5.4-7.5C176.7,334.4,171.9,334.8,171.9,334.8z
            "
                ></path>
                <path
                  className="star1"
                  d="M33.9,343.8c5.6-0.5,5.2-6.3,5.2-6.3c0.4,5,6,5.3,6,5.3c-5.7,0.5-5.1,6.3-5.1,6.3C39.6,343.3,33.9,343.8,33.9,343.8z"
                ></path>
                <path
                  className="star"
                  d="M962.8,349.6c-8.9,3.1-5.9,12.1-5.9,12.1c-2.7-7.8-11.9-5.9-11.9-5.9c9-3.1,5.7-12,5.7-12
            C953.8,352.7,962.8,349.6,962.8,349.6z"
                ></path>
                <path
                  className="star"
                  d="M991.2,118.3c-8.8,3-5.8,11.9-5.8,11.9c-2.7-7.7-11.7-5.8-11.7-5.8c8.9-3.1,5.6-11.8,5.6-11.8
            C982.3,121.4,991.2,118.3,991.2,118.3z"
                ></path>
                <path
                  className="star2"
                  d="M988.8,22.4c-12.9,4.5-8.6,17.5-8.6,17.5c-3.9-11.3-17.2-8.6-17.2-8.6c13-4.5,8.3-17.4,8.3-17.4
            C975.8,26.9,988.8,22.4,988.8,22.4z"
                ></path>
                <path
                  className="star1"
                  d="M1035.8,507c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C1042.6,504,1035.8,507,1035.8,507z"
                ></path>
                <path
                  className="star2"
                  d="M543,94.2c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C549.8,91.2,543,94.2,543,94.2z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="banner_inner">
            <div className="container">
              <div className="banner_content_inner text-center">
                {data_banner.Title ? (
                  <h1 key={Date.now() * Math.random()}>{data_banner.Title}</h1>
                ) : null}
                {data_banner.SubText ? (
                  <p key={Date.now() * Math.random()}>{data_banner.SubText}</p>
                ) : null}
                <div className="text-center btn_wrap w-100">
                  {data_banner.CTA
                    ? data_banner.CTA.map((item, i) => (
                        <a
                          href="#"
                          key={Date.now() * Math.random()}
                          className={
                            i > 0 ? "basic_btn" : "basic_btn basic_btn_lt"
                          }
                        >
                          {item.Name}
                        </a>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Banner;
