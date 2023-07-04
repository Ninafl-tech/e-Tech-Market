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
      </Carousel>
    </div>
  );
}
