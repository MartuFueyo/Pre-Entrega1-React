import { useEffect } from "react";
import productos from "./json/productos.json"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout (() => {
                let producto = productos.find(item => item.id == 3)
                setItem(producto);       
            }, 2000)
        })

    }, []);

    return (
        <>
            <ItemDeatail producto={item} />
        </>
    )
}

export default ItemDetailContainer;