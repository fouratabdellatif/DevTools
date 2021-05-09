import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import Post from "../Posts/Post";
import { getPosts } from "../../actions/posts";

function OffSlider() {

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
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

    ],
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (

    !posts.length ?
      <div>
        <CircularProgress />
      </div> : (
        <SliderWrapper>
          <Slider {...settings}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={10} md={10}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Slider>
        </SliderWrapper>
      )
  );
}

export default OffSlider
