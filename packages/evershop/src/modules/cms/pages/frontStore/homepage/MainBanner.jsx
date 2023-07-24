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
        <img style={{width: '100%', height: '80vh', objectFit: 'cover'}} src="https://kinhmatlily.com/images/best-seller.jpg" alt="Banner Slide 1" />
      </div>
      <div className="slide">
        <img style={{width: '100%', height: '80vh', objectFit: 'cover'}} src="https://matkinhhanghieu.com/wp-content/uploads/2023/01/offer-banner2.jpg" alt="Banner Slide 2" />
      </div>
    </Slider>

  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
