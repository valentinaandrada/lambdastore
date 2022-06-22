// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Firebase
import { getFirestore, doc, getDoc } from "firebase/firestore";
// Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "products", id);
    getDoc(dbQuery)
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [id]);

  return (
    <div>
      {loader ? <div className="loader"></div> : <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
