// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Firebase
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
// Components
import ItemList from "../../components/ItemList/ItemList";
// Styles
import "./ItemListContainer.css";

export const ListItemContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");

    if (cat) {
      const queryCollectionFilterByCategory = query(
        queryCollection,
        where("category", "==", cat)
      );
      getDocs(queryCollectionFilterByCategory)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    }
  }, [cat]);

  return (
    <div className="section-container">
      {loader ? (
        <div className="loader"></div>
      ) : (
        <ItemList items={items}></ItemList>
      )}
    </div>
  );
};

export default ListItemContainer;
