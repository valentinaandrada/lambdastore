// Styles
import { BsCreditCard, BsArrowCounterclockwise } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";

function Footer() {
  return (
    <div className="border-top">
      <div className="d-flex mt-5 justify-content-evenly">
        <div className="p-5 text-center">
          <BsCreditCard size={50} color="#c2a18a" />
          <p className="text-uppercase fw-bold ff-secondary pt-3 mb-1">
            Payment methods
          </p>
          <p className="ff-secondary f-smaller">
            Choose from different payment methods
          </p>
        </div>
        <div className="p-5 text-center">
          <MdLocalShipping size={50} color="#c2a18a" />
          <p className="text-uppercase fw-bold ff-secondary pt-3 mb-1">
            SHIPPING
          </p>
          <p className="ff-secondary f-smaller">
            Standard delivery from 2 to 4 working days
          </p>
        </div>
        <div className="p-5 text-center">
          <BsArrowCounterclockwise size={50} color="#c2a18a" />
          <p className="text-uppercase fw-bold ff-secondary pt-3 mb-1">
            Returns
          </p>
          <p className="ff-secondary f-smaller ">
            Easy return by mail or store in 60 days{" "}
          </p>
        </div>
      </div>

      <div className="f-smaller ff-secondary text-center mt-5">
        <p className="mb-2">© 2022 LAMBDA All rights reserved</p>
        <p>
          {" "}
          <a href="/" className="link px-2">
            Privacy policy and cookies
          </a>{" "}
          |{" "}
          <a href="/" className="link px-2">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
