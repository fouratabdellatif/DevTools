import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from '../cards/CardItem';
import '../../assets/css/CardSlider.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function CardSlider(props) {
    return (
        <>
        <div className="section-title">
            <h1>
                COLIS-19 vous présente plusieurs offres que vous pouvez gagner
            </h1>
        </div>
            <Carousel
                focusOnSelect={true}
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // eslint-disable-next-line eqeqeq
                autoPlay={props.deviceType == false}
                autoPlaySpeed={500}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                centerMode={true}
            >
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
            </Carousel>
        </>
    )
}

export default CardSlider
