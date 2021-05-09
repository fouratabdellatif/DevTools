import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import CardItem from '../cards/CardItem'

export default function FeedbackSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay
      mousewheel={true}
      effect="fade"
    >
      <SwiperSlide>
        <CardItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem />
      </SwiperSlide>
    </Swiper>
  );
};