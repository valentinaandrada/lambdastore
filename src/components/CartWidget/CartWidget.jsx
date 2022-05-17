import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <Link to='/cart'>
        <button href="#cart" className="px-3 border-0 bg-transparent">
          <BsCart2 color="black" size={25} />
        </button>
      </Link>
    </div>
  );
};
