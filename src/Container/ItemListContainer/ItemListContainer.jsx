import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";

import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";


export const ListItemContainer = ({ banner }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const {cat} = useParams()

  useEffect(() => {
    if(cat) {
      getFetch()
        .then(resp => setItems(resp.filter((items)=> items.category === cat)))
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    } else {
      getFetch()
      .then((resp) => setItems(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
    }
  }, [cat]);

  console.log(items)

  
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
