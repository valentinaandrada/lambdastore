// Styles
import "./Banner.css";

function Banner({ message }) {
  return (
    <div className="banner py-2 d-flex justify-content-center align-items-center">
      <p className="mb-0 text-uppercase text-center f-smaller ">
        {message}
      </p>
    </div>
  );
}

export default Banner;
