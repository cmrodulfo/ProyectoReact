export const ItemDetail = ({ item }) => {
console.log(item)
    const { producto, imagen, precio, moneda } = item

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-5 col-sm-4">
                    <img src={imagen} className="img-fluid w-100" alt={imagen}/>
                </div>
                <div className="col-7 col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto}</h5>
                        <p className="card-text">{moneda}{precio}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}