import React, { Fragment, useContext, useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { ProductContext } from "../components/core/ProductContext";

const SearchPage = () => {
    const {products} = useContext(ProductContext);
    const {searchItem} = useParams();
    const [result, setResult] = useState('');

    useEffect(() => {
        if (products){
            let items = products.filter((item) => {
            if(item.title.toLowerCase().includes(searchItem)){
                return true
            }
            return false;
        })

        setResult(items)
        }
    }, [products, searchItem])
    return (
        <Fragment>
            <Nav />
            {result && <ProductRow heading={`Results for "${searchItem}"...`} data={result}/>}
            {!result && 
            <Fragment>
                <h3>No Item Found for "{searchItem}"</h3>
                <ProductRow heading={`Other Products`} data={products}/>
            </Fragment>
        }
        </Fragment>
    )
}

export default SearchPage;