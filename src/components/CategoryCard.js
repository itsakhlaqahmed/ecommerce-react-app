import React from "react";
import { Link } from 'react-router-dom';

const CategoryCard = ({category, image}) => {


    return (
        <Link to={`/category/${category}`} className="category-card" >
            <h3 className="card-heading">{(category || '').toUpperCase() || 'Category'}</h3>
            <img className="card-img" src={image} alt="imageit" />
        </Link>
    )
}

export default CategoryCard;