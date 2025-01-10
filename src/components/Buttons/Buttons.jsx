// React
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="d-flex gap-2 justify-content-center">
      <Link to="/" className="link">
        <button className="btn-gral btn-color">CONTINUE SHOPPING</button>
      </Link>
      <Link to="/cart" className="link">
        <button className="btn-gral btn-white">CHECKOUT</button>
      </Link>
    </div>
  );
}

export default Buttons;
