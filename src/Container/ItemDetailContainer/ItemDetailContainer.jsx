// React
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// Helpers
import { getFetch } from "../../helpers/getFetch";

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loader, setLoader] = useState(true);
    const {id} = useParams();
    
    useEffect(() => {
      getFetch(id)
        .then((resp) => setItem(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    }, [id]);
    
    return (
      <div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <ItemDetail item={item}/>
      )}
    </div>
  )
}

export default ItemDetailContainer