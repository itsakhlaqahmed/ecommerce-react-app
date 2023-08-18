import React, { Fragment } from "react";
import Hero from "../components/Hero";
import ProductRow from "../components/ProductRow";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
    const {search} = useParams();
    return (
        <Fragment>
            <Hero />
            <ProductRow heading={"Result for \"You\""}/>
        </Fragment>
    )
}

export default ProductsPage;