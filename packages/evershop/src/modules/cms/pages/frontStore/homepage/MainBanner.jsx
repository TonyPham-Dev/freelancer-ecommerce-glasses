import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Slider from 'react-slick';
import './MainBanner.scss';

export default function MainBanner() {
  const text = _('Discount ${discount} For All Orders Over ${price}', {
    discount: '20%',
    price: '$2000'
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>

      <div className="slide">
        <img style={{width: '100%', height: '80vh', objectFit: 'cover'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHwIfa83tAQNOjJdd9LRhjc9LNakC8v3jZnnOWc1dil6XHmsEdaab8z7DYAhcTiT3DGw&usqp=CAU" alt="Banner Slide 1" />
      </div>
      <div className="slide">
        <img style={{width: '100%', height: '80vh', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1517411020229-9cbb75afed2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Banner Slide 2" />
      </div>
    </Slider>

  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
