import Item from "./Item"

const itemsList = ({items}) => {
    return (
        <>
            {items.map(items => <div key={items.id} className="col-md-4">
                <Item items={items} />
        </div> )}
        </>
    )
}



export default itemsList; 