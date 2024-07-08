import React, { useState, useEffect } from "react";
import { PageData } from "../assets/data";
import "./Header.css";

function Header() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(PageData.Header);
  }, []);

  return (
    <>
      <header className="main_nav sticky">
        <nav
          className="navbar navbar-expand-lg custom_navbar navbar-light"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              {data.Icon ? (
                <img
                  src={`./src/assets/images/${data.Icon.Path}`}
                  alt={data.Icon.Name}
                  key={Date.now() * Math.random()}
                />
              ) : null}
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                {data.Navbar?.map((item) => (
                  <li
                    key={Date.now() * Math.random()}
                    className={item.SubMenu ? "menu-item-has-children" : null}
                  >
                    <a href="#">{item.Name}</a>
                    {item.SubMenu ? (
                      <div className="sub-menu">
                        <ul>
                          {item.SubMenu.map((el) => (
                            <li key={Date.now() * Math.random()}>
                              <a href="#">{el.Name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cntry_flag">
              <select className="selectpicker_lang" data-width="fit">
                <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
                  English
                </option>
                <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
                  Español
                </option>
              </select>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
