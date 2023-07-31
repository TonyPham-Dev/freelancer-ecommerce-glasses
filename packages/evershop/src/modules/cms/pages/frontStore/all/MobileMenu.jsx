/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import React from "react";
import "./MobileMenu.scss";

import { AiOutlineDown } from "react-icons/ai";

export default function MobileMenu({ menu: { items } }) {
  const [show, setShow] = React.useState(false);
  const [expandedProductIndex, setExpandedProductIndex] = React.useState(-1);
  const dataProduct = [
    {
      index: 1,
      name: "CATINO 60306 c2 1",
      url: "catino-60306"
    },
    {
      index: 2,
      name: "CATINO 60306 c3",
      url: "catino-60306-c3"
    },
    {
      index: 3,
      name: "CATINO 60306 c2",
      url: "catino-60306-c2"
    },
    {
      index: 4,
      name: "CATINO 60301 c7",
      url: "catino-60301-c7"
    },
    {
      index: 5,
      name: "CATINO 60161 c1",
      url: "catino-60161-c1"
    }
  ];
  const handleItemClick = (index) => {
    if (expandedProductIndex === index) {
      setExpandedProductIndex(-1);
    } else {
      setExpandedProductIndex(index);
    }
  };


  return (
    <div className="main-menu-mobile self-center">
      <a
        className="menu-icon"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShow(!show);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </a>
      {show && (
        <ul className="nav justify-content-center">
          {items.map((item, index) => (
            <li className="nav-item" key={index}>
              <div className="flex justify-between w-full">
                <a
                  className="nav-link hover:underline"
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(index);
                  }}
                >
                  {item.name}
                </a>
                  <AiOutlineDown
                    className={`justify-end w-[12px] ml-[5px] ${expandedProductIndex === index ? "transform rotate-180" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(index);
                    }}
                  />
              </div>
              <div>
                {expandedProductIndex === index && (
                  <ul className="product-header-mobile block">
                    {dataProduct.map((product, productIndex) => (
                      <li className="product-item" key={productIndex}>
                        <a className="nav-link hover:underline" href={product.url}>
                          {product.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


MobileMenu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export const layout = {
  areaId: "icon-wrapper",
  sortOrder: 50
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
