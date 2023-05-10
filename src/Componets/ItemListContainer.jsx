const ItemListContainer =({greeting}) => {
    return (
        <div className="container">
            <div className="col text-center p-5">
                <div className="alert alert-dark" role="alert">{greeting}</div>
            </div>
        </div>
    )
}

export default ItemListContainer;