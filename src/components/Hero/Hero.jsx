import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="hero-height">
        <img className="d-md-none w-100" src='../assets/img/00_hero-mobile.jpg' alt="First slide" />
        <img
          className="d-none d-md-block w-100"
          src='../assets/img/00_hero-desktop.jpg'
          alt="First slide"
        />
        <Carousel.Caption className="text-light ">
          <h1 className="ff-accent hero-title">NEW</h1>
          <h1 className="ff-accent hero-title">IN</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="hero-height">
        <img className="d-md-none w-100" src='../assets/img/01_hero-mobile.jpg' alt="Second slide" />
        <img
          className="d-none d-md-block w-100"
          src='../assets/img/01_hero-desktop.jpg'
          alt="Second slide"
        />
        <Carousel.Caption className="text-light">
          <h1 className="ff-accent hero-title">NEW</h1>
          <h1 className="ff-accent hero-title">IN</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="hero-height">
        <img className="d-md-none w-100" src='../assets/img/02_hero-mobile.jpg' alt="Third slide" />
        <img
          className="d-none d-md-block w-100"
          src='../assets/img/02_hero-desktop.jpg'
          alt="Third slide"
        />
        <Carousel.Caption className="text-light">
          <h1 className="ff-accent hero-title">NEW</h1>
          <h1 className="ff-accent hero-title">IN</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
