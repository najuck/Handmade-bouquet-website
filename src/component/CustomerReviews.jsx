import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const reviews = [
  "/reviews/review1.jpeg",
  "/reviews/review2.jpeg",
  "/reviews/review3.jpeg",
  "/reviews/review4.jpeg",
  "/reviews/review5.jpeg",
  "/reviews/review6.jpeg",
  "/reviews/review7.jpeg",
  "/reviews/review8.jpeg",
  "/reviews/review9.jpeg",
  "/reviews/review10.jpeg",
  "/reviews/review11.jpeg",
  "/reviews/review12.jpeg",
];
export default function CustomerReviews() {
  return (
    <section className="customer-reviews">
      <h2>❤️ Customer Love</h2>
      <div className="review-stats">
  <div className="rating">
    ⭐⭐⭐⭐⭐TR
    <h3>4.9/5 Rating</h3>
    <p>Based on Real WhatsApp Reviews</p>
  </div>
  <div className="stats">
    <div>💐 300+ Bouquets Delivered</div>
    <div>❤️ 200+ Happy Customers</div>
    <div>🚚 99% On-Time Delivery</div>
  </div>
  <div className="badge">
    ✔ Verified WhatsApp Reviews
  </div>
</div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="Customer Review"
              style={{
                width: "350px",
                margin: "auto",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,.2)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
