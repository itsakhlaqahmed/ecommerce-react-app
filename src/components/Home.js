import React, { useContext, useState, useEffect } from "react";
import { Fragment } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Categories from "./Categories";
import ProductRow from "./ProductRow";
import { ProductContext } from "./core/ProductContext";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
    const { products } = useContext(ProductContext);

    
    // console.log('home', products)
    return (
        <Fragment>
            <Nav />
            <Hero />    
            <Categories categories={'categories'} />
            <ProductRow heading={"Recommended Products"} data={products}/>

        </Fragment>
    )
}

export default Home;