import React, { useState, useEffect } from "react";
import { PageData } from "../assets/data";
import "./Home.css";
import Banner from "../shared/Banner";

function Home() {
  const [data_sec1, setData_sec1] = useState([]);
  const [data_sec2, setData_sec2] = useState([]);
  const [data_sec3, setData_sec3] = useState([]);
  const [data_sec4, setData_sec4] = useState([]);
  const [data_sec5, setData_sec5] = useState([]);
  useEffect(() => {
    setData_sec1(PageData.Pages.Home.Sec1);
    setData_sec2(PageData.Pages.Home.Sec2);
    setData_sec3(PageData.Pages.Home.Sec3);
    setData_sec4(PageData.Pages.Home.Sec4);
    setData_sec5(PageData.Pages.Home.Sec5);
  }, []);
  return (
    <>
      <Banner dataParam="Home" />
      <section className="section sec_block1 sec_blck">
        <div className="container">
          <div className="alter_box_row w-100">
            <div className="row sec_row align-items-center">
              <div className="col-lg-6 col-5 lft_blk">
                <figure className="bounce bounce2 anim">
                  {data_sec1.Images
                    ? data_sec1.Images.map((item, i) => (
                        <img
                          src={`../src/assets/images/${item.Path}`}
                          alt={item.Name}
                          key={Date.now() * Math.random()}
                          className={i ? "bounce" : null}
                        />
                      ))
                    : null}
                </figure>
              </div>
              <div className="col-lg-6 col-7 rt_blk">
                {data_sec1.Title && (
                  <h2 key={Date.now() * Math.random()}>{data_sec1.Title}</h2>
                )}
                {data_sec1.SubText && (
                  <p key={Date.now() * Math.random()}>{data_sec1.SubText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec_timeline home_sec_timeline">
        <div className="top_curve">
          <svg viewBox="0 0 1441 104">
            <path
              fill="#ffffff"
              d="M0,104S262.32,22.25,722.5,22.25,1441,104,1441,104V0H0Z"
            ></path>
          </svg>
        </div>
        <div className="top_curve2">
          <svg viewBox="0 0 186 123">
            <polygon
              fill="#94cbff"
              points="0 123 0 0 186 0 68.24 122.51 0 123"
            ></polygon>
          </svg>
        </div>

        <div className="container">
          <div className="header">
            {data_sec2.Title ? (
              <h2 key={Date.now() * Math.random()}>{data_sec2.Title}</h2>
            ) : null}
            {data_sec2.SubText ? (
              <p key={Date.now() * Math.random()}>{data_sec2.SubText}</p>
            ) : null}
          </div>
          <div className="timeline">
            <ul className="timeline_box num_count">
              {data_sec2.Features
                ? data_sec2.Features.map((item, i) => (
                    <li
                      className="row sec_row align-items-center"
                      key={Date.now() * Math.random()}
                    >
                      <div className="col-lg-6 col-4 lft_blk">
                        <figure
                          className={
                            i % 2
                              ? "timeline_inner bounce bounce2"
                              : "timeline_inner bounce"
                          }
                        >
                          <img
                            src={`../src/assets/images/${item.Images.Path}`}
                            key={Date.now() * Math.random()}
                            alt={item.Images.Name}
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-8 rt_blk">
                        <div className="timeline_inner">
                          {item.Title ? (
                            <p key={Date.now() * Math.random()}>{item.Title}</p>
                          ) : null}
                          {item.SubText ? (
                            <p key={Date.now() * Math.random()}>
                              <small>{item.SubText}</small>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
            {data_sec2.CTA ? (
              <div
                className="btn_block text-center"
                key={Date.now() * Math.random()}
              >
                <a href="#" className="basic_btn basic_btn_lt lg_btn">
                  {data_sec2.CTA.Name}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="location_sec section">
        <div className="container">
          <div className="header">
            {data_sec3.Title ? (
              <h2 key={Date.now() * Math.random()}>{data_sec3.Title}</h2>
            ) : null}
            {data_sec3.SubText ? (
              <p key={Date.now() * Math.random()}>{data_sec3.SubText}</p>
            ) : null}
          </div>
          <div className="bg_loc_img">
            {data_sec3.Images ? (
              <img
                src={`../src/assets/images/${data_sec3.Images.Path}`}
                key={Date.now() * Math.random()}
                alt={data_sec3.Images.Name}
              />
            ) : null}
            <div className="cntry_pos">
              <svg id="map_Layer_1" viewBox="0 0 1079.9 532.2">
                <g id="dot_4">
                  <g id="zoom4">
                    <g id="circle">
                      <circle
                        id="Rounded_Rectangle_1"
                        className="cls-1"
                        cx="837.74"
                        cy="321.11"
                        r="21.32"
                        opacity="0.66"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="838.19"
                        cy="320.66"
                        r="13.19"
                      />
                    </g>
                    <text
                      fill="#fff"
                      className="cls-3"
                      transform="translate(800.73 295.45)"
                    >
                      Indonesia
                    </text>
                  </g>
                  <circle
                    id="dot4"
                    fill="#00b456"
                    className="cls-4"
                    cx="838.5"
                    cy="321.06"
                    r="4.72"
                  />
                </g>
                <g id="dot_3">
                  <g id="zoom3">
                    <g id="circle-2">
                      <circle
                        id="Rounded_Rectangle_1-2"
                        fill="#fff"
                        opacity="0.66"
                        className="cls-1"
                        cx="765.87"
                        cy="222.71"
                        r="21.32"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy-2"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="766.33"
                        cy="222.26"
                        r="13.2"
                      />
                    </g>
                    <text
                      fill="#fff"
                      className="cls-3"
                      transform="translate(750.98 196.45)"
                    >
                      India
                    </text>
                  </g>
                  <circle
                    id="dot3"
                    fill="#00b456"
                    className="cls-4"
                    cx="766.96"
                    cy="221.81"
                    r="4.72"
                  />
                </g>
                <g id="dot_2">
                  <g id="zoom2">
                    <g id="circle-3">
                      <circle
                        id="Rounded_Rectangle_1-3"
                        fill="#fff"
                        opacity="0.66"
                        className="cls-1"
                        cx="842.35"
                        cy="120.62"
                        r="21.31"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy-3"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="842.8"
                        cy="120.17"
                        r="13.2"
                      />
                    </g>
                    <text
                      className="cls-3"
                      fill="#fff"
                      transform="translate(817 93.45)"
                    >
                      Russia
                    </text>
                  </g>
                  <circle
                    id="dot2"
                    fill="#00b456"
                    className="cls-4"
                    cx="842.5"
                    cy="120.06"
                    r="4.72"
                  />
                </g>
                <g id="dot_1">
                  <g id="zoom1">
                    <g id="circle-4">
                      <circle
                        id="Rounded_Rectangle_1-4"
                        fill="#fff"
                        opacity="0.66"
                        className="cls-1"
                        cx="379.28"
                        cy="378.72"
                        r="21.31"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy-4"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="379.73"
                        cy="378.27"
                        r="13.19"
                      />
                    </g>
                    <text
                      className="cls-3"
                      fill="#fff"
                      transform="translate(360.07 353.2)"
                    >
                      Brasil
                    </text>
                  </g>
                  <circle
                    id="dot1"
                    fill="#00b456"
                    className="cls-4"
                    cx="379.5"
                    cy="379.06"
                    r="4.72"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec_block1 sec_blck">
        <div className="container">
          <div className="header">
            {data_sec4.Title ? (
              <h2 key={Date.now() * Math.random()}>{data_sec4.Title}</h2>
            ) : null}
            {data_sec4.SubText ? (
              <p key={Date.now() * Math.random()}>{data_sec4.SubText}</p>
            ) : null}
            {data_sec4.CTA ? (
              <div
                className="text-center btn_wrap w-100"
                key={Date.now() * Math.random()}
              >
                {data_sec4.CTA.map((item, i) => (
                  <a
                    href="#"
                    key={Date.now() * Math.random()}
                    className={i % 2 ? "basic_btn" : "basic_btn basic_btn_lt"}
                  >
                    {item.Name}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {data_sec4.Features ? (
            <div className="alter_box_row w-100">
              {data_sec4.Features.map((item, i) => (
                <div
                  className="row sec_row align-items-center"
                  key={Date.now() * Math.random()}
                >
                  <div className="col-lg-6 col-5 lft_blk">
                    {item.Images ? (
                      <figure className="bounce bounce2">
                        <img
                          src={`./src/assets/images/${item.Images.Path}`}
                          alt={item.Images.Name}
                        />
                      </figure>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-7 rt_blk">
                    {item.Title ? <h2>{item.Title}</h2> : null}

                    {item.SubText ? <p>{item.SubText}</p> : null}

                    {item.CTA ? (
                      <a href="#" className="readmore">
                        {item.CTA.Name}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="joinus_sec">
        <div className="container">
          <div className="joinus_box">
            <div className="joinus_inner row align-items-center">
              <div className="col-lg-6 col-sm-12 lft_join">
                {data_sec5.Title ? (
                  <h2 key={Date.now() * Math.random()}>{data_sec5.Title}</h2>
                ) : null}
                {data_sec5.SubText ? (
                  <p key={Date.now() * Math.random()}>{data_sec5.SubText}</p>
                ) : null}
              </div>
              <div className="col-lg-6 col-sm-12 rt_join">
                {data_sec4.CTA ? (
                  <div className="btn_wrap w-100">
                    {data_sec4.CTA.map((item, i) => (
                      <a
                        href="#"
                        key={Date.now() * Math.random()}
                        className={
                          i % 2 ? "basic_btn" : "basic_btn basic_btn_lt"
                        }
                      >
                        {item.Name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
