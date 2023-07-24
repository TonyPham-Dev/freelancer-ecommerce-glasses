import React from 'react';
import Button from '@components/frontStore/cms/Button';
import './FeaturedCategories.scss';

export default function FeaturedCategories() {
  return (
    <>
      <div className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width ">
          <div className="product-container">
            <div className="text-center">
              <img
                styles={{ width: '100%' }}
                src="https://matviet.vn/wp-content/uploads/2023/06/63-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính mát Unisex MOLSION MS8058 A10
            </h3>
            <div className="mb-1">
              <p>
                Thiết kế của MOLSION MS8058 A10 mang tính Unisex, điều này có
                nghĩa là nó dành cho cả nam và nữ. Thiết kế unisex giúp sản phẩm
                phù hợp với nhiều kiểu khuôn mặt và phong cách thời trang khác
                nhau, từ cá tính đến lịch lãm.
              </p>
            </div>
            <Button url="/kids" title="Shop kids" variant="primary" />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: '100%' }}
                src="https://matviet.vn/wp-content/uploads/2023/06/66-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính Mát Unisex FLYER F93615 C1
            </h3>
            <div className="mb-1">
              <p>
                Gọng kính được thiết kế với chất liệu chắc chắn và nhẹ, đảm bảo
                cảm giác thoải mái khi đeo trong thời gian dài. Thiết kế unisex
                giúp nó phù hợp với nhiều khuôn mặt và phong cách thời trang
                khác nhau, từ cá tính đến thanh lịch.
              </p>
            </div>
            <Button url="/women" title="Shop women" variant="primary" />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: '100%' }}
                src="https://matviet.vn/wp-content/uploads/2023/05/1-1-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính Mát Unisex HANGTEN HTS22 BK
            </h3>
            <div className="mb-1">
              <p>
                Với thiết kế tinh tế, chất liệu chất lượng và tính năng bảo vệ
                mắt hiệu quả, kính mát Unisex HANGTEN HTS22 BK sẽ là một lựa
                chọn xuất sắc cho những ai yêu thích sự kết hợp giữa thời trang
                và chức năng của sản phẩm.
              </p>
            </div>
            <Button url="/men" title="Shop men" variant="primary" />
          </div>
        </div>
      </div>
      <div className="container-blog-show">
        <div className="container-content grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
          <div className="product-container">
            <img src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/sunglasses1.png" />
            <h3>Mẫu mã đa dạng</h3>
            <p>
              Thấu hiểu thị hiếu khách hàng, mẫu mã của Eye Plus đa dạng, phù
              hợp với nhiều yêu cầu khác nhau.
            </p>
          </div>
          <div className="product-container">
            <img src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/medal1.png" />
            <h3>CHẤT LƯỢNG ĐI ĐẦU</h3>
            <p>
              Các sản phẩm được chọn lựa kỹ lưỡng, độ tinh xảo cao đi cùng
              chuyên viên kinh nghiệm và máy móc tiên tiến, hiện đại.
            </p>
          </div>
          <div className="product-container">
            <img src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/piggy-bank1.png" />
            <h3>GIÁ CẢ HỢP LÝ</h3>
            <p>
              Mức giá cạnh tranh tương xứng với chất lượng, nhiều chương trình
              ưu đãi và chế độ bảo hành hậu mãi .
            </p>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="text-center">
            <h1>Bài viết mới nhất</h1>
            <p>Đây là một số lời phản hồi từ phía khách hàng</p>  
          </div>
          <div className='container-content grid grid-cols-1 md:grid-cols-3 gap-2 page-width'>
          <div className="product-container">
            <div>
              <img
                styles={{ width: '100%' }}
                src="https://matviet.vn/wp-content/uploads/2023/06/66-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính Mát Unisex FLYER F93615 C1
            </h3>
            <div className="mb-1">
              <p>
                Gọng kính được thiết kế với chất liệu chắc chắn và nhẹ, đảm bảo
                cảm giác thoải mái khi đeo trong thời gian dài. Thiết kế unisex
                giúp nó phù hợp với nhiều khuôn mặt và phong cách thời trang
                khác nhau, từ cá tính đến thanh lịch.
              </p>
            </div>
            <Button url="/women" title="Shop women" variant="primary" />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: '100%' }}
                src="https://matviet.vn/wp-content/uploads/2023/06/66-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính Mát Unisex FLYER F93615 C1
            </h3>
            <div className="mb-1">
              <p>
                Gọng kính được thiết kế với chất liệu chắc chắn và nhẹ, đảm bảo
                cảm giác thoải mái khi đeo trong thời gian dài. Thiết kế unisex
                giúp nó phù hợp với nhiều khuôn mặt và phong cách thời trang
                khác nhau, từ cá tính đến thanh lịch.
              </p>
            </div>
            <Button url="/women" title="Shop women" variant="primary" />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: '100%' }}
                src="https://matviet.vn/wp-content/uploads/2023/06/66-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính Mát Unisex FLYER F93615 C1
            </h3>
            <div className="mb-1">
              <p>
                Gọng kính được thiết kế với chất liệu chắc chắn và nhẹ, đảm bảo
                cảm giác thoải mái khi đeo trong thời gian dài. Thiết kế unisex
                giúp nó phù hợp với nhiều khuôn mặt và phong cách thời trang
                khác nhau, từ cá tính đến thanh lịch.
              </p>
            </div>
            <Button url="/women" title="Shop women" variant="primary" />
          </div>
          </div>
      </div>
    </>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
