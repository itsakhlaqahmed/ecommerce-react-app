import React from "react";
const img1 = 'https://icms-image.slatic.net/images/ims-web/b4373f55-b4f1-4ff6-bddc-c7dcff9c9d03.jpg'
const img2 = 'https://icms-image.slatic.net/images/ims-web/dc6f3b8a-615c-458b-8088-27cb8ca91be1.jpg'
const img3 = 'https://icms-image.slatic.net/images/ims-web/7d04990e-a206-4587-ad9b-e3d880382bc3.jpg'
const Hero = () => {
    return (
        <div className="hero-section">
            <img src={img2} alt="HeroImg" className="hero-img"/>
        </div>
    )
}

export default Hero;