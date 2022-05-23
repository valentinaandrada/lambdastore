import { Link } from "react-router-dom";
import './Buttons.css'

function Buttons() {
  return (
    <div className="btns">
      <Link to="/" className="link">
        <button className="btn btn-color">CONTINUE SHOPPING</button>
      </Link>
      <Link to='/cart' className="link">
        <button className="btn btn-white">VIEW MY CART</button>
      </Link>
    </div>
  );
}

export default Buttons;
