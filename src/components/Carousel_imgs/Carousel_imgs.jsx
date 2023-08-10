import 'react-multi-carousel/lib/styles.css';
import './Carousel_imgs.css';

import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    // items: 3,
    // slidesToSlide: 3,
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    // items: 2,
    // slidesToSlide: 2,
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Carousel_imgs = ({ images, carouselHeight }) => {
  return (
    <Carousel
      style={{ height: carouselHeight }}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      //removeArrowOnDeviceType={["tablet", "mobile"]}
      removeArrowOnDeviceType={[]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {images.map((image, index) => {
        return (
          <img
            className="carousel-img-container"
            key={index}
            src={image}
            alt={`Carousel ${index}`}
            style={{ width: '100%', height: '100%' }}
          />
        );
      })}
    </Carousel>
  );
};

Carousel_imgs.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  carouselHeight: PropTypes.string,
};

export default Carousel_imgs;
