import { BsCart2 } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <div>
      <button href="#cart" className="px-3 border-0 bg-transparent">
        <BsCart2 color="black" size={25} />
      </button>
    </div>
  );
};
