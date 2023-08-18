import React, { createContext, useState, useEffect} from "react";


export const ProductContext = createContext();



const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            fetch('https://fakestoreapi.com/products')
            .then((res) => {
                res.json()
                .then((data) => {
                    setProducts(data)
                    console.log('data', data)

                    // getting all categories
                    let allCategories =  data.map(product => {
                        return product.category;
                })
                    setCategories([...new Set(allCategories)])
                   

                }
                ).catch(err => console.log('error in Context', err))
            })
            .catch(err => {
                setProducts([]);
                console.log(err)
            })

            setCategories(['mens', 'women', 'dress and more'])
        }
        fetchProducts();
    }, [])


    return (
        <ProductContext.Provider value={{products, categories}}>
            {children}
        </ProductContext.Provider>
        )
}


export default ProductProvider;