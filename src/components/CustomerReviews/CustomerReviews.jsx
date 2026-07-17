import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
  "/reviews/review13.jpeg",
];
export default function CustomerReviews() {
  return (
    <section className="customer-reviews">
      <h2>❤️ Customer Love</h2>
      <div className="review-stats">
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <span className="score">4.9/5 Rating</span>
        <span className="dot">·</span>
        <span>Based on Real WhatsApp Reviews</span>
        <span className="dot">·</span>
        <span>💐 300+ Bouquets Delivered</span>
        <span className="dot">·</span>
        <span>❤️ 200+ Happy Customers</span>
        <span className="dot">·</span>
        <span>🚚 99% On-Time Delivery</span>
        <span className="badge">✔ Verified WhatsApp Reviews</span>
      </div>
      <div className="review-slider">
        <button className="review-nav prev">‹</button>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: ".review-nav.next", prevEl: ".review-nav.prev" }}
          pagination={{ clickable: true }}
        >
          {reviews.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <img src={image} alt="Customer Review" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="review-nav next">›</button>
      </div>
    </section>
  );
}
