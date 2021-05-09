import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import CardItem from '../cards/CardItem';
import '../../assets/css/OfferSlider.css'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '0', cursor: 'pointer', backgroundColor: 'transparent', alignItems: 'center', width: '40px', height: '40px' }}
            onClick={onClick}
        >
            <i className="fas fa-arrow-circle-right" style={{ width: '40px', height: '40px', alignItems: 'center' }}></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '0', cursor: 'pointer', backgroundColor: 'transparent', alignItems: 'center', zIndex: '999999', width: '40px', height: '40px' }}
            onClick={onClick}
        >
            <i className="fas fa-arrow-circle-left"></i>
        </div>
    );
}


function OfferSlider(props) {
    let settings = {
        // centerMode: true,
        // centerPadding:'80px',
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }

        ]
    }

    return (
        <div className='slider-style'>
            <div className="section-title">
                <h1>
                    Actualités et Offres
                </h1>
            </div>
            <Slider {...settings}>
                <CardItem
                    src='images/discount.jpg'
                    text='20% de réduction sur votre première livraison'
                    // label='Offres'
                    path='/'
                />
                <CardItem
                    src='images/free.jpg'
                    text='Livraison gratuite pour le client n°100'
                    // label='Offres'
                    path='/'
                />
                <CardItem
                    src='images/fidele.png'
                    text='Des points de fidelité à chaque livraison'
                    // label='Offres'
                    path='/'
                />
                <CardItem
                    src='images/recrute.webp'
                    text='Nous recrutons...'
                    // label='Recrutement'
                    path='/carrier'
                />
                <CardItem
                    src='images/sponsoring.png'
                    text='Nous cherchons des sponsors'
                    // label='Discover'
                    path='/'
                />
            </Slider>
        </div>

    )
}

export default OfferSlider
