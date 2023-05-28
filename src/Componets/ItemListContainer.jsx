import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import itemsList from "./itemsList";
import productos from "./json/productos.json"


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect (() => {
        const promesa = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos)
            }, 2000);

        });

        promesa.then (data => {
            setItems(data);
        })
    }, []);


    return (
        <div className="container">
            <div className="col text-center p-5">    
            <itemList items={items} />
            <ItemCount stock={15}/>
            </div>
        </div>
    )
}

export default ItemListContainer;