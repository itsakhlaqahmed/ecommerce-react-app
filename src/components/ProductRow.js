import React, { Fragment, useState } from "react";
import ProductCard from "./ProductCard";


const ProductRow = ({heading, data}) => {
    return (
        <section className="product-section" >
            { heading && (<h3 className="title-heading">{heading}</h3> || 'Product Row') }
            <div className="product-row">

                {
                    data.map((product, index) => {
                        return <ProductCard key={product.id || index} {...product} />
                    })
                }



                {/* this part is for development it returns these divs if there is no data passed */}
                {
                    !data && <Fragment>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />  
                            </Fragment>
                }          

            </div>
        </section>

    )
}

export default ProductRow;