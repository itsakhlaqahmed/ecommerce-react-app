import React, {useContext}  from "react";
import CategoryCard from "./CategoryCard";
import { ProductContext } from "./core/ProductContext";
const image = 'https://static.vecteezy.com/system/resources/previews/002/816/670/non_2x/modern-armchair-with-mini-table-interior-of-the-living-room-with-furniture-flat-cartoon-style-illustration-vector.jpg'

const Categories = () => {
    const { categories } = useContext(ProductContext);

    return (
        <section className="categories-section">
            <h3 className="title-heading">Shop Our Top Categories</h3>
            <div className="category-cards">

                {categories.map((category,index) => {
                    return (
                        <CategoryCard key={index} category={category} image={image}/>
                    )
                })}
                {/* <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard /> */}
            </div>

        </section>
    )
}

export default Categories;