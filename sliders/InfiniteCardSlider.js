import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../assets/css/InfiniteCardSlider.css'
import CardItem from '../cards/CardItem';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowRightIcon
      className={className}
      style={{ ...style, background: "red", width: '40px', height: '40px', alignItems: 'center' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowLeftIcon
      className={className}
      style={{ ...style, background: "green", width: '40px', height: '40px' }}
      onClick={onClick}
    />
  );
}

function InfiniteCardSlider() {
  const settings = {
    autoplay: true,
    dots: true,
    dotsScroll: 3,
    overScan: 1,
    shift: 0,
    slidesToShow: 5,
    wheel: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <div className="section-title">
        <h1>
          COLIS-19 vous présente plusieurs offres que vous pouvez gagner
            </h1>
      </div>
      <Slider {...settings}>
        <CardItem
          src='images/bg03.png'
          text='Be the trainer'
          label='Train'
          path='/services'
        />
        <CardItem
          src='images/bg04.png'
          text='Train with a private coach'
          label='Train'
          path='/services'
        />
        <CardItem
          src='images/bg05.png'
          text='Sell the products you have'
          label='Shop'
          path='/products'
        />
        <CardItem
          src='images/bg06.png'
          text='Buy the products you want to have'
          label='Shop'
          path='/products'
        />
        <CardItem
          src='images/bg07.png'
          text='Discover this world'
          label='Discover'
          path='/sign-up'
        />
        <CardItem
          src='images/bg03.png'
          text='Be the trainer'
          label='Train'
          path='/services'
        />
        <CardItem
          src='images/bg04.png'
          text='Train with a private coach'
          label='Train'
          path='/services'
        />
        <CardItem
          src='images/bg05.png'
          text='Sell the products you have'
          label='Shop'
          path='/products'
        />
        <CardItem
          src='images/bg06.png'
          text='Buy the products you want to have'
          label='Shop'
          path='/products'
        />
        <CardItem
          src='images/bg07.png'
          text='Discover this world'
          label='Discover'
          path='/sign-up'
        />
      </Slider>
    </div>
  );
}

export default InfiniteCardSlider