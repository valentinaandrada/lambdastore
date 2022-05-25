// React
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="btns">
      <Link to="/" className="link">
        <button className="btn-gral btn-color">CONTINUE SHOPPING</button>
      </Link>
      <Link to='/cart' className="link">
        <button className="btn-gral btn-white">VIEW MY CART</button>
      </Link>
    </div>
  );
}

export default Buttons;
