import React, { useState, useEffect } from "react";
import { PageData } from "../assets/data";
import "./Footer.css";

function Footer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(PageData.Footer);
  }, []);

  return (
    <>
      <footer className="footer blue_bg">
        <div className="top_svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439.82 88.25">
            <path
              className="cls-q1"
              fill="#ffffff"
              d="M0,2S326.83,88.25,726.91,88.25C1133.36,88.25,1439.82,0,1439.82,0Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ftr_item ftr_logo_blk">
              <div className="footer_inner_item">
                <a href="#" className="footer_logo">
                  {data.Icon && (
                    <img
                      src={`./src/assets/images/${data.Icon.Path}`}
                      alt={data.Icon.Name}
                      key={Date.now() * Math.random()}
                    />
                  )}
                </a>
                {data.SubText ? (
                  <p key={Date.now() * Math.random()}>{data.SubText}</p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ftr_item ftr_link_sec">
              <div className="footer_link footer_inner_item">
                {data.Menu ? (
                  <ul>
                    {data.Menu.map((item) => (
                      <li key={Date.now() * Math.random()}>
                        {
                          <a href="#" className="ft_link">
                            {item.Name}
                          </a>
                        }
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ftr_item ftr_link_sec2">
              <div className="footer_link footer_inner_item">
                {data.NoteMenu ? (
                  <ul>
                    {data.NoteMenu.map((item) => (
                      <li key={Date.now() * Math.random()}>
                        {
                          <a href="#" className="ft_link">
                            {item.Name}
                          </a>
                        }
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ftr_item ftr_copyright">
              <div className="footer_copyright footer_inner_item">
                {data.Icon
                  ? `Copyright © 2020 ${(
                      <a href="#">{data.Icon.Name}</a>
                    )} All rights reserved`
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_design">
          {data.Images &&
            data.Images.map((item) => (
              <img
                src={`./src/assets/images/${item.Path}`}
                alt={data.Icon.Name}
                key={Date.now() * Math.random()}
              />
            ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
