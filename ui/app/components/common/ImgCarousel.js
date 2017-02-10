import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';

export default class ImgCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value)
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      currentSlide: 1,
      slideCount: 10,
      arrows: true,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 2000,
      centerPadding: '-100px'
    };
    const caruselImgStyle = {
      width: '80%'
    }
    const carouselContainer = {
      overflow: 'hidden',
      padding: '20px'
    }

    return (
      <div style={carouselContainer}>
        <Slider ref='slider' {...settings}>
          <div><img style={caruselImgStyle} src='http://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_1.0/assets/images/banners/2016/11/23/11479890870786-Slideshow-1920-x-1080-px--4-.jpg' /></div>
          <div><img style={caruselImgStyle} src='http://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_1.0/assets/images/retaillabs/2016/11/14/11479125104442-U-S-polo-2_-DMPB_SB1.jpg' /></div>
          <div><img style={caruselImgStyle} src='http://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_1.0/assets/images/retaillabs/2017/1/19/11484815231526-AAY-Gothic-Garden-desktop_slideshow.jpg' /></div>
        </Slider>
      </div>
    );
  }
}
