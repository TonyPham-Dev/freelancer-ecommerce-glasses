/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "@components/frontStore/cms/Button";
import "./FeaturedCategories.scss";
import Slider from "react-slick";

export default function FeaturedCategories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <div className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width mb-[20px]">
          <div className="product-container">
            <div className="text-center">
              <img
                styles={{ width: "100%", margin: '0 auto' }}
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
            <Button url="/kinh-mat-nam" title="Kính mắt thời trang" variant="primary" />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: "100%", margin: '0 auto' }}
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
            <Button url="/kinh-mat-nu" title="Kính mắt cao cấp" variant="primary" />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: "100%"}}
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
            <Button
              url="/kinh-mat-nu-dep"
              title="Kính mắt nữ đẹp"
              variant="primary"
            />
          </div>
        </div>
        <div className="text-center product-height">
          <h2>Sản phẩm nổi bật</h2>
        </div>
        <div className="product-border" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width mb-[20px]">
          <div className="product-container">
            <div className="text-center">
              <img
                styles={{ width: "100%" }}
                src="https://kinhmatbichngoc.vn/temp/-uploaded-2021-04_GX_Catino_60301_c7-660.000-1_cr_480x640.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">CATINO 60306 c2 1</h3>
            <div className="mb-1">
              <p>
                Gọng kính CATINO 60306 c2 1 với thiết kế dáng mắt tròn trẻ
                trung, hợp thời trang với mọi lứa tuổi, đem lại cảm giác mới mẻ
                và năng động cho người ...
              </p>
            </div>
            <Button
              url="/gong-kinh"
              title="Gọng kính"
              variant="primary"
            />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: "100%" }}
                src="https://kinhmatbichngoc.vn/temp/-uploaded-2021-06_DSC08160_cr_480x640.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">Mắt kính DuraVision</h3>
            <div className="mb-1">
              <p>
              Mắt kính Zeiss DuraVision Blue Protect 1.67 phù hợp nhất với người có độ cận từ 0.00 đến 7.00 hoặc độ viễn từ 0.00 đến 5.00. Sản phẩm có các tính ...
              </p>
            </div>
            <Button
              url="/mat-kinh"
              title="Mắt kính"
              variant="primary"
            />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: "100%" }}
                src="https://kinhmatbichngoc.vn/temp/-uploaded-2021-05_RB-3716-9008-5151IT-51-21-145-5950-1_cr_480x640.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Rayban 3716 9008/51(51IT)
            </h3>
            <div className="mb-1">
              <p>
                Kính râm Rayban 3716 9008/51(51IT) với thiết kế dáng mắt
                Browline trẻ trung, hợp thời trang với mọi lứa tuổi, cùng với
                mắt kính chống tia UV tuyệt đối đem lại cảm ...
              </p>
            </div>
            <Button
              url="/kinh-ram"
              title="Kính Râm"
              variant="primary"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width ">
          <div className="product-container">
            <div className="text-center">
              <img
                styles={{ width: "100%" }}
                src="https://kinhmatbichngoc.vn/temp/-uploaded-2021-04_GX_Catino_60301_c7-660.000-1_cr_480x640.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">CATINO 60306 c2 1</h3>
            <div className="mb-1">
              <p>
                Gọng kính CATINO 60306 c2 1 với thiết kế dáng mắt tròn trẻ
                trung, hợp thời trang với mọi lứa tuổi, đem lại cảm giác mới mẻ
                và năng động cho người ...
              </p>
            </div>
            <Button
              url="/gong-kinh"
              title="Gọng kính"
              variant="primary"
            />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: "100%" }}
                src="https://kinhmatbichngoc.vn/temp/-uploaded-2021-06_DSC08160_cr_480x640.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">Mắt kính DuraVision</h3>
            <div className="mb-1">
              <p>
              Mắt kính Zeiss DuraVision Blue Protect 1.67 phù hợp nhất với người có độ cận từ 0.00 đến 7.00 hoặc độ viễn từ 0.00 đến 5.00. Sản phẩm có các tính ...
              </p>
            </div>
            <Button
              url="/mat-kinh"
              title="Mắt kính"
              variant="primary"
            />
          </div>
          <div className="product-container">
            <div>
              <img
                styles={{ width: "100%" }}
                src="https://kinhmatbichngoc.vn/temp/-uploaded-2021-05_RB-3716-9008-5151IT-51-21-145-5950-1_cr_480x640.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Rayban 3716 9008/51(51IT)
            </h3>
            <div className="mb-1">
              <p>
                Kính râm Rayban 3716 9008/51(51IT) với thiết kế dáng mắt
                Browline trẻ trung, hợp thời trang với mọi lứa tuổi, cùng với
                mắt kính chống tia UV tuyệt đối đem lại cảm ...
              </p>
            </div>
            <Button
              url="/kinh-ram"
              title="Kính Râm"
              variant="primary"
            />
          </div>
        </div>
      </div>
      
      <div className="container-blog-show">
      <div className="container-blog-text">
        <h1>Đảm bảo chất lượng</h1>
      </div>
      <div className="product-border" />
        <div className="container-content grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
          <div className="product-container flex flex-col items-center">
            <img
              className="mx-auto"
              src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/sunglasses1.png"
            />
            <h3>Mẫu mã đa dạng</h3>
            <p>
              Thấu hiểu thị hiếu khách hàng, mẫu mã của Eye Plus đa dạng, phù
              hợp với nhiều yêu cầu khác nhau.
            </p>
          </div>
          <div className="product-container flex flex-col items-center">
            <img
              className="mx-auto"
              src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/medal1.png"
            />
            <h3>CHẤT LƯỢNG ĐI ĐẦU</h3>
            <p>
              Các sản phẩm được chọn lựa kỹ lưỡng, độ tinh xảo cao đi cùng
              chuyên viên kinh nghiệm và máy móc tiên tiến, hiện đại.
            </p>
          </div>
          <div className="product-container flex flex-col items-center">
            <img
              className="mx-auto"
              src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/piggy-bank1.png"
            />
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
          <h1>Góc nhìn chuyên gia</h1>
        </div>
        <div className="product-border" />
        <div className="product-wrapper container-content grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
          <div className="product-container">
            <div>
              <img
                className="product-image"
                src="https://cdn.elly.vn/uploads/2023/07/09095949/cach-phoi-do-di-bien-cho-nu-trung-nien-11.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Gợi ý 10+ Cách phối đồ đi biển cho nữ trung niên ĐẸP và SANG
            </h3>
            <div className="mb-1">
              <p>
                Một bộ trang phục đi biển chắc chắn sẽ không được trọn vẹn và
                chỉn chu khi thiếu đi các món phụ kiện cần thiết. Chiếc váy maxi
                bay bổng và quyến rũ nên đi cùng với một chiếc mũ cói rộng vành
                hay mũ nhỏ có chóp, đừng quên tăng thêm vẻ sang chảnh với những
                chiếc kính râm, và một vài món phụ kiện như vòng tay, khuyên
                tai, túi xách, giày dép đi biển,…
              </p>
            </div>
          </div>
          <div className="product-container">
            <div>
              <img
                className="product-image"
                src="https://hmkeyewear.com/wp-content/uploads/2022/06/kinh-mat-nam-4.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Tại sao nam giới nên dùng kính mát chính hãng?
            </h3>
            <div className="mb-1">
              <p>
                Kính mát là phụ kiện thời trang thông dụng, phổ biến và gần như
                không thể thiếu đối với nhiều người nhất là mỗi khi đi ra đường,
                đi chơi, đi học,…Nhiều người dùng sẵn sàng bỏ ra một số tiền
                không nhỏ để mua được kính mát chính hãng.
              </p>
            </div>
          </div>
          <div className="product-container">
            <div>
              <img
                className="product-image"
                src="https://hmkeyewear.com/wp-content/uploads/2022/06/kinh-mat-cho-nam.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kính mát không độ nam giá bao nhiêu?
            </h3>
            <div className="mb-1">
              <p>
                Kính mát 0 độ nam có nhiều tính năng nổi bật: chống bức xạ,
                chống ánh sáng xanh, chống tia UV, chống chói, chống loá. Đối
                với loại kính mát chính hãng, có thương hiệu thì giá thường có
                phần cao, đắt đỏ hơn các loại khác.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-image ">
        <Slider {...settings}>
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF58750-C07_295x.JPG?v=1544556974"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF58773-C05_295x.JPG?v=1544557289"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J45043-grn_295x.jpg?v=1590119573"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J75006-SIL_295x.jpg?v=1518418395"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J75002-MBKL-AA_295x.jpg?v=1564166866"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J45033-BLK_295x.jpg?v=1516161502"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PS-9012-C19-B_295x.jpg?v=1565032999"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF27984-C82-6114_295x.jpg?v=1565031141"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF4026-C25_295x.jpg?v=1564512992"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PLD3018S-DL5Y2-A_295x.jpg?v=1520277415"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PA73401-B1_295x.JPG?v=1572975532"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PLD1017S-3YGH8-A_295x.jpg?v=1520277582"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PLD2060S-807-LM_295x.jpg?v=1576134623"
            alt=""
          />
        </Slider>
      </div>
    </>
  );
}

export const layout = {
  areaId: "content",
  sortOrder: 10
};
