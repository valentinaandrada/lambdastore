import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";

import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";


export const ListItemContainer = ({ banner }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getFetch()
      .then((data) => setItems(data))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, []);

  console.log(items);

  return (
    <div>
      <p className="banner f-color text-center">
        {banner}
        <span className="txt-anim"></span>
      </p>
      <div className="section-container">
        {loader ? (
          <div className="loader"></div>
        ) : (
          <ItemList items={items}></ItemList>
        )}
      </div>
    </div>
  );
};

export default ListItemContainer;
