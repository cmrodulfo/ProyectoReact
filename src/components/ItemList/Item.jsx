export const Item = ({item}) => {

const {producto, imagen, precio, moneda} = item

    return (
        <div claseName="col">
            <div className="card">
                <img src={imagen} className="card-img-top" alt={producto} />
                <div className="card-body">
                    <h5 className="card-title initialism link-primary">{producto}</h5>
                    <p className="card-text">{moneda}{precio}</p>
                    
                </div>
            </div>
        </div>
    )
}