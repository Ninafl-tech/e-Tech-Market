import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function Slider() {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            className="w-100% h-96"
            src="https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg"
          />
        </div>
        <div>
          <img
            className="w-100% h-96"
            src="https://e0.pxfuel.com/wallpapers/775/107/desktop-wallpaper-the-online-influence-how-to-market-an-e-commerce-business.jpg"
          />
        </div>
        <div>
          <img
            className="w-100% h-96"
            src="https://texeducation.files.wordpress.com/2021/05/starting-an-ecommerce-business-.jpg"
          />
        </div>
        <div>
          <img
            className="w-100% h-96"
            src="https://eminence.ch/wp-content/uploads/2022/02/commerce-tips-2022.jpg"
          />
        </div>
        <div>
          <img
            className="w-100% h-96"
            src="https://au.buynship.com/contents/uploads/2020/02/BH.jpeg"
          />
        </div>
      </Carousel>
    </div>
  );
}
