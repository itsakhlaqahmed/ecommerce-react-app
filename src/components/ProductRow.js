import React from "react";
import ProductCard from "./ProductCard";


const ProductRow = ({heading, data}) => {
    return (
        <section className="product-section" >
            { heading && (<h3 className="title-heading">{heading}</h3> || 'Product Row') }

            <div className="product-row">
                { 
                    data &&
                    data.map((product, index) => {
                        return <ProductCard key={product.id || index} {...product} />
                    })
                }
                
            </div>
        </section>
    )
}

export default ProductRow;