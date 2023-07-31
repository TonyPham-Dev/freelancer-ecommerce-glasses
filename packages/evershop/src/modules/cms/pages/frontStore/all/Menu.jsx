import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Menu.scss';
import { createClient } from 'urql';

export default function Menu({ menu: { items } }) {
  const [isHovered, setIsHovered] = useState(false);
  const [products, setProducts] = useState([]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const client = createClient({
    url: '/api/graphql'
  });

  const dataProduct = [
    {
      name: 'CATINO 60306 c2 1',
      url: 'catino-60306'
    },
    {
      name: 'CATINO 60306 c3',
      url: 'catino-60306-c3'
    },
    {
      name: 'CATINO 60306 c2',
      url: 'catino-60306-c2'
    },
    {
      name: 'CATINO 60301 c7',
      url: 'catino-60301-c7'
    },
    {
      name: 'CATINO 60161 c1',
      url: 'catino-60161-c1'
    }
  ];

  return (
    <div
      className="menu-container main-menu self-center hidden md:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul className="isHidden nav flex space-x-275 justify-content-center">
          {items.map((i, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link hover:underline" href={i.url}>
                {i.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className={` product-header ${isHovered ? 'block' : 'hidden'}`}>
          {dataProduct.map((product, index) => (
            <li className="product-item" key={index}>
              <a className="nav-link hover:underline" href={product.url}>
                {product.name}
              </a>
            </li>
          ))}
        </ul>

        {/* <Products/> */}
      </div>
    </div>
  );
}

Menu.propTypes = {
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
  areaId: 'header',
  sortOrder: 5
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
